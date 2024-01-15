const todoDao = require("../models/todoDao");

const createTodo = async(userId,title,content)=>{
    return await todoDao.createTodo(userId,title,content);
    
};

    const getTodo = async(postId) =>{
        return await todoDao.getTodo(postId);
    };



module.exports = {createTodo,getTodo};