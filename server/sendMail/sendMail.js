const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  res.send('email received!')
  console.log(req.body)
  const html = `<p><b>From</b></p>
  <p>${req.body.email}</p>
  <br />
  <p><b>Message</b></p>
  <p>${req.body.message}</p>`

  const msg = {
    from: req.body.email,
    to: 'cookingmeasureconverter@gmail.com',
    subject: req.body.subject,
    html: html,
    text: htmlToText.fromString(html, {
      wordwrap: 130
    })
  }
  sgMail.send(msg)
}
