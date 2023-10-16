const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/student-users");
const app = express();
const Jwt = require("jsonwebtoken");
const jwtKey = "gamified";
app.use(express.json());
app.use(cors());

app.post("/register/student", async (req, resp) => {
  const {username , email} = req.body;
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return resp.status(400).json({ message: "Username or email is already in use." });
    
  }
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
   if (err) {
      return resp.send({
       result: "Something went wrong , try again after sometime",
     });
   }
   resp.send({ result , auth: token });
 });
});

app.post("/login", async (req, resp) => {
  if (req.body.username && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
           return resp.send({
            result: "Something went wrong , try again after sometime",
          });
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "Enter all fields" });
  }
});

app.listen(5000);

