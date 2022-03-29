const Express = require('express');
const app = Express();
const router = require('./router')
const logger = require('./logger')

app.use(logger)
app.use('/', router)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});