const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let { Schema } = mongoose;

const app = express();

app.use(bodyParser.json());

let conn;
try {
  let domain = "mongodb+srv://";
  let username = "globiz";
  let password = "globiz";
  let host = "@cluster0.lbgxc4q.mongodb.net";
  let db = "basic";

  conn = mongoose.createConnection(
    `${domain}${username}:${password}${host}/${db}`
  );
  console.log(" Connected ");
} catch (error) {
  console.log(error);
}

let temp = new Schema({
  task: String,
  description: String,
});
let taskModel = conn.model("task-form", temp);

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "index.html"));
  } catch (err) {
    res
      .status(500)
      .send({
        status: false,
        message: "Error fetching tasks",
        error: err.message,
      });
  }
});

app.post("/submit-task", async (req, res) => {
  console.log(req.body);
  try {
    const newtask = new taskModel();
    newtask.task = req.body.task;
    newtask.description = req.body.description;

    await newtask.save();
    res.send({
      status: true,
      message: "Task added successfully !",
    });
  } catch {
    res
      .status(500)
      .send({ status: false, message: "Error saving task", error: err });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
