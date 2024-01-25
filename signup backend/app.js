const express = require("express");

const app = express();

const userRoute = require("./routes/userRoute");
const sequelize = require("./util/database");

app.use(express.static("public"));
app.use("/user", userRoute);

app.use("/signup", (req, res, next) => {
  res.sendFile("signup.html", { root: "views" });
});

async function initiate() {
  try {
    await sequelize.sync();
    app.listen(3000, () => {
      console.log(`Server running on port 3000...`);
    });
  } catch (error) {
    console.log(error);
  }
}

initiate();
