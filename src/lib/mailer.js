const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "20ff5c0881c2bc",
      pass: "21a358a00cc216"
    }
  })

  