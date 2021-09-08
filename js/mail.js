const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com"
  port: 587
  secure: true
  auth:{
    user: "kodemenbarros@gmail.com",
    pass: "k0d&123456"
  }
});

transporter.sendMail({
  from: "kodemenbarros@gmail.com",
  to: "jhrfbarros@gmail.com",
  subject: "subject",
  text:"text",
  html: <a href = "contato.html" />
}).then(message => {
  console.log(message);
}).cath(err => {
  console.log(err);
})