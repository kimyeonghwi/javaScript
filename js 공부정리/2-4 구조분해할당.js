//구조 분해 할당  
//비 구조화 할당 

const user = {
  name: 'kim',
  age: '20',
  email : 'pwrkim12@naver.com'
}
//객체 데이터내부에서 구조분해 하여 원하는 속성만 꺼내서 각각의 변수에 담아서 사용할 수있다.  
const {name, age , email , address} = user


//1. 필요한 데이터만 꺼내줄수도 있다.( const {name, age } = user  ) 
//2. address 처럼 값이 없는 것들은 아래처럼 기본값을 설정해 줄수도 있다. 
//const {name, age , email , address = 'korea'} = user
//3. 변수의 이름이 맘에 안들면 이름도 변경해줄수 있다.
//const {name:abc , age , email , address} = user

console.log(`사용자 이름 ${name}` ) // 사용자 이름 kim 
console.log(`${name} 의 나이 ${age}`) // kim 의 나이 20
console.log(`${name} 의 이메일${email}`) //kim 의 이메일pwrkim12@naver.com
console.log(address) //undefined


// 배열데이터도 구조분해 할당을 사용할수 있다. 
// 배열이라서 [] 대괄호 사용하여 꺼내준다. 
const fruits = ['사고','바나나','체리']
const [a,b,c,d] = fruits
console.log(a,b,c,d) //사고 바나나 체리 undefined 

//배열에서의 구조 분해는 순서대로 구조분해 하기떄문에 중간에 있는것만 빼내고 싶다면 
const fruits = ['사고','바나나','체리']
const [,,b] = fruits // 여기처럼 ,(따옴표)로 나눠서 순서를 명확하게 해주면된다. 
console.log(b) // 체리