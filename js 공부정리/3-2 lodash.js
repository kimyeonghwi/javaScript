import _ from 'lodash'

// uniq  중복값을 허용 안함 

const a = [
  {id: '1' , name : 'kim'},
  {id: '2' , name : 'Lee'}
]


const b = [
  {id: '1' , name : 'kim'},
  {id: '3' , name : 'park'}
]

const c = a.concat(b)


console.log('concat', c)

//배열데이터가 하나일때 사용  이미 중복이 발생한 배열데이터에 사용하는게 uniqBy 
console.log('uniqBy', _.uniqBy(c, 'id'))

//배열데이터가 여러개 일때 사용 아직 중복 
const d = _.uniq(a, b, 'id')
console.log('unionBy', _.unionBy(c, 'id'))


const users = [
  {id: '1' , name : 'kim'},
  {id: '2' , name : 'lee'},
  {id: '3' , name : 'ksd'},
  {id: '4' , name : 'dfk'},
  {id: '5' , name : 'sdfm'},
]

// 해당하는 것 찾아주기 
const foundUser = _.find(users, {name: 'kim'} )
// 해당하는 것 인덱스 찾아오기 
const foundUserIndex = _.findIndex(users, {name:'kim'})
console.log(foundUser) //{id: "1", name: "kim"}
console.log(foundUserIndex) //0 

//해당하는거 없애기 
_.remove(users ,{name: 'kim'})
console.log(users) //(4) [{…}, {…}, {…}, {…}] 원래 5개인데 4개만 나옴 
