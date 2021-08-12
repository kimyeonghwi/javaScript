//제이슨 json 파일 

//사용되는 곳이 정해져 있는데 메모리나 이런부분들을 최대한 경량화 시켜야함 
//그래서 문자 데이터로 변경해서 서버와 통신할때 주로 사용된다.


import myData from './mydata.json'

console.log(myData)

const user = {
  name:'kim',
  age: 24,
  email:[
    'pwrkitn@kfksjdfk.sdf',
    'sdfkls@dfjksdd.dfdssfd'
  ]
}


console.log('uer', user)

//Json은 전역객체이다. 
// stringify 객체를 문자열로 변경해버림  (자바스크립트에 있는 모든 파일들은 json 화 할수 있다 )
const str = JSON.stringify(user)
console.log('str',str)
console.log(typeof str)

//parse 제이슨파일(문자열)을 분석하여 하나의 데이터로 제 조립 
const obj = JSON.parse(str)
console.log("obj" , obj) //{name: "kim", age: 24, email: Array(2)}