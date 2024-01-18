const { AppDataSource } = require("../models/data-source"); 

const createTodo = async (userId, title, content) => {
    try {
        const result = await AppDataSource.query(`
            INSERT INTO boards (
                user_id,
                title,
                content
            ) VALUES (
                ?,
                ?,
                ?
            )`, [userId, title, content]);
        return result;
    } catch (err) {
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};

const getTodo = async (userId) => {
    try{
        const result = await AppDataSource.query(`
        SELECT u.id,
        u.name,
        b.title,
        b.content
        FROM boards b
        LEFT JOIN users u ON b.user_id = u.id
        WHERE u.id = ?;
        `, [userId]);
        return result;

    }catch (err) {
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};

const detailTodo = async (todoId) => {
    try {
        const result = await AppDataSource.query(
            `
            SELECT 
            u.id,
            u.name,
            b.id,
            b.title,
            b.content
            FROM boards b
            LEFT JOIN users u ON b.user_id = u.id
            WHERE b.id=?;
            `,
            [todoId]
        );
        return result;
    } catch (err) {
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};

const updateTodo = async (title,content,todoId) => {
    try {
        const result = await AppDataSource.query(
            `
            UPDATE boards 
            SET title = ?,
                content = ?
            WHERE id = ?;
            `,
            [title,content,todoId]
        );
        return result;
    } catch (err){
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};

const deleteTodo = async(todoId) =>{
    try {
        const result = await AppDataSource.query(
            `
            DELETE FROM boards
             WHERE id=?;
            `,[todoId]
        );
        return result;
    }catch(err){
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode =400;
        throw error;
    }
};



module.exports = { createTodo, getTodo,detailTodo,updateTodo,deleteTodo };
