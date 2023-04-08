const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use('/api', router)

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://user:qwerty123@cluster0.b7qpleo.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`) )
    } catch (err) {
        console.log(err)
    }
}

start()