import checkType from './getType.js'
// import { random , user as kim} from './getRandom.js' // 이름 as 로 변경가능함 
import _ from 'lodash'
import * as R from './getRandom'  // 전부 가져오기 
 
// 가져오기 import 내보내기 export default or 이름 지정하기 

// 내보내기에서 expot default 는 딱 한번만 내보내기 가능하고 
// 이름을 지정해서 내보내기 한다면 여러개도 가능  %랜덤.js 참조 
// 그리고 import할때 위처럼 {} 안에 작성해주어야함 

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
// console.log(random(), random())
console.log(R.random())
console.log(R.user)