const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const htmlToText = require('html-to-text')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const sendMail = require('./sendMail/sendMail')

// TODO
//
// - Password should not be in this file
// - Nodemailer stuff should also be refactored
app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.post('/api/contact-us', async (req, res) => {
      sendMail(req, res)
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
