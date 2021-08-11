//=============================배열====================

const numbers = [1,2,3,4]
const fruits = ['A', 'B' ,'C']

//length 배열길이
console.log(numbers.length) // 4
console.log(fruits.length) //3 
console.log([1 ,2].length) //2 



//concat 배열 합치기 원본은 유지
console.log(numbers.concat(fruits)) //(7) [1, 2, 3, 4, "A", "B", "C"]



//forEach 배열의 반복 
fruits.forEach(function (element , index , array){
  console.log(element,index,array)
});
// A 0 (3) ["A", "B", "C"]
// B 1 (3) ["A", "B", "C"]
// C 2 (3) ["A", "B", "C"]



//map 배열을 리턴해줌 forEach처럼 반복하며 리턴 해준다. 
const b = fruits.map(function (element , index ){
  return `${element}-${index}`
});
console.log(b) // (3) ["A-0", "B-1", "C-2"]

//객체데이터를 담은 b 
const b = fruits.map(function (element , index ){
  return {
    id: index,
    name : element
  }
});

console.log(b) //(3) [{…}, {…}, {…}] 3개의 객체 데이터를 담는다.

// 위 작성사항 화살표 함수로 줄이기

 const a = fruits.forEach (element => {
  console.log(`${element}-`)
});
  console.log(a)

const b = fruits.map( element =>  ({ name : element }) );

console.log(b)


//map 배열 확인 (원본영향 없음 )
const a = numbers.map(numbers => {
  return numbers < 3 
})
console.log(a) //  [true, true, false, false]

//filter 필터링 하기 (원본영향 없음 )
const b = numbers.filter(numbers => {
  return numbers < 3 
})
console.log(b) //  [1, 2]



//find로 원하는거 찾아내기  # 정규 표현식 /^B/.test 
const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana' ,'Cherry']

const a = fruits.find(fruits => {
  return /^B/.test(fruits) 
})
console.log(a) // Banana  

//findIndex 로 원하는것에 인덱스값 가져오기 
const b = fruits.findIndex(fruits => {
  return /^C/.test(fruits)
})
console.log(b) // 2 



//includes 포함 되어있는지 확인 하는 
const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('aaa')
console.log(b)

//push 아이템 집어 넣기 (가장뒤에 넣음 )
numbers.push(5)
console.log(numbers)// [1, 2, 3, 4, 5]
//unshift 아이템 집어 넣기 (가장앞에 넣음)
numbers.unshift(0)
console.log(numbers)// [0, 1, 2, 3, 4, 5]

//reverse 순서 변환 
numbers.reverse()
console.log(numbers) // [5, 4, 3, 2, 1, 0]

//splice 앞 인덱스 번호부터 n개 지워
numbers.splice(1,2)
console.log(numbers) // [1, 4]
 
//splice 끼워 넣어라 
numbers.splice(2,0, 999)
console.log(numbers)  [1, 2, 999, 3, 4]

//복합 해서 제거와 동시에 끼워 넣기 
numbers.splice(2,1,99)
console.log(numbers) [1, 2, 99, 4]