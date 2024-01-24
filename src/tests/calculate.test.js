
const { add, subject , multiple , divide } = require ('./calculate');


//unit test 
describe("add", () => {
    test("add(1, 2)는 3이 되어야합니다.", () => {
      expect(add(1, 2)).toBe(3);
    });
  
    test("add(1, -1)은 에러를 던집니다.", () => {
      try {
        add(1, -1);
      } catch (err) {
        expect(err).toBeInstanceOf(Error)
        expect(err).toHaveProperty("message", "b가 0보다 작습니다. subtract를 사용하세요 !");

      }
    });
  });
describe ("subject",()=>{
    test("subject(2,1)는 1이 되어야합니다", ()=> {
        expect(subject(2,1)).toBe(1);
    });
    test("subject(5,7)는 12이 되어야합니다",()=>{
        expect(subject(5,7)).toBe(-2);
    });
});

describe("multiple",()=>{
    test("multiple(3,4)는 12가 되어야합니다",()=>{
        expect(multiple(3,4)).toBe(12);
    });
});

describe("divide",()=>{
    test("divide(10,2)는 5가 되어야합니다",()=>{
        expect(divide(10,2)).toBe(5);
    });
});


//통합 테스트 
describe("calculate integraction test",() =>{
    test("add(1,3)과 subtract(4,2)를 multiple한 결과는 8입니다.",()=>{
    const addResult = add(1,3);
    expect(addResult).toBe(4);

    const subjectResult = subject(4,2);
    expect(subjectResult).toBe(2);

    expect(multiple(addResult,subjectResult)).toBe(8);
    });
});




