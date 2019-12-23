const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('json spaces', 2)

const firebase = require('firebase')
const firebaseConfig  = {
  apiKey: "AIzaSyAlnwoYiA1usG1UBXr3OGBbVtz9QXAjE_A",
  authDomain: "multimedia-website.firebaseapp.com",
  databaseURL: "https://multimedia-website.firebaseio.com",
  projectId: "multimedia-website",
  storageBucket: "multimedia-website.appspot.com",
  messagingSenderId: "851837886839",
  appId: "1:851837886839:web:47e74a9424eedfd8170172",
  measurementId: "G-BXKPEVZX67"
};
firebase.initializeApp(firebaseConfig )

const auth = firebase.auth()
const firestore = firebase.firestore()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  const axios = require('axios')

  // API
  app.get('/api/users', async (req, res, next) => {
    firebase.firestore().collection('users').get().then(docs=>{
      docs.forEach(doc=>{
        console.log(doc.data())
      })
    })
  })

  app.post('/api/signup', async(req, res, next)=>{
    auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    });
  })
  app.post('/api/signin', async(req, res, next)=>{
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(result=>{
      res.json(result)
    }).catch(err=>{
      res.json(err)
    })
  })
  app.get('/api/signout', async(req, res, next)=>{
    auth.signOut().then(result=>{
      res.redirect('/')
    })
  })
  app.get('/admin_panel', async(req, res, next)=>{
    auth.onAuthStateChanged(user => {
      if(user){
        next();
      }else {
        res.redirect('/login')
      }
   });
  })
  app.get('/api/peminjaman', async(req, res, next)=>{
    firestore.collection('peminjaman').get().then(docs=>{
      const data = []
      docs.forEach(doc=>{
        data.push(doc.data())
      })
      res.json(data)
    })
  })
  app.get('/api/barang', async(req, res, next)=>{
    firestore.collection('barang').where('stokBarang', '>', 0).get().then(docs=>{
      const data = []
      docs.forEach(doc=>{
        data.push({id: doc.id, namaBarang: doc.data().namaBarang, stokBarang: doc.data().stokBarang, jumlah: 1})
      })
      res.json(data)
    })
  })
  app.get('/api/barang/all', async(req, res, next)=>{
    firestore.collection('barang').get().then(docs=>{
      const data = []
      docs.forEach(doc=>{
        data.push({id: doc.id, namaBarang: doc.data().namaBarang, stokBarang: doc.data().stokBarang, jumlah: 1})
      })
      res.json(data)
    })
  })
  app.post('/api/peminjaman', async(req, res, next)=>{
    let listBarang = req.body.detailData.listBarang
    let check = []
    let batch = firestore.batch()
    let commit = false

    listBarang.forEach(barang=>{
      firestore.collection('barang').doc(barang.id).get().then(doc=>{
        let stokLatest = doc.data().stokBarang - barang.jumlah
        if (doc.exists && stokLatest >= 0) {
          let sfRef = firestore.collection('barang').doc(barang.id);
          batch.update(sfRef, {stokBarang: stokLatest});
          check.push(stokLatest)
        }
      }).then(result=>{
        if (check.length == listBarang.length) {
          commit = true
        }else {
          commit = false
        }
      })
    })
  
    setInterval(() => {
      if (commit == true) {
        commit = false
        clearInterval(this)
        batch.commit()
        .then(result=>{
          firestore.collection('peminjaman').add({
            user: req.body.detailData.user,
            listBarang: req.body.detailData.listBarang,
            lamaPinjam: req.body.detailData.lamaMeminjam,
            startDate: req.body.detailData.startDate,
            endDate: req.body.detailData.endDate
          }).then(result=>{
            res.json(result)
          }).catch(err=>{
            res.json(err)
          })
        }).catch(err=>{
          res.json(err)
        })
      }
    }, 10);

  })

  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
