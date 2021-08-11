
//전개 연산자  
//앞에 ... 을 이용하여 배열의 값을 꺼내온다. 
const fruits = ['사과','바나나','체리','오렌지']
console.log(fruits) // ["사과", "바나나", "체리", "오렌지"]
console.log(...fruits) // 사과 바나나 체리 오렌지

function toObject(a,b,c){
 return {
  a: a,
  b: b,
  c: c,
 }
}
console.log(toObject(...fruits)) //{a: "사과", b: "바나나", c: "체리"}

//매개변수에도 전개연산자를 사용할 수 있다. 
//rest parameter

function toObject(a,b,c){
  return {
   a, //매개변수와 속성의 이름이 같으면 하나만 남겨 놓으면 된다.
   b, //이렇게 하면 너무 아래로 길기때문에 아래에 한것처럼 화살표 함수로 줄일수 있다. 
   c,
  }
 }
console.log(toObject(...fruits)) // {a: "사과", b: "바나나", c: Array(2)} 마지막 c 는 배열이 된다.


//짧게 화살표 함수로 줄인것이다. 
const toObject= (a,b, ...c) => ({ a, b, c}) 