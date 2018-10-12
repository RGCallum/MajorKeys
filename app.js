//use input form and submit button to link to next action, 
//the keys keep score
//must win 3 out of 5 keys, get 3 keys and winner (win win win song)then go back to start, lose 3 keys and Game Over image, show you lose sprite (they dont want you to win rant then go back to start)

// if input === diddy || p.diddy -- then document.getelebyid and show number with  inner.html in box.    show zoom into key and then go to side to keep score(set interval?) and show you smart gif and play major key then you smart, then you a genius then we da best(win, win win audi) audio and get key (or char move closer), else djk 
//shaking no keys gif and they dont want you to win audio, they never said winning was easy, some people cant handle success, then congratulations you played urself

//hint plays a song from the artist

//need to link start button to question1.
//when user inputs answer, if correct go to if/else statement add for loop to i<5 and .length then if else inside that that says 
//can i make it check for if 3 right go to win, or do i keep it going to end and check there.
//looping through array to ask questions?
//will need to hide everything until need to be shown, or setinterval?

//declared vars
//start, input to submit btn, addeventlist classlist.add then to if/else
let answer = document.querySelector('.answer')
let submit = document.querySelector('.submit')
// let score = document.querySelector('#score')
let score = 0;
submit.addEventListener('click', (event) => {
    // console.log(answer.value)
    if (answer.value === "diddy") {

        document.getElementById("score").innerHTML += 100;
    } else {
        document.getElementById("score").innerHTML -= 100;
    }
})


//declared vars for savings
// let inputSav = document.querySelector('.inputSav')
// let balanceSav = document.querySelector('.balance') 
// let depositSav = document.querySelector('.depositSav')
// let withdrawSav = document.querySelector('.withdrawSav')

// let savingsAcct = 0;

// //added on click event for deposit

//     document.getElementById('lives').innerHTML = (`correct${counter}`)
//     if (answer === "1") {
//         document.getElementById("score").classList.add('zero');
//         document.getElementById("score").innerHTML = "Your account is Negative!";
//     } else {
//         document.getElementById('score').classList.remove("zero");
//     }
// })


// //created click event for savings
// depositSav.addEventListener('click', (event) => {

//     document.getElementById('savBalance').innerHTML = (`$${savingsAcct}`)
//     if (savingsAcct <= 0) {
//         document.getElementById('savBalance').classList.add("zero");
//         document.getElementById('savBalance').innerHTML = "Your account is Negative!"
//     } else {
//         document.getElementById('savBalance').classList.remove("zero");
//         // document.getElementById('savBalance').innerHTML = savingsAcct
//     }
//     // console.log(savBalance)
// })
