const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const usersRoutes = require("./routes/UsersRoute");
const questionsRoutes = require("./routes/QuestionsRoute");

dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser
app.use(express.json());

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api/users", usersRoutes);
app.use("/api/questions", questionsRoutes);


app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});
