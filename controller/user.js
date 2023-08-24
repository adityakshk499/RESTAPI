const fs = require("fs");



let users = fs.readFileSync("users.json", "utf-8");
users = JSON.parse(users);





exports.getUsers = (req, res) => {
    res.status(200).json(users);
  };


exports.getUser = (req, res) => {
    let id = +req.params.id;
    let user = users.find((user) => user.id === id);
    res.status(200).json(user);
  };


exports.postUser = (req, res) => {
    users.push(req.body);
    res.status(200).json(req.body);
  };

exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const indexof = users.findIndex((user) => user.id === id);
    users.splice(indexof, 1);
    res.end("Deleted  Succesfully");
  };
  
exports.patchUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((user) => user.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body });
    res.status(201).json();
  };
  
exports.putUser = (req, res) => {
    const id = +req.params.id;
    const indexof = users.findIndex((user) => user.id === id);
    users.splice(indexof, 1, { ...req.body, id: id });
    res.end("update Succesfully");
  };