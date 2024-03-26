const express = require('express');
const app = express();
const cors= require('cors');
const { createSchema, updateSchema } = require("./types")
const { todo } = require('./db')

const { signup } = require('./sign_up');
const { authentication } = require('./authentication');




app.use(express.json());
app.use(cors());


app.post("/signup", signup);

app.post("/todo", async function (req, res) { 

    const createPayload = req.body;
    const parsedPayload = createSchema.safeParse(createPayload);

    if (!parsedPayload) {
        res.status(404).json({
            msg: "entered data invalid"
        })
    }
    else {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed:false
        })

        res.json({
            msg: "todo created successfully"
        })
    }

})

app.get("/todo", async function (req, res) {
  const todos = await todo.find({});
  res.json(todos);
});

app.put("/completed/:todoId", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateSchema.safeParse(updatePayload);

  if (!parsedPayload) {
    res.status(404).json({
      msg: "entered data invalid",
    });
  } else {
    const ID = req.params.todoId;

    await todo.updateOne(
      { _id: ID },
      {
        completed: true,
        title: updatePayload.title,
        description: updatePayload.description,
      }
    );

    res.json({
      msg: "todo updated successfully",
    });
  }
});


app.listen(3000);