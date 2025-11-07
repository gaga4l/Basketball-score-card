let pointContainer = document.querySelectorAll(".point-container")
let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")
let startGame = document.getElementById("start-game")
let points = document.querySelectorAll(".points")
let timer = document.getElementById("timer")
let homeScoreCounter = 0
let guestScoreCounter = 0

startGame.disabled = false
points.forEach(points => points.disabled = true)

startGame.addEventListener("click", () => {
    startGame.disabled = true
    points.forEach(points => points.disabled = false)
    let duration = 10 * 1000
    let endTime = Date.now() + duration

    let countDown = setInterval(() => {
        let currentTime = Date.now()
        let remainder = endTime - currentTime

        if (remainder <= 0){
            clearInterval(countDown)
            timer.classList.remove("time-font")
            timer.classList.add("sans-serif")
            if (homeScoreCounter === guestScoreCounter){
                timer.textContent = "It's Tie"
                setTimeout(() => {
                    start()
                }, 3000);
            } else if (homeScoreCounter > guestScoreCounter){
                timer.textContent = "Home Won"
                setTimeout(() => {
                    start()
                }, 3000);
            } else {
                timer.textContent = "Guest Won"
                setTimeout(() => {
                    start()
                }, 3000);
            }
            return
        }

        let minutes = Math.floor(remainder / 60000);
        let seconds = Math.floor((remainder % 60000) / 1000);
        timer.textContent = `${minutes}:${seconds.toString().padStart(2,'0')}`;
    }, 1000);
})




function start(){
    startGame.disabled = false
    points.forEach(points => points.disabled = true)
    homeScoreCounter = 0
    guestScoreCounter = 0
    homeScore.textContent = homeScoreCounter
    guestScore.textContent = guestScoreCounter
    timer.textContent = "10:00"
    startGame.textContent = "Restart"
    timer.classList.remove("sans-serif")
    timer.classList.add("time-font")
}



points.forEach(point => {
    point.addEventListener("click", (e) => {
    console.log(e.target.id)
    switch (e.target.id){
        case "home-1-point":
            homeScoreCounter += 1
            homeScore.textContent = homeScoreCounter
            break
        case "home-2-point":
            homeScoreCounter += 2
            homeScore.textContent = homeScoreCounter
            break
        case "home-3-point":
            homeScoreCounter += 3
            homeScore.textContent = homeScoreCounter
            break
        case "guest-1-point":
            guestScoreCounter += 1
            guestScore.textContent = guestScoreCounter
            break
        case "guest-2-point":
            guestScoreCounter += 2
            guestScore.textContent = guestScoreCounter
            break
        case "guest-3-point":
            guestScoreCounter += 3
            guestScore.textContent = guestScoreCounter
            break
    }
})
}) 

