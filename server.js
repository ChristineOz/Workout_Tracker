const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true, 
      useFindAndModify: false
    }
  );

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT,function(){
    console.log(`App running on Port ${PORT}!`);
});