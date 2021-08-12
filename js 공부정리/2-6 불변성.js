// 데이터 불변성 
// 원시 데이터 String Number Boolean undefined , null 
// 참조형 데이터 Object Array Function 


//쉽게 이야기해서 숫자나 모양이 같으면 같다 
let a = 1 
let b = 4
console.log(a,b, a===b) //1 4 false
b = a
console.log(a,b, a===b) // 1 1 true
a = 7 
console.log(a,b, a===b)// 7 1 false
let c= 1
console.log(b,c, b===c) //1 1 true 


//참조형 데이터 메모리에 어떻게 올라가는지 잘 생각해야함 
let a = { k:1 }
let b = { k:1 }
console.log(a,b,a===b) //{k: 1} {k: 1} false
a.k = 7 
b = a 
console.log(a,b,a===b) // { k: 7} {k: 7} true
a.k = 2 
console.log(a,b,a===b)// {k: 2} {k: 2} true
let c = b 
console.log(a,b,c,a===c) // {k: 2} {k: 2} {k: 2} true
a.k= 9
console.log(a,b,c,a===c) // {k: 9} {k: 9} {k: 9} true