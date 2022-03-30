require("dotenv").config()
const Express = require('express');
const app = Express();
const router = require('./router')
const logger = require('./logger')

//add logger and router
app.use(logger)
app.use('/', router)

// set port default to 8000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});