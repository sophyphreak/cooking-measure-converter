const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

// TODO
//
// - Nodemailer stuff should also be refactored

app.use(express.static(publicPath));

app.use(bodyParser.json());

app.get('*', (req, res) => {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.post('/api/contact-us', async (req, res) => {
  try {
    res.send('email received!');
    console.log(req.body);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'cookingmeasureconverter@gmail.com',
        pass: 'CJBhA25Qb6wd'
      }
    });

    const html = `<p><b>From</b></p>
    <p>${req.body.email}</p>
    <br />
    <p><b>Message</b></p>
    <p>${req.body.message}</p>`;

    console.log(`the html is ${html}`);

    const mailOptions = {
      from: 'Cooking Measure Converter',
      to: 'cookingmeasureconverter@gmail.com',
      subject: req.body.subject,
      html: html,
      text: htmlToText.fromString(html, {
        wordwrap: 130
      })
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
});
