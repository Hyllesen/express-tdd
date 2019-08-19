const TodoModel = require("../model/todo.model");

exports.createTodo = () => {
  TodoModel.create();
};
