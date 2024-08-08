const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require('cors');

// initialize an Express application
const app = express();

// ==== Enable CorsOptions ===
// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// }
//
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//    res.json({msg: 'This is CORS-enabled for only example.com.'})
//  })

app.use(cors());
app.use(express.json());
// connect to the "src/routers" directory
const routersPath = path.join(__dirname, "routes");

// read all files in the "/src/routers" directory
fs.readdirSync(routersPath).forEach((file) => {
  if (file.endsWith(".js")) {
    // dynamically import the router module
    const routerModule = require(path.join(routersPath, file));

    // get the "router" object exported by the router module
    const router = routerModule.router;

    // register the router
    app.use(router);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
