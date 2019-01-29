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
let answer6 = document.querySelector('#a6')
let answer7 = document.querySelector('#a7')
let answer8 = document.querySelector('#a8')
let answer9 = document.querySelector('#a9')
let answer10 = document.querySelector('#a10')
let submitQ1 = document.querySelector('.submitQ1')
let submitQ2 = document.querySelector('.submitQ2')
let submitQ3 = document.querySelector('.submitQ3')
let submitQ4 = document.querySelector('.submitQ4')
let submitQ5 = document.querySelector('.submitQ5')
let submitQ6 = document.querySelector('.submitQ6')
let submitQ7 = document.querySelector('.submitQ7')
let submitQ8 = document.querySelector('.submitQ8')
let submitQ9 = document.querySelector('.submitQ9')
let submitQ10 = document.querySelector('.submitQ10')
let questions = document.querySelector('.buttonBox')
let start = document.querySelector('#start')
let rules = document.querySelector('#rulesButton')
let round2 = document.querySelector('#round2')

let score = 0;
let lives = 0;

function showRules() {

    swal("MAJOR KEYS, \n A combination of the classic hangman game and hip-hop trivia. The object of the game is to get keys from DJ Khaled by answering trivia questions to advance your character toward DJ Khaled. If the word typed in the box is correct the character collects a key, hears one of DJ Khaled's motivational words(keys) of wisdom, and runs closer to him. Each correct word is worth 1000 points and 1 key. If the word is incorrect, the character stays in place and doesn't get any points or motivational keys from DJ Khaled. To win the game, the player has to have at least 3 questions correct by the end of the game. Get 3 questions wrong and you lose!"
        , {
            buttons: ["Close", true],
        });
}


//use setInterval to display none one image then display block on running gif to create animation
setInterval(spriteStop, 1000)
// function to animate character using gifs with css slide animation
function spriteStop() {
    document.querySelector('#spriteRun').style.display = 'none';
    document.querySelector('#spriteReady1').style.display = 'block';

}

// start button starts game onclick
start.addEventListener('click', function () {
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#q1').style.display = 'block';
    document.getElementById('IGotKeys').pause();
})



// 1st question onclick answer
submitQ1.addEventListener('click', function () {

    // start loop

    if (answer1.value === "diddy" || answer1.value === "Diddy" || answer1.value === "Puffy" || answer1.value === "P. Diddy") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youSmart').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
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
        document.getElementById('dontPlay').play();
        document.getElementById('audio2').play();
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


        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('dontPlay').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})


