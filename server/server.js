const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const firebase = require('firebase')
const moment = require('moment')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
require('dotenv').config({ path: 'firebase.env' })

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
}
firebase.initializeApp(config)

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.post('/api/contact-us', (req, res) => {
      firebase
        .database()
        .ref(moment().format('MMMM Do YYYY'))
        .push({
          time: moment().format('h:mm:ss a'),
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message
        })
        .catch(err => console.log(err))
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
