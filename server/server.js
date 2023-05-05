const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(process.env.PORT, () => {
    console.log(
      `Making a todo list on port: ${process.env.PORT} with the ALLSTARS Casey, Nick, Gregg, and Kristen`
    );
  });

module.exports = app;
