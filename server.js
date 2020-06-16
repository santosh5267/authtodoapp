const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

/* routes */

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/home", require("./routes/home"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
