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
//hide all questions until onclick functions

//declared vars
//add addeventlist classlist.add then to if/else
let answer1 = document.querySelector('#a1')
let answer2 = document.querySelector('#a2')
let answer3 = document.querySelector('#a3')
let answer4 = document.querySelector('#a4')
let answer5 = document.querySelector('#a5')
let submitQ1 = document.querySelector('.submitQ1')
let submitQ2 = document.querySelector('.submitQ2')
let submitQ3 = document.querySelector('.submitQ3')
let submitQ4 = document.querySelector('.submitQ4')
let submitQ5 = document.querySelector('.submitQ5')
let questions = document.querySelector('.buttonBox')
let start = document.querySelector('#start')
let rules = document.querySelector('#rulesButton')
let score = 0;
let lives = 0;

function showRules() {
 
    swal("MAJOR KEYS, is a variation of hangman and trivia games. Instead of guessing individual letters, players will guess the entire word. The object of the game is to get 3 keys from DJ Khaled by typing the correct word in the input box. Lowercase words only, and no special characters. First 3 words correct wins the game and the first 3 words incorrect, results in GAME OVER!!! If player answers 1st question incorrect, game is over. Each word is worth 1000 points and 1 key, and player must maintain a score above 0 in order to continue playing game."
    , {
        buttons: ["Close", true],
      });
}


//use setInterval to display none on image then display block to next animation
setInterval(spriteStop, 1000)
// function to animate chracter using gifs with css slide animation
function spriteStop() {
    document.querySelector('#spriteRun').style.display = 'none';
    document.querySelector('#spriteReady1').style.display = 'block';

}

// start button starts game onclick
start.addEventListener('click', function () {
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#q1').style.display = 'block';
    document.getElementById('IGotKeys').pause();
    // clearInterval(spriteStop, 1000)  
    // console.log(spriteStop)
})

// rules.addEventListener('click', function () {
//     document.querySelector('#rules').style.display = 'block';
    
// })


// 1st question onclick answer
submitQ1.addEventListener('click', function () {
    // console.log(answer.value)
    // setTimeout(spriteStop, 1000)  
// start loop

    if (answer1.value === "diddy") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youSmart').play();
        document.getElementById("lives").innerHTML = lives + "🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q1').style.display = 'none';
        document.querySelector('#q2').style.display = 'block';
        document.querySelector('#spriteRun2').style.display = 'block';
        document.querySelector('#spriteReady1').remove();
//.remove was the only thing that actually stopped the Sprites from blinking with the set interval

    // animation function
    
        

        function spriteStop2() {
            document.querySelector('#spriteRun2').style.display = 'none';
            document.querySelector('#spriteReady2').style.display = 'block';
        }
        
        setInterval(spriteStop2, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('anotherOne').play();
        document.getElementById('audio2').play();

    }


    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Win! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#confetti').style.display = 'block';
        document.querySelector('#spriteWon').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';

    }

    if (lives <= 0) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';


    }
   
})


//2nd question onclick answer and if/else
submitQ2.addEventListener('click', function () {
    if (answer2.value === "lil wayne") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + "🗝🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q2').style.display = 'none';
        document.querySelector('#q3').style.display = 'block';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'block';
        document.querySelector('#spriteReady2').remove();


        function spriteStop3() {
            document.querySelector('#spriteRun3').style.display = 'none';
            document.querySelector('#spriteReady3').style.display = 'block';

        }
        setInterval(spriteStop3, 1000)
    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('anotherOne').play();
        document.getElementById('audio2').play();
   
    }

    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Win! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#confetti').style.display = 'block';
        document.querySelector('#spriteWon').style.display = 'block';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';




    }
    if (lives < 0) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';


    }

})

submitQ3.addEventListener('click', function () {
    if (answer3.value === "nas") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youLoyal').play();
        document.getElementById("lives").innerHTML = lives + "🗝🗝🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q3').style.display = 'none';
        document.querySelector('#q4').style.display = 'block';
        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#spriteRun4').style.display = 'block';
        document.querySelector('#spriteReady3').remove();

        function spriteStop4() {
            document.querySelector('#spriteRun4').style.display = 'none';
            document.querySelector('#spriteReady4').style.display = 'block';

        }
        setInterval(spriteStop4, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('anotherOne').play();
        document.getElementById('audio2').play();

    }


    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Win! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#confetti').style.display = 'block';
        document.querySelector('#spriteWon').style.display = 'block';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';



    }
    if (lives <= 0) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';


    }

})

submitQ4.addEventListener('click', function () {
    if (answer4.value === "ice t") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + "🗝🗝🗝🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q4').style.display = 'none';
        document.querySelector('#q5').style.display = 'block';
        document.querySelector('#spriteRun5').style.display = 'block';
        document.querySelector('#spriteReady4').remove();

        function spriteStop5() {
            document.querySelector('#spriteRun5').style.display = 'none';
            document.querySelector('#spriteReady5').style.display = 'block';

        }
        setInterval(spriteStop5, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('anotherOne').play();
        document.getElementById('audio2').play();
    }


    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Win! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#confetti').style.display = 'block';
        document.querySelector('#spriteWon').style.display = 'block';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';



    }
    if (lives <= 0) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';


    }

})


submitQ5.addEventListener('click', function () {
    if (answer5.value === "eazy e") {
        score += 1000;
        lives += 1;
        document.getElementById('lives').innerHTML = "You Win! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#confetti').style.display = 'block';
        document.querySelector('#spriteWon').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#spriteReady5').remove();

        function spriteStop6() {
            document.querySelector('#spriteReady5').style.display = 'none';

        }
        setInterval(spriteStop6, 1000)
    }
    if (lives <= 0) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';


    }
    console.log(lives);
    console.log(score);
})
