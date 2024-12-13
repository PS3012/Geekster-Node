const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASS = process.env.USER_PASS;
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/form.html`);
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_EMAIL,
      pass: USER_PASS,
    },
  });
  const mailOptions = {
    from: USER_EMAIL,
    to: email,
    subject: `Message from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .send("Failed to send email. Please try again later.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
