const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

const user = ""; // email do provedor
const pass = ""; // senha do provedor

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "", // servidor smtp
    port: "", // porta de envio
    auth: { user, pass },
  });
  transporter
    .sendMail({
      from: "", // conta que está enviando
      to: "", // conta que está recebendo
      replyTo: "", // conta para receber as respostas
      subject: "", // assunto do email
      text: "", // texto do email, podendo ser usado o html
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
