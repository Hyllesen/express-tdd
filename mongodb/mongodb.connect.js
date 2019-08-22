const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb://SuperTestUser:SuperTestUser1@ds211648.mlab.com:11648/todo-tdd",
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
