//=================문자 ==================== 관련 메소드는 String MDN
//길이 
const str = '0123'
console.log("str".length) //4 

//위치  indexOf
const str = 'Hello world!'
console.log(str.indexOf('world!')) // 6
console.log(str.indexOf('000')) // -1 없을때
console.log(str.indexOf('000') !== -1 ) //false

//잘라내기 slice
const str = 'Hello world!'
console.log(str.slice(0,2) ) //He
console.log(str.slice(6,11) ) //world

//문자 변경 또는 삭제  replace
const str = 'Hello world!'
console.log(str.replace('world', 'zzz') ) //Hello zzz
console.log(str.replace(' world!', '') ) //Hello

//골뱅이 기준으로 내가 원하는 값만 얻음 (정규 표현식 사용함) match
const str = 'pwrkim12@naver.com'
console.log(str.match(/.+(?=@)/) )//배열데이터로 나옴
console.log(str.match(/.+(?=@)/)[0] ) // pwrkim12
//(@라는 글자에서 앞쪽을 가져올것인데 /. 첫 글자에서 + 끝까지 배열로 얻어 올래 )


//공백 지우기 
const str = '                Hello world!'
console.log(str.trim()) //Hello world! 

// =================숫자 ==================== number MDN


//소수점 잘라내기 
const pi = 3.12314901248902 
console.log(pi) //3.12314901248902  
const str = pi.toFixed(2)
console.log(str)  // 3.12
console.log(typeof str) // String

//타입 변형하기 parse 
const interger = parseInt(str)
const float = parseFloat(str)
console.log(interger)  // 3 
console.log(float) // 3.12
console.log(typeof interger)  // number
console.log(typeof float) // number


//절대값  무조건 정수 출력  abs
console.log("abs : ", Math.abs(-12)) //12
//최솟값 min
console.log("min : ", Math.min(2,8)) // 2
//최대값 max
console.log("max : ", Math.max(2,8)) // 8
//올림 처리 (정수 단위로 올림처리) ceil
console.log("ceil : ", Math.ceil(3.14)) // 4
//내림 처리 (정수 단위로 내림처리 ) floor
console.log("floor : ", Math.floor(3.14)) // 3
//반올림 처리 (소숫점이0.5 이상이면 값은 4된다.) round
console.log("round : ", Math.round(3.14)) // 3
//랜덤값 준다. random
console.log("random : ", Math.random()) // 0.234154
//ex) export default function random(){
//    return Math.floor(Math.random()*10)
//소수점 아래 내림 처리하고 랜덤값 얻어온뒤에 10곱해준다 (0~ 9까지랜덤 숫자)








