require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Вы можете использовать другой сервис
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle form submission
app.post('/api/order', upload.single('file'), (req, res) => {
  const { name, email, phone, message } = req.body;
  const file = req.file;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'your-company-email@example.com', // Укажите email вашей компании
    subject: `Новая заявка на расчет от ${name}`,
    html: `
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong> ${message}</p>
    `,
    attachments: file ? [{
      filename: file.originalname,
      content: file.buffer,
    }] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Произошла ошибка при отправке заявки.');
    }
    res.status(200).send('Заявка успешно отправлена!');
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
