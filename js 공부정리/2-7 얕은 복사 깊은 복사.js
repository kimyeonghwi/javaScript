const user = {
  name: 'kim',
  age:55,
  email: ['pwrkim12@naver.com']
}

//얕은 복사 (Object.assign사용) 
const copyUser = Object.assign({} ,user) 
console.log(copyUser === user)// false

//얕은 복사 (전개연산자 사용)
const copyUser = {...user}
console.log(copyUser === user)// false


user.age= 22
console.log('user',user) // user {name: "kim", age: 22, email: Array(1)}
console.log('copyuser',copyUser) // copyuser {name: "kim", age: 55, email: Array(1)}

