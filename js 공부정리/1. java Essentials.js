보기 힘들면 해당 부분 긁어서 다른 js 파일에서 확인 해보면 될거야! 

DOM API
쉽게 자바스크립트에서 html을 조작하는 명령들 이라고 생각하면 된다.
1.
let boxEl = document.querySelector('.box');    // 해당 클래스 가져와 변수에 담음  
console.log(boxEl); 
boxEl.addEventListener('click', function(){ // 클릭 이벤트 
  console.log('왜눌러!!!!!!!!!!!!!');
  boxEl.classList.add('active');            // 클래스 추가 
  console.log(boxEl.classList.contains('active'));  
  boxEl.classList.remove('active');         // 클래스 제거 
  console.log(boxEl.classList.contains('active'));
});

2.
const boxels = document.querySelectorAll('.box'); //해당 클래스 모두 가져오기 
boxels.forEach((boxel,index)=>{                   //forEach문 으로 반복 
  boxel.classList.add(`order-${index+1}`);  
  console.log(index, boxel);
});

3.
const boxel1 = document.querySelector('.box');
console.log(boxel1.textContent);
boxel1.textContent = 'aaa';                   //텍스트 설정하거나 가져오기 
console.log(boxel1.textContent);



// 4. 메소드 체이닝 
const a = 'Hello~';

const b = a.split('').reverse().join('');
console.log(b);



==========================================================

//  비교 연산자 
const ab = 1
const ba = `1`

//데이터 타입은 노상관 
console.log(ab == ba)


function isEqual(x , y){
  //데이터의 타입까지 확인한다.
  return x === y
}

console.log(isEqual(1,2))


const a = 1 === 1 
const b = 'AB' === 'AB'
const c = true
console.log(`----------------`)
console.log(a)
console.log(b)
console.log(c)

console.log(a && b && c)

====================================================

const a = 1> 2 ;
if(a){
  console.log("참")
}else{
  console.log("그짓")
}

//삼항 연산자 
console.log(a ? "참" : '거짓' )

====================================================
const a = getRandom()

if(a === 0 ){
  console.log("a는 0이당")
}else {
  console.log("다른거야 ㅜ ㅜ ")
}

====================================================
반복문 ( 반복해서 html 조절하는거 해봄 )

const ulEl = document.querySelector('ul')

for (let i =0 ; i<10 ; i++){
  const li = document.createElement('li')
  li.textContent = `list-${i+1}`
 if ( (i+1)  % 2 === 0 ){
  li.addEventListener('click', function(){
    console.log(li.textContent)
  })
 }
  ulEl.appendChild(li) 
}

====================================================

function asb() {
//변수 유효 범위 const let 블럭 레벨 ({ ] 속에서만 반응 }) var 함수레벨 (함수 속에서만 유효)
// 헷갈리면 a 변수를 var let const 각각 선언해보셈 
if (true){
  const a = 1 
}
 console.log(a)
}
asb()

====================================================
형변환 
// 참 값 
true , {} , [] , 1 ,2 ,'문자있어' , -12 , -3.14 ..
// 거짓 값 
false , '' , null , nudefined , 0 , -0 , NaN

====================================================

//익명함수 (함수 이름없음 변수에 담기만 한거임)
const sum = function (x , y) {
  return x+y
}

//기명함수 ( 함수 이름이 있음 )
function sum(x , y) {
  return x+y
}


//함수 연습
function sum(x , y) {
 if(x < 2){
   return `adsad${x + y}asdasd`
 }
  return x+y
}

console.log(sum(1,3))


//따로 매개변수를 지정안해도 사용가능한 arquments 객체 
//함수 안에서 언제든지 사용할수 있게 설계가 되어있는 aqguments
function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum(1,3))


====================================================
화살표 함수 

const double = function (x) {
  return x * 2
}

console.log(double(7))

//화살표 함수 축약 
//매개변수 한개라면 () 생략가능  , 실행문 한줄이라면 return 생략가능
const doubleArrow = x => x * 2 
//매개변수 2개라면 () 생략 불가능  
const doubleArrow2 = (x , y) => x * 2 


//객체 데이터 화살표 함수로 축약 전 
const doubleArrow3 = () => {
  
  return {name: "아옳이"}
}



//객체 데이터 화살표함수로 축약 
const doubleArrow4 = () => ({name: "아옳이",})

console.log(doubleArrow3(7))

====================================================

//즉시실행함수  
//IIFE

const a = 7 
function double() {
  console.log(a * 4)
}
double(); 

