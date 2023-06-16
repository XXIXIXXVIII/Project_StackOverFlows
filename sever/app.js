const express = require("express");
const Route = require("./router");
const app = express();

require("dotenv").config();
const  cookieParser = require('cookie-parser')
bodyParser = require("body-parser");
var cors = require('cors')

app.use('/', express.static('uploads'))
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
