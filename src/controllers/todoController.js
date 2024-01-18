const { catchAsync } = require('../utils/error');
const todoService = require("../services/todoService");

const createTodo = catchAsync(async (req, res) => {
    const { userId,title, content } = req.body;
    await todoService.createTodo(userId, title,content);
    res.status(201).json({ message: "todo created" });
});

const getTodo = catchAsync(async (req, res) => {
    const userId = req.params.id; 
    const getTodo = await todoService.getTodo(userId);
    res.status(200).json(getTodo);
});

const detailTodo = catchAsync(async(req,res)=> {
    const todoId = req.query.todoId;
    const detailTodo = await todoService.detailTodo(todoId);
    res.status(200).json(detailTodo);
});

const updateTodo = catchAsync(async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title, content } = req.body;
        const updateTodo = await todoService.updateTodo(title,content,todoId);
        res.status(200).json(updateTodo);
    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const deleteTodo = catchAsync(async(req,res) =>{
    const todoId = req.params.id;
    await todoService.deleteTodo(todoId);
    res.status(200).json({ message: "todo delete" });
});




module.exports = { createTodo, getTodo, detailTodo,updateTodo,deleteTodo };