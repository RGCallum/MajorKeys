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
let next = document.querySelector('.next')
let skip = document.querySelector('.skip')
let daKey = document.querySelector('#daKey')
// let score = document.querySelector('#score')
let score = 0;
let lives = 0;

//hide all questions until onclick functions



submit.addEventListener('click', function() {
    // console.log(answer.value)
    if (answer.value === "diddy") {
        score += 100;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youSmart').play();


        document.getElementById("lives").innerHTML = lives;
        document.getElementById("score").innerHTML = score;
        
     
// THINGS I WANT TO DO
        // let key = document.createElement('div')
        // key.classList.add('keyImg')
        // var score = document.getElementById('score')
        // score.appendChild('key')
        // document.getElementById("score").classList.add('keyImg');
        // document.getElementById('youSmartGif').pause();
    } else {
        document.getElementById('audio2').play();
        document.getElementById("score").innerHTML -= 100;
        document.getElementById("lives").innerHTML -= 1;
    }

    
    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Won!"
    }
    if (lives <= 0) {
        document.getElementById('lives').innerHTML = "You Done!"
    }
})

next.addEventListener('click', function() {
//hide buttonQ1 and show buttonQ2
})

skip.addEventListener('click', function() {
//skip to last question
//if at last question and click again prompt do u really want to quit this awesome game?
//if answer yes quit and game over .
})