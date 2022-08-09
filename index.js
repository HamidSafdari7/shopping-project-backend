const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  }

}));

app.use("/products",require("./products"));
app.use("/login",require("./login").router);
app.use("/register",require("./register"));
app.use("/cart",require("./cart"));

const port = process.env.PORT || 3001;
app.listen(port, () =>console.log(`Listening on port ${port}...`));
