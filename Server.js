const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'frontend', 'build')))

    app.get('*', (req, res) => res.sendFile(
        path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log('App listening on port', PORT);
})

