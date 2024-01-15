
const { AppDataSource } = require("../models/deata-source");

    const createTodo = async(userId,title,content) =>{
        try{
            const result = await AppDataSource.query(`
            INSERT INTO boards (
                user_id,
                title,
                content
            )VALUES(
                ?,
                ?,
                ?
            )`,[userId,title,content]
 );
 return result
 
        }catch(err){
            console.log(err);
            const error = new Error("dataSource error");
            error.statusCode = 400;
            throw error;
        }
    }

const getTodo =async(postId) => {
    return await AppDataSource.query(
        `
        SELECT u.id as user_id, u.name, b.title, b.content
        FROM boards b
        LEFT JOIN users u ON b.user_id = u.id
        WHERE b.id =?;

        `,[postId]
    );
};


module.exports ={createTodo,getTodo};