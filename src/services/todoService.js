const todoDao = require("../models/todoDao");

const createTodo = async (userId, title, content) => {
    return await todoDao.createTodo(userId, title, content);
};

const getTodo = async (userId) => {
    return await todoDao.getTodo(userId);
};

const detailTodo = async(todoId)=>{
    return await todoDao.detailTodo(todoId);
};

const updateTodo = async(title,content,todoId)=>{
    return await todoDao.updateTodo(title,content,todoId);
};

const deleteTodo = async(todoId) =>{
    return await todoDao.deleteTodo(todoId);
};


module.exports = { createTodo, getTodo,detailTodo,updateTodo,deleteTodo };