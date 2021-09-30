const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['brown', 'orange', 'white', 'green', 'yellow', 'red', 'blue', 'purple']
const restartBtn = document.querySelector('.restart-button')
const btnRestart = document.querySelector('#restart')
const showScore = document.querySelector('#showscore')
const gamerName = document.querySelector('#gamer-name')
let name = document.querySelector('.input-name')
let timer
let time = 0
let score = 0
let bestScore = 0
board.innerHTML = ''

//restartBtn.addEventListener('click', () => {
//    goBack()
//})

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

    let namevalue = name.value
    name.classList.add('up')
    if (namevalue === '') {
        namevalue = 'Guest'
    }
    gamerName.innerHTML = namevalue
    //console.log(name)
    //console.log(namevalue)
})

gamerName.addEventListener('click', () => {
    screens[0].classList.remove('up')
    screens[1].classList.remove('up')
    name.classList.remove('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        timeEl.parentNode.classList.remove('hide')

        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        //clearInterval(timer)
        startGame()
        //board.innerHTML = ''
    }//
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})
btnRestart.addEventListener('click', () => {
    goBack()
    //board.innerHTML = ''

    //time = parseInt(timeList.target.getAttribute('data-time'))



})
console.log(btnRestart)


//showScore.innerHTML = `${score}`
function startGame() {
    //screens[1].classList.add('up')
    //showScore.innerHTML = `${score}`
    //let timer = setInterval(decreaseTime, 1000)
    board.innerHTML = ''
    clearInterval(timer)
    timer = setInterval(decreaseTime, 1000)
    setInterval(scoreShow, 10)
    createRandomCircle()
    setTime(time)

}

function decreaseTime() {
    if (time === 0) {
        finishGame()
        setTime(0)

    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

function setTime(value) {
    //showScore.innerHTML = `${score}`
    if (time < 60) {
        timeEl.innerHTML = `00:${value}`
    } else {
        timeEl.innerHTML = '01:00'
    }
    scoreShow()


}
function scoreShow() {
    showScore.innerHTML = `${score}`
}



function finishGame() {
    timeEl.parentNode.classList.add('hide')
    //setTime(time * 4)
    //btnRestart.classList.remove('hide')
    if (bestScore <= score) {
        bestScore = score
    }



    board.innerHTML = `<h1 class="unhide">Your score: <span class="primary">${score}</span><p style="font-size:20px">Best score: <span class="primary">${bestScore}</span></p></h1>`






    //buttonRestart.goBack()
    //restartBtn.classList.remove('hide')
    //board.innerHTML = `<h2>Restart</h2>`
}


function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = randColor()

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${color}`


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function goBack() {
    //time = time * 2

    score = 0
    screens[1].classList.remove('up')
    //board.innerHTML = 'bbb'
    timeEl.parentNode.classList.remove('hide')
    const haha = board.childNodes.classList.add('hide')
    console.log(haha)
}
