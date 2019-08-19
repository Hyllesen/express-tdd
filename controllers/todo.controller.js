const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
  TodoModel.create(req.body);
};
