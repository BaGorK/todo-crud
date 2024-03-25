const dotenv = require('dotenv');
dotenv.config(`${__dirname}/.env`);

const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('database connected successfully');
  })
  .catch((err) => console.log(err));

const port = 3000;

// server
app.listen(port, console.log(`Server is listening on port ${port}`));
