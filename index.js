const express = require("express");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares/index");
const app = express();
const PORT = 8000;

//connection
connectMongoDB(
  "mongodb+srv://roshanbam46:bam777rb@nodeexpressprojects.0cmbsu7.mongodb.net/RESTful-API?retryWrites=true&w=majority"
)
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.log("Mongo Error", err));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
