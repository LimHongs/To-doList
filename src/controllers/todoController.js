const { catchAsync } = require('../utils/error');
const todoService = require("../services/todoService");

const createTodo =catchAsync(async(req,res)=>{
    const {title,content} = req.body;
    const userId = req.user.id;
    await todoService.createTodo(userId,title,content);
    res.status(201).json({message : "board created"})
  });

  const getTodo = catchAsync(async (req, res) => {
    const postId = req.params.postId; // 쿼리 파라미터에서 postId 값을 받아옴
    const getTodo = await todoService.getTodo(postId);
    res.status(200).json(getTodo);
});





module.exports = {createTodo,getTodo};