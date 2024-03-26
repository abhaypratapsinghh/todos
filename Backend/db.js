const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhay_123:abhay123@cluster0.nhxfc9z.mongodb.net/todo-application"
);



const todo = mongoose.model("todos", {
  id:String,
  title: String,
  description: String,
  completed: Boolean,
});

module.exports = {
    todo
}
