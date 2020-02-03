const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:Andre16!@cluster0-rtqip.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use(require('./routes'));


app.listen(3333);

