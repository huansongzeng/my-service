const winston = require('winston');
const expressWinston = require('express-winston');

//more options here - https://github.com/bithavoc/express-winston#request-logging
const logger = expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  msg: "HTTP  ",
  expressFormat: true,
  colorize: false,
  ignoreRoute: function (req, res) { return false; }
});

module.exports = logger;