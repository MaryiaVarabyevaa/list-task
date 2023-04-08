require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
    } catch (err) {
        console.log(err);
    }
}

start()