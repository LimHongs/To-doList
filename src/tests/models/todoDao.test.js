const { AppDataSource } = require('../../models/data-source');


jest.mock('../../models/data-source', () => ({
  AppDataSource: {
    query: jest.fn()
  }
}));

const { createTodo, getTodo, detailTodo, updateTodo, deleteTodo } = require("../../models/todoDao");


describe("Todo DAO Unit Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createTodo", () => {
    test("todo 생성 테스트", async () => {
     
      const userId = 1;
      const title = "Test Todo";
      const content = "Test Content";
      AppDataSource.query.mockResolvedValue({ id: 1, userId, title, content });

      
      const result = await createTodo(userId, title, content);

  
      expect(result).toBeDefined();
      expect(result).toHaveProperty("id");
    });
  });

  describe("getTodo", () => {
    test("todo목록 불러오기", async () => {
      
      const userId = 1;
      const name = '임홍규';
      const title = 'todoTest';
      const content ='todoContentTest';


      AppDataSource.query.mockResolvedValue(name,title,content);

      
      const result = await getTodo(userId);

      
      expect(result).toBeDefined();

    });
  });

  describe("detailTodo", () => {
    test("todo의 세부 정보", async () => {
      
      const todoId = 1;
      const userId =1;
      const name = '임홍규';
      const title = 'todo test';
      const content = 'todo내용';

      AppDataSource.query.mockResolvedValue(todoId,userId,name,title,content);

      
      const result = await detailTodo(todoId);

      
      expect(result).toBeDefined();
      
    });
  });

  describe("updateTodo", () => {
    test("todo 업데이트", async () => {
      
      const title = "Updated Title";
      const content = "Updated Content";
      const todoId = 1;
      AppDataSource.query.mockResolvedValue(todoId,title,content);

      
      const result = await updateTodo(title, content, todoId);

      
      expect(result).toBeDefined();
  
    });
  });

  describe("deleteTodo", () => {
    test("todo 삭제 ", async () => {
    
      const todoId = 1;
      AppDataSource.query.mockResolvedValue(todoId);

 
      const result = await deleteTodo(todoId);


      expect(result).toBeDefined();

    });
  });
});