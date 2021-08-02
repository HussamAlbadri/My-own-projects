let btn = document.getElementById('btn');
let outPut = document.getElementById('outPut');

let num = [Math.floor(Math.random() * 10)]

btn.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    if (input == num) {
        outPut.innerHTML = 'You guessed right, Your number is' + " " + num;
    } else if (input < 10) {
        outPut.innerHTML = "Your Guessed is too low!"
    } else if (input > 10) {
        outPut.innerHTML = "Your input is not correct!"
    }
})