const express = require("express");
const userRouter = require("./routes/user");



const app = express();

app.use(express.json());
app.use('/api/v2/user' , userRouter.router);


app.listen(3000, () => {
  console.log("Server is connected ");
});
