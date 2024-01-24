function add(a,b) {
    if (b < 0){
        throw new Error("b가 0보다 작습니다. subtract를 사용하세요 !");
    }
    
    return a + b;
}

function subject (a,b){
    return a - b;
}

function multiple(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

module.exports={ add,subject,multiple,divide}