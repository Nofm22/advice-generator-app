

const url = 'https://api.adviceslip.com/advice'
// const num = Math.floor(Math.random()) + 1
// fetch(url)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(infomation) {
//         console.log(infomation.slip.advice)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const content = document.querySelector('.content_id')
const main_content = document.querySelector('.main_content')
const btn = document.querySelector('.btn')
const getAdvice = async () => {
    let res = await fetch(url)
    let data = await res.json()
    let h2s = data.slip.advice
    let id = data.slip.id
    content.innerHTML = `Advice #${id}`
    main_content.innerHTML = h2s
    content.style.color = 'hsl(150, 100%, 66%)'
}
btn.addEventListener('click', getAdvice)
