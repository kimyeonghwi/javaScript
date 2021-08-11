//==========================객체 ObjectMDN

//Object.assign 출처객체(userAge)로 부터 하나이상의 속성을 목표개체(userEmail) 복사합니다.

const userAge = {
  name: 'kim',
  age : 30 , 
  test : "원래는 test"
}

const userEmail = {
  name: 'kim',
  email: 'pwrkim12@naver.com',
  test : '변경됨'
}

// 원래 가지고 있던 데이터에 새로운 데이터를 추가하게 되는데 
// 공통된 내용이 있다면 새로운 데이터로 병합해버림
const target = Object.assign(userAge ,userEmail) 
console.log(target) //{name: "kim", age: 30, test: "변경됨", email: "pwrkim12@naver.com"}
console.log(userAge)// {name: "kim", age: 30, test: "변경됨", email: "pwrkim12@naver.com"}
console.log(target === userAge) // true

//새로운 객체를 만들고 싶다면 압에 {} 빈객체 데이터를 넣어주면 된다. %출처객체(뒤쪽위치한것들) 여러개 가능하다 .
const target1 = Object.assign({}, userAge ,userEmail) 
console.log(target1) //{name: "kim", age: 30, test: "변경됨", email: "pwrkim12@naver.com"}
console.log(userAge)// {name: "kim", age: 30, test: "변경됨", email: "pwrkim12@naver.com"}
console.log(target1 === userAge) // false

const a = {k: 123}
const b = {k: 123}
console.log(a === b) // false


// Object.keys  객체 데이터에서 키값만 따로 빼와서 배열로 만들어 준다. 
const user = {
  name: 'kim',
  age : 30 , 
  email: 'pwrkim12@naver.com',
}

//키값을 따로 빼온다 
const keys = Object.keys(user) 
console.log(keys) // ["name", "age", "email"]


console.log(user['email']) // pwrkim12@naver.com


//keys는 user의 키값만 가지고 있다. 그 키값으로 map 메소드 사용하여 
//값들만 가지고 있는 배열 데이터가 생성되었다 .
const values = keys.map(key => user[key])
console.log(values) // ["kim", 30, "pwrkim12@naver.com"]

