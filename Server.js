const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => console.error(err));

app.listen(5000, () => {
    console.log('App listening on port 5000!');
})
