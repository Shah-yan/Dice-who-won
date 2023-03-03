
// let randomNumber1 = Math.floor(Math.random()*6 + 1)
// let randomNumber2 = Math.floor(Math.random()*6 + 1)

// document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)
// document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)

// let message
// if (randomNumber1 > randomNumber2){
//     message = " 🚩 Player 1 Won!"
// }else if (randomNumber2 > randomNumber1){
//     message = "Player 2 Won!🚩"
// } else {
//     message = "🏁Draw!🏁"
// }

// document.querySelector('h1').textContent = `${message}`

function play() {

    let randomNumber1 = Math.floor(Math.random() * 6 + 1)
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)

    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)

    let message
    if (randomNumber1 > randomNumber2) {
        message = " 🚩 Player 1 Won!"
    } else if (randomNumber2 > randomNumber1) {
        message = "Player 2 Won!🚩"
    } else {
        message = "🏁Draw!🏁"
    }

    document.querySelector('h1').textContent = `${message}`
}