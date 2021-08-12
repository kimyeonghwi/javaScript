

// Query String 퀘리스트링  (파라미터)
// 문자를 가지고 어떠한것들을 검색한다

// 주소 ? 속성=값 &속성=값 &속성=값   
        //apikey= 값 & S=영화이름 &추가로 적고 싶은거  


import axios from 'axios'

function fetchMovies() {
  axios // http 요청을 처리해주는 자바스크립트 패키지 이다.  npm install axios 
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen&')
  .then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl= document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
   })
}

fetchMovies()