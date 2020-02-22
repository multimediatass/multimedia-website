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
const firebaseConfig = {
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
  
  // app.post('/api/signup', async(req, res, next)=>{
  //   auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
  //   .then((result)=>{
  //       res.json(result)
  //   }).catch((err)=>{
  //       res.json(err)
  //   });
  // })
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
  app.get('/admin', async(req, res, next)=>{
    await auth.onAuthStateChanged(user => {
      if(!user) return res.redirect('/')
      next();
   });
  })
  app.get('/admin/*', async(req, res, next)=>{
    await auth.onAuthStateChanged(user => {
      if(!user) return res.redirect('/')
      next();
   });
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