//2nd question onclick answer and if/else
submitQ2.addEventListener('click', function () {
    if (answer2.value === "lil wayne" || answer2.value === "Lil Wayne" || answer2.value === "Lil' Wayne" || answer2.value === "Lil wayne") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
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
        document.getElementById('noExcuses').play();
        document.getElementById('audio2').play();
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

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('noExcuses').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ3.addEventListener('click', function () {
    if (answer3.value === "nas" || answer3.value === "Nas") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youLoyal').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
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
        document.getElementById('neverGiveUp').play();
        document.getElementById('audio2').play();
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


        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('neverGiveUp').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ4.addEventListener('click', function () {
    if (answer4.value === "ice t" || answer4.value === "Ice T" || answer4.value === "Ice-T" || answer4.value === "Ice-t" || answer4.value === "Ice t" || answer4.value === "Icet") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('weDaBest').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
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
        document.getElementById('noExcuses').play();
        document.getElementById('audio2').play();
        document.querySelector('#q4').style.display = 'none';
        document.querySelector('#q5').style.display = 'block';
        document.querySelector('#spriteRun5').style.display = 'block';
        document.querySelector('#spriteReady4').remove();

        function spriteStop5() {
            document.querySelector('#spriteRun5').style.display = 'none';
            document.querySelector('#spriteReady5').style.display = 'block';

        }
        setInterval(spriteStop5, 1000)

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('noExcuses').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})


submitQ5.addEventListener('click', function () {
    if (answer5.value === "eazy e" || answer5.value === "Eazy E" || answer5.value === "Eazy-E" || answer5.value === "Eazy-e" || answer5.value === "Eazy E" || answer5.value === "EazyE" || answer5.value === "Easy-E" || answer5.value === "Easy E" || answer5.value === "Easy e" || answer5.value === "easy e") {
        score += 1000;
        lives += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById('keysSong').play();
        document.getElementById('youSmart').pause();
        document.querySelector('#round2').style.display = 'block';
        document.querySelector('.bkgd2').style.display = 'block';
        document.querySelector('.bkgd1').style.display = 'none';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#q5').style.display = 'none';
        document.querySelector('#spriteReady5').remove();


        round2.addEventListener('click', function () {
            document.querySelector('#round2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'block';
            document.querySelector('#djk').style.display = 'block';
            document.querySelector('#q6').style.display = 'block';
            document.getElementById('keysSong').pause();
            document.getElementById('anotherOne').play();
            document.querySelector('#spriteRun6').style.display = 'block';

            setInterval(spriteStop6, 1000)
            // function to animate character using gifs with css slide animation
            function spriteStop6() {
                document.querySelector('#spriteRun6').style.display = 'none';
                document.querySelector('#spriteReady6').style.display = 'block';

            }
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('neverGiveUp').play();
        document.getElementById('audio2').play();
        document.querySelector('#round2').style.display = 'block';
        document.querySelector('.bkgd2').style.display = 'block';
        document.querySelector('.bkgd1').style.display = 'none';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#q5').style.display = 'none';
        document.querySelector('#spriteReady5').remove();


        round2.addEventListener('click', function () {
            document.querySelector('#round2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'block';
            document.querySelector('#djk').style.display = 'block';
            document.querySelector('#q6').style.display = 'block';
            document.getElementById('keysSong').pause();
            document.getElementById('anotherOne').play();
            document.querySelector('#spriteRun6').style.display = 'block';

            setInterval(spriteStop6, 1000)
            // function to animate character using gifs with css slide animation
            function spriteStop6() {
                document.querySelector('#spriteRun6').style.display = 'none';
                document.querySelector('#spriteReady6').style.display = 'block';

            }
        })
    }
    if (lives <= -3) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.getElementById('neverGiveUp').pause();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';

    }

})

submitQ6.addEventListener('click', function () {

    // start loop

    if (answer6.value === "tupac" || answer6.value === "Tupac" || answer6.value === "2Pac" || answer6.value === "2pac") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youSmart').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q6').style.display = 'none';
        document.querySelector('#q7').style.display = 'block';
        document.querySelector('#spriteRun6').style.display = 'none';
        document.querySelector('#spriteRun7').style.display = 'block';
        document.querySelector('#spriteReady6').remove();
        // animation function
        function spriteStop7() {
            document.querySelector('#spriteRun7').style.display = 'none';
            document.querySelector('#spriteReady7').style.display = 'block';

        }

        setInterval(spriteStop7, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('dontPlay').play();
        document.getElementById('audio2').play();
        document.querySelector('#q6').style.display = 'none';
        document.querySelector('#q7').style.display = 'block';
        document.querySelector('#spriteRun6').style.display = 'none';
        document.querySelector('#spriteRun7').style.display = 'block';
        document.querySelector('#spriteReady6').remove();
        // animation function
        function spriteStop7() {
            document.querySelector('#spriteRun7').style.display = 'none';
            document.querySelector('#spriteReady7').style.display = 'block';

        }

        setInterval(spriteStop7, 1000)



        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('dontPlay').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ7.addEventListener('click', function () {

    // start loop

    if (answer7.value === "popped" || answer7.value === "Popped" || answer7.value === "pop" || answer7.value === "Pop") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q7').style.display = 'none';
        document.querySelector('#q8').style.display = 'block';
        document.querySelector('#spriteRun7').style.display = 'none';
        document.querySelector('#spriteRun8').style.display = 'block';
        document.querySelector('#spriteReady7').remove();

        function spriteStop8() {
            document.querySelector('#spriteRun8').style.display = 'none';
            document.querySelector('#spriteReady8').style.display = 'block';

        }
        setInterval(spriteStop8, 1000)
    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('noExcuses').play();
        document.getElementById('audio2').play();
        document.querySelector('#q7').style.display = 'none';
        document.querySelector('#q8').style.display = 'block';
        document.querySelector('#spriteRun7').style.display = 'none';
        document.querySelector('#spriteRun8').style.display = 'block';
        document.querySelector('#spriteReady7').remove();

        function spriteStop8() {
            document.querySelector('#spriteRun8').style.display = 'none';
            document.querySelector('#spriteReady8').style.display = 'block';

        }
        setInterval(spriteStop8, 1000)

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('noExcuses').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ8.addEventListener('click', function () {
    if (answer8.value === "Leaders Of The New School" || answer8.value === "leaders of the new school" || answer8.value === "LONS" || answer8.value === "lons" || answer8.value === "Lons") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youLoyal').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q8').style.display = 'none';
        document.querySelector('#q9').style.display = 'block';
        document.querySelector('#spriteRun8').style.display = 'none';
        document.querySelector('#spriteRun9').style.display = 'block';
        document.querySelector('#spriteReady8').remove();

        function spriteStop9() {
            document.querySelector('#spriteRun9').style.display = 'none';
            document.querySelector('#spriteReady9').style.display = 'block';

        }
        setInterval(spriteStop9, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('neverGiveUp').play();
        document.getElementById('audio2').play();
        document.querySelector('#q8').style.display = 'none';
        document.querySelector('#q9').style.display = 'block';
        document.querySelector('#spriteRun8').style.display = 'none';
        document.querySelector('#spriteRun9').style.display = 'block';
        document.querySelector('#spriteReady8').remove();

        function spriteStop9() {
            document.querySelector('#spriteRun9').style.display = 'none';
            document.querySelector('#spriteReady9').style.display = 'block';

        }
        setInterval(spriteStop9, 1000)


        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('neverGiveUp').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ9.addEventListener('click', function () {
    if (answer9.value === "Rakim" || answer9.value === "rakim" || answer9.value === "RAKIM") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('weDaBest').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q9').style.display = 'none';
        document.querySelector('#q10').style.display = 'block';
        document.querySelector('#spriteRun9').style.display = 'none';
        document.querySelector('#spriteRun10').style.display = 'block';
        document.querySelector('#spriteReady9').remove();

        function spriteStop10() {
            document.querySelector('#spriteRun10').style.display = 'none';
            document.querySelector('#spriteReady10').style.display = 'block';

        }
        setInterval(spriteStop10, 1000)

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('dontPlay').play();
        document.getElementById('audio2').play();
        document.querySelector('#q9').style.display = 'none';
        document.querySelector('#q10').style.display = 'block';
        document.querySelector('#spriteRun9').style.display = 'none';
        document.querySelector('#spriteRun10').style.display = 'block';
        document.querySelector('#spriteReady9').remove();

        function spriteStop10() {
            document.querySelector('#spriteRun10').style.display = 'none';
            document.querySelector('#spriteReady10').style.display = 'block';

        }
        setInterval(spriteStop10, 1000)


        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('dontPlay').pause(); 
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';


        }
    }
})

submitQ10.addEventListener('click', function () {
    if (answer10.value === "Public Enemy" || answer10.value === "public enemy" || answer10.value === "PUBLIC ENEMY") {
        score += 1000;
        lives += 1;

        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('lives').innerHTML = lives + " 🗝";
        document.getElementById('youSmart').play();

       
        if (lives >= 3) {
            document.getElementById('lives').innerHTML = "You Win! " + lives + " 🗝";
            document.getElementById('allIDoIsWin').play();
            document.getElementById('youSmart').pause();
            document.querySelector('#confetti').style.display = 'block';
            document.querySelector('#spriteWon').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#spriteRun2').style.display = 'none';
            document.querySelector('#spriteRun3').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#spriteReady10').remove();

        }

  
    
    else if (lives < 3) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';
    }
    }

})

