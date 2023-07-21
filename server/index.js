const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 5000;
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://truong:vminkook@atlascluster.yhsaiaq.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect to DB successfull!!');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})