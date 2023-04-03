const miniCooper = require("./data.json");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, //  1 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// add id in item
miniCooper.forEach((model, index) => {
  model.id = index + 1;
});

const logging = (req, res, next) => {
  console.log("new request inbound");
  next();
};

const addMini = (req, res, next) => {
  // attach miniCooper data to the request
  req.miniCooper = miniCooper;
  next();
};

module.exports = { logging, addMini, limiter };
