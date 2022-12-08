const express = require("express");
var colors = require('colors');

const app = express();

PORT = 4000;

//LISTEN FOR REQUESTS
//TAKES IN TWO ARGUMENTS = PORT NUMBER AND CALLBACK FUNC
app.listen(PORT, () => {
  console.log(`VINO STORE API IS LISTENING ON PORT ${PORT}`.bgBlue.bold);
});
