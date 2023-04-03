const express = require("express");
const app = express();
const { logging, addMini, limiter } = require("./middleware");

// Apply the rate limiting middleware to all requests
app.use(limiter);

// it provides access to the body of the request, turns body into an object
app.use(express.json());

// logging middleware
app.use(logging);

// add miniCooper to request middleware
app.use(addMini);

// routers middleware
app.use("/", require("./model")); // send to which file

// start the server
const PORT = process.env.PORT || 6001; // use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
  console.log(`server alive on port ${PORT}`);
});

// note: https://github.com/russell-gh/ft3-first-server/blob/main/server.js
