import getType from './getType.js'
import getRandom from './getRandom.js'


function user(first , last ){
  this.firstname = first
  this.lastname = last
}

user.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}


//생성자 함수 하나의 객체 데이터가 생성된다.
const heropy = new user ('heropy' , 'park')
const am = new user ('am' , 'am')
const sd = new user ('sd' , 'sd')

console.log(heropy.getFullName())
console.log(am.getFullName())
console.log(sd.getFullName())