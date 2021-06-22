require('dotenv').config()
const express = require("express");
var mongoose = require('mongoose');
const cors = require('cors')
const appRoutes = require('./routes.js')




var mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.x5zpv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/vaco-api',appRoutes)


app.listen(3000,()=>{console.log("port running")});