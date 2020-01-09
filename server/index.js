const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const errorHandler = require("./middleware/error")
const ErrorHandler = require("./utils/errorResponse")
const { responseData, responseMessage } = require("./utils/responseHandler")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('json spaces', 2)


const firebase  = require('firebase')
const firebaseConfig  = {
  // apiKey: "AIzaSyAlnwoYiA1usG1UBXr3OGBbVtz9QXAjE_A",
  // authDomain: "multimedia-website.firebaseapp.com",
  // databaseURL: "https://multimedia-website.firebaseio.com",
  // projectId: "multimedia-website",
  // storageBucket: "multimedia-website.appspot.com",
  // messagingSenderId: "851837886839",
  // appId: "1:851837886839:web:47e74a9424eedfd8170172",
  // measurementId: "G-BXKPEVZX67"
  apiKey: "AIzaSyAruiS-ZOiUOSYZP4q7xev9UMckcN8OA40",
  authDomain: "rudyfoods-98.firebaseapp.com",
  databaseURL: "https://rudyfoods-98.firebaseio.com",
  projectId: "rudyfoods-98",
  storageBucket: "rudyfoods-98.appspot.com",
  messagingSenderId: "821510242303",
  appId: "1:821510242303:web:f7ea6d2c74887eed9531ca"
};
firebase.initializeApp(firebaseConfig )
const auth = firebase.auth();
const firestore = firebase.firestore();


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
    // firebase.firestore().collection('users').get().then(docs=>{
    //   docs.forEach(doc=>{
    //     console.log(doc.data())
    //   })
    // })
    // return next(new ErrorHandler("konfirmasi password tidak sesuai!", 400));
    // responseData(res, 201, {data: "heyy"});
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

  // CLIENT
  app.get('/api/barang/ready', async(req, res, next)=>{
    firestore.collection('barang').where('stokBarang', '>', 0).get().then(docs=>{
      const data = []
      docs.forEach(doc=>{
        data.push({id: doc.id, namaBarang: doc.data().namaBarang, stokBarang: doc.data().stokBarang})
      })
      if (docs.size == 0) return next(new ErrorHandler("Maaf, Barang sudah dipinjam semua", 400))
      // res.json({barang: data, status: 200, message: 200})
      responseData(res, 200, data);
    }).catch(err=>{
      // res.json({barang: [], status: 400, message: err.code})
      return next(new ErrorHandler(err.code, 400));
    })
  })
  app.get('/api/barang/all', async(req, res, next)=>{
    firestore.collection('barang').get().then(docs=>{
      const data = []
      docs.forEach(doc=>{
        data.push({id: doc.id, namaBarang: doc.data().namaBarang, stokBarang: doc.data().stokBarang})
      })
      if (docs.size == 0) return next(new ErrorHandler("Maaf, Tidak ada Barang yang tersedia", 400))
      responseData(res, 200, data);
    }).catch(err=>{
      return next(new ErrorHandler(err.code, 400))
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
        }else {
          return next(new ErrorHandler("Ada kesalahan input, silahkan refresh halaman", 400))
        }
      }).then(result=>{
        if (check.length == listBarang.length) {
          commit = true
        }else {
          commit = false
          return next(new ErrorHandler("Ada kesalahan input, silahkan refresh halaman", 400))
        }
      }).catch(err=>{
        return next(new ErrorHandler(err.code, 400))
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
            endDate: req.body.detailData.endDate,
            expiredAfter: req.body.detailData.expiredAfter,
            catatan: req.body.detailData.catatan
          }).then(result=>{
            const obj = {id: result.id, expiredAfter: req.body.detailData.expiredAfter, submitAt: req.body.detailData.startDate}
            responseData(res, 200, obj);
          }).catch(err=>{
            return next(new ErrorHandler(err.code, 400))
          })
        }).catch(err=>{
          return next(new ErrorHandler(err.code, 400))
        })
      }
    }, 10);

  })

  app.use(errorHandler);

  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
