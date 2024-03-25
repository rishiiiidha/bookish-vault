const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const Book = require('./models/bookModel.js');
const booksRoute = require('./routes/BooksRoutes.js');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.use(cors());
app.use('/book', booksRoute);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("App Connected to database!");
  app.listen(PORT, () => {
    console.log('Server is running on port 3000');
  })
}).catch((e) => {
  console.log(e);
})