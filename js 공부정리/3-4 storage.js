
//웹페이지에 직접 저장할수 있는 storage 가 있다 
//종속적으로 (계속) 저장되는 localstorage , 
//웹사이트 종료하면 같이 종료 되는 session Storage 

const user = {
  name:'kim',
  age: 24,
  email:[
    'pwrkitn@kfksjdfk.sdf',
    'sdfkls@dfjksdd.dfdssfd'
  ]
}



const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age= 22 
console.log(obj)
localStorage.setItem('user' , JSON.stringify(obj))

//기본적으로 제이슨 형식이라 .내보낼때 문자열 
// 가져와서 다시 재조립 해줘야함 
//setItem('키' , 깂) , getItem('가져올항목') , removeItem('삭제할 항목') , clear(전부삭제)