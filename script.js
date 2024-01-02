console.log('hello')

let turn = "X";

let buttons = document.querySelectorAll('button')

for (let i = 0; i<buttons.length; i++) {
console.log(i)
buttons[i].addEventListener('click', play)
}

function play(e) {
    console.log(e.target);
    e.target.innerText = turn;
    if (turn == "X") {
            turn = "O";
    } else {
        turn = "X";
    }
    e.target.disables = true;
}

console.log(buttons)