//이름 없는 직시 실행 함수    (함수 작성 )()
(function(x) {
  console.log(a *x)
})();

//이름 없는 직시 실행 함수   이방법을 더 추천(함수작성())
(function(x) {
  console.log(a * x)
}(4))


// 호이스팅 
//쉽게 이야해하면 기명함수(이름있는)가 나중에 만들어 졌어도 호출하면 호출됨 아래 예시 
const a = 7 
double()

function double() {
  console.log(a * 2)
}

==================================================

//타이머 함수 
// setTimeout(함수 , 시간 ) : 일정시간 후 함수 실행 
// setInterval(함수, 시간 ) : 시간 간격마다 함수 실행 
// clearTimeout(): 설정된 TimeOut 함수를 종료 
// clearInterval(): 설정된 Interval 함수를 종료 


const timer = setInterval(()=>{
  console.log("1초뒤 나타남")
} , 1000) 
setInterval(function() {} , 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=> {
  clearInterval(timer)
  console.log("눌럿음")
  timer
})

==========================================================

//콜백함수 
// 함수의 인수로 사용되는 함수 


function timer(cb){
 setTimeout(()=>{
  console.log("1초뒤 나타남")
  cb()
}, 3000) 
}

//timer를 호출하면서 아래 함수를 던졌다 그것을 cd 로 받았고 타이머 함수가 실행 된후에 실행 되도록 해놓았다.
timer(() => {
  console.log("다끝낫엉") 
})


===========================================================

//생성자 함수 

function User(first , last ){
  this.firstname = first
  this.lastname = last
}
//user라는 생성자 함수에 prototype 이라는 함수로 getFullName이라는 함수를 추가해줘서 
//나중에 user라는 객체를 생성했을때 사용할수 있게 된다. 이렇ㄱ ㅔ하게되면 
//메모리를 한번만 사용하여 메모리효율 올라감 
User.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}


//생성자 함수 하나의 객체 데이터가 생성된다.
const heropy = new User ('heropy' , 'park')
const am = new User ('am' , 'am')
const sd = new User ('sd' , 'sd')

console.log(heropy.getFullName())
console.log(am.getFullName())
console.log(sd.getFullName())


============================================
this (아직 잘 이해가... ? )

// this 
// 일반 함수는 %호출 위치에% 따라 this 정의 
// 화살표 함수는 자신이 선언도니 %함수 범위%에서 this 정의 

1번예제
const heropy = {
  name: 'kim',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

//  heropy 내부에 normal 메소드를 실행  지금 호출된 위치는 heropy 이기때문에 this는 heropy 
 heropy.normal() // kim
 heropy.arrow() // undefined

2번째 예제
const amy = {
  name : 'Amy',
//  heropy.normal을 amy에 normal메소드에 할당중이다 . 
  normal: heropy.normal,
  arrow: heropy.arrow,
}

 amy.normal() // Amy
 amy.arrow() // undefined

3번째 예제
function User(name){
  this.name = name 
} 

User.prototype.normal = function() {
  console.log(this.name)
}

User.prototype.arrow =() => {
  console.log(this.name)
}


const heropy = new User('kim')
heropy.normal() // kim 
heropy.arrow() // undefinde

4번째 예제 
const timer = {
  name: 'Heropy',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    } ,2000)
  }
}

timer.timeout()

============================================
ES6 Classes

//ES6 Classes 

const heropy = {
  name: 'kim',
  //이름이 나오고 :와function 없이 나오면 축약 시킨 부분이다. 
  normal () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
 heropy.normal() 
 heropy.arrow() 



//아래 생성자 함수를 클래스 키워드로 만들어서 관리 하자  
function User(first , last ){
  this.firstname = first
  this.lastname = last
}

User.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}
 
class User {  
  constructor(first , last) {
    this.firstname = first
    this.lastname = last
  }
  getFullName() {
    return `${this.firstname} ${this.lastname}`
  }
  
} 



const heropy = new User ('heropy' , 'park')
const am = new User ('am' , 'am')
const sd = new User ('sd' , 'sd')

console.log(heropy)
console.log(am.getFullName())
console.log(sd.getFullName())

=====================================================

//상속 ...

class Vehicle{
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle{
  constructor(name, wheel) {
    super(name,wheel)
  }
}

const myBicycle = new Bicycle('자전거' , 2)
console.log(myBicycle)


class Car extends Vehicle{
  constructor(name, wheel, license) {
    super(name,wheel)
    this.license = license
  }
}

const myCar = new Car('자전거' , 4 , true)
console.log(myCar)