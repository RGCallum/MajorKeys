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
let next1 = document.querySelector('#next1')
let next2 = document.querySelector('#next2')
let next3 = document.querySelector('#next3')
let next4 = document.querySelector('#next4')
let next5 = document.querySelector('#next5')
let next6 = document.querySelector('#next6')
let next7 = document.querySelector('#next7')
let next8 = document.querySelector('#next8')
let next9 = document.querySelector('#next9')
let next10 = document.querySelector('#next10')
let restart = document.querySelector('#restart')

let score = 0;
let lives = 0;

function showRules() {

    swal("MAJOR KEYS, \n A DJ Khaled inspired hip-hop trivia game for the 'true' Hip Hop Head. The object of Major Keys is to get DJ Khaled's 'Keys' of wisdom by answering trivia questions to advance your character closer to his Major Key. If your answer is correct, you collect a key, hear one of DJ Khaled's motivational words (keys) of wisdom, and run closer to him. Each correct word is worth 1000 points and 1 key. Answer incorrectly, and you lose keys, points and DJ Khaled roasts you. To win the game, you need to have at least 3 keys by the end of the game. Score less than 3 keys by the end of the game and you lose! Scoring below -3000 at any point in the game and its GAME OVER!"
        , {
            buttons: ["👍🏾", true],
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
    document.getElementById('majorKeyAlert').play();
    // document.querySelector('.bkgd2').style.display = 'block';

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

        document.querySelector('#a1').value = "✅ Diddy";
        document.querySelector('.submitQ1').style.display = 'none';
        document.querySelector('#next1').style.display = 'block';

        document.querySelector('#spriteRun2').style.display = 'block';
        document.querySelector('#spriteReady1').remove();

        // animation function
        function spriteStop2() {
            document.querySelector('#spriteRun2').style.display = 'none';
            document.querySelector('#spriteReady2').style.display = 'block';

        }

        setInterval(spriteStop2, 1000)


        next1.addEventListener('click', function () {
            document.querySelector('#q1').style.display = 'none';
            document.querySelector('#q2').style.display = 'block';  

        })




    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('playUrself').play();
        document.getElementById('audio2').play();
        document.querySelector('#a1').value = "❌ Diddy";

        document.querySelector('.submitQ1').style.display = 'none';
        document.querySelector('#next1').style.display = 'block';
        document.querySelector('#spriteRun2').style.display = 'block';
        document.querySelector('#spriteReady1').remove();
        //.remove was the only thing that actually stopped the Sprites from blinking with the set interval

        // animation function
        function spriteStop2() {
            document.querySelector('#spriteRun2').style.display = 'none';
            document.querySelector('#spriteReady2').style.display = 'block';

        }

        setInterval(spriteStop2, 1000)

        next1.addEventListener('click', function () {
            document.querySelector('#q1').style.display = 'none';
            document.querySelector('#q2').style.display = 'block';


        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('playUrself').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';


        }
    }

    restart.addEventListener('click', function () {
        location.reload();
      } )
   
})


//2nd question onclick answer and if/else
submitQ2.addEventListener('click', function () {
    if (answer2.value === "lil wayne" || answer2.value === "Lil Wayne" || answer2.value === "Lil' Wayne" || answer2.value === "Lil wayne") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youVerySmart').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#a2').value = "✅  Lil' Wayne";
        document.querySelector('.submitQ2').style.display = 'none';
        document.querySelector('#next2').style.display = 'block';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'block';
        document.querySelector('#spriteReady2').remove();

        function spriteStop3() {
            document.querySelector('#spriteRun3').style.display = 'none';
            document.querySelector('#spriteReady3').style.display = 'block';

        }
        setInterval(spriteStop3, 1000)

        next2.addEventListener('click', function () {
            document.querySelector('#q2').style.display = 'none';
            document.querySelector('#q3').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('noExcuses').play();
        document.getElementById('audio2').play();
        document.querySelector('#a2').value = "❌ Lil' Wayne";
        document.querySelector('.submitQ2').style.display = 'none';
        document.querySelector('#next2').style.display = 'block';
        document.querySelector('#spriteRun2').style.display = 'none';
        document.querySelector('#spriteRun3').style.display = 'block';
        document.querySelector('#spriteReady2').remove();

        function spriteStop3() {
            document.querySelector('#spriteRun3').style.display = 'none';
            document.querySelector('#spriteReady3').style.display = 'block';

        }
        setInterval(spriteStop3, 1000)


        next2.addEventListener('click', function () {
            document.querySelector('#q2').style.display = 'none';
            document.querySelector('#q3').style.display = 'block';
        })

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
            document.querySelector('#restart').style.display = 'block';


        }
    }

    restart.addEventListener('click', function () {
        location.reload();
      } )
    
})

submitQ3.addEventListener('click', function () {
    if (answer3.value === "nas" || answer3.value === "Nas") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a3').value = "✅ Nas";
        document.querySelector('.submitQ3').style.display = 'none';
        document.querySelector('#next3').style.display = 'block';

        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#spriteRun4').style.display = 'block';
        document.querySelector('#spriteReady3').remove();

        function spriteStop4() {
            document.querySelector('#spriteRun4').style.display = 'none';
            document.querySelector('#spriteReady4').style.display = 'block';

        }
        setInterval(spriteStop4, 1000)

        next3.addEventListener('click', function () {
            document.querySelector('#q3').style.display = 'none';
            document.querySelector('#q4').style.display = 'block';
        })


    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('neverGiveUp').play();
        document.getElementById('audio2').play();
        document.querySelector('#a3').value = "❌ Nas";
        document.querySelector('.submitQ3').style.display = 'none';
        document.querySelector('#next3').style.display = 'block';
        document.querySelector('#spriteRun3').style.display = 'none';
        document.querySelector('#spriteRun4').style.display = 'block';
        document.querySelector('#spriteReady3').remove();

        function spriteStop4() {
            document.querySelector('#spriteRun4').style.display = 'none';
            document.querySelector('#spriteReady4').style.display = 'block';

        }
        setInterval(spriteStop4, 1000)

        next3.addEventListener('click', function () {
            document.querySelector('#q3').style.display = 'none';
            document.querySelector('#q4').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('neverGiveUp').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})

submitQ4.addEventListener('click', function () {
    if (answer4.value === "ice t" || answer4.value === "Ice T" || answer4.value === "Ice-T" || answer4.value === "Ice-t" || answer4.value === "Ice t" || answer4.value === "Icet") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('lion').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a4').value = "✅ Ice-T";
        document.querySelector('.submitQ4').style.display = 'none';
        document.querySelector('#next4').style.display = 'block';

        document.querySelector('#spriteRun5').style.display = 'block';
        document.querySelector('#spriteReady4').remove();

        function spriteStop5() {
            document.querySelector('#spriteRun5').style.display = 'none';
            document.querySelector('#spriteReady5').style.display = 'block';

        }
        setInterval(spriteStop5, 1000)

        next4.addEventListener('click', function () {
            document.querySelector('#q4').style.display = 'none';
            document.querySelector('#q5').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('gameHuh').play();
        document.getElementById('audio2').play();

        document.querySelector('#a4').value = "❌ Ice-T";
        document.querySelector('.submitQ4').style.display = 'none';
        document.querySelector('#next4').style.display = 'block';

        document.querySelector('#spriteRun5').style.display = 'block';
        document.querySelector('#spriteReady4').remove();

        function spriteStop5() {
            document.querySelector('#spriteRun5').style.display = 'none';
            document.querySelector('#spriteReady5').style.display = 'block';

        }
        setInterval(spriteStop5, 1000)

        next4.addEventListener('click', function () {
            document.querySelector('#q4').style.display = 'none';
            document.querySelector('#q5').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('gameHuh').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})


submitQ5.addEventListener('click', function () {
    if (answer5.value === "eazy e" || answer5.value === "Eazy E" || answer5.value === "Eazy-E" || answer5.value === "Eazy e" || answer5.value === "Eazy E" || answer5.value === "EazyE" || answer5.value === "Easy-E" || answer5.value === "Easy E" || answer5.value === "Easy e" || answer5.value === "easy e") {
        score += 1000;
        lives += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById('audio1').play();
        document.getElementById('weDaBest').play();


        document.querySelector('#a5').value = "✅ Eazy-E";
        document.querySelector('.submitQ5').style.display = 'none';
        document.querySelector('#next5').style.display = 'block';

        next5.addEventListener('click', function () {
            document.getElementById('keysSong').play();

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
            document.querySelector('#djk2').style.display = 'block';
            document.querySelector('#spriteRun6').style.display = 'block';

            setInterval(spriteStop6, 1000)
            // function to animate character using gifs with css slide animation
            function spriteStop6() {
                document.querySelector('#spriteRun6').style.display = 'none';
                document.querySelector('#spriteReady6').style.display = 'block';

            }
        })

        round2.addEventListener('click', function () {
            document.querySelector('#round2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'block';
            document.querySelector('#q6').style.display = 'block';
            document.getElementById('keysSong').pause();
            document.getElementById('anotherOne').play();


        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('playUrself').play();
        document.getElementById('audio2').play();


        document.querySelector('#a5').value = "❌ Eazy E";
        document.querySelector('.submitQ5').style.display = 'none';
        document.querySelector('#next5').style.display = 'block';

        next5.addEventListener('click', function () {
            document.getElementById('keysSong').play();

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
            document.querySelector('#djk2').style.display = 'block';
            document.querySelector('#spriteRun6').style.display = 'block';

            setInterval(spriteStop6, 1000)
            // function to animate character using gifs with css slide animation
            function spriteStop6() {
                document.querySelector('#spriteRun6').style.display = 'none';
                document.querySelector('#spriteReady6').style.display = 'block';

            }
        })
        round2.addEventListener('click', function () {
            document.querySelector('#round2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'block';
            document.querySelector('#q6').style.display = 'block';
            document.getElementById('keysSong').pause();
            document.getElementById('anotherOne').play();


        })
    }
    if (lives <= -3) {
        document.getElementById('lives').innerHTML = "You Lose!"
        document.getElementById('theyDontWant').play();
        document.getElementById('playUrself').pause();
        document.querySelector('#spriteLose').style.display = 'block';
        document.querySelector('#gameOver').style.display = 'block';
        document.querySelector('#spriteRun').style.display = 'none';
        document.querySelector('#questionBox').style.display = 'none';
        document.querySelector('#djk').style.display = 'none';
        document.querySelector('#djk2').style.display = 'none';
        document.querySelector('.sprites').style.display = 'none';
        document.querySelector('#restart').style.display = 'block';
    }

restart.addEventListener('click', function () {
    location.reload();
  })

})

submitQ6.addEventListener('click', function () {

    // start loop

    if (answer6.value === "tupac" || answer6.value === "Tupac" || answer6.value === "2Pac" || answer6.value === "2pac") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youLoyal').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a6').value = "✅ Tupac";
        document.querySelector('.submitQ6').style.display = 'none';
        document.querySelector('#next6').style.display = 'block';

        document.querySelector('#spriteRun6').style.display = 'none';
        document.querySelector('#spriteRun7').style.display = 'block';
        document.querySelector('#spriteReady6').remove();
        // animation function
        function spriteStop7() {
            document.querySelector('#spriteRun7').style.display = 'none';
            document.querySelector('#spriteReady7').style.display = 'block';

        }

        setInterval(spriteStop7, 1000)

        next6.addEventListener('click', function () {
            document.querySelector('#q6').style.display = 'none';
            document.querySelector('#q7').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('playUrself').play();
        document.getElementById('audio2').play();

        document.querySelector('#a6').value = "❌ Tupac";
        document.querySelector('.submitQ6').style.display = 'none';
        document.querySelector('#next6').style.display = 'block';

        document.querySelector('#spriteRun6').style.display = 'none';
        document.querySelector('#spriteRun7').style.display = 'block';
        document.querySelector('#spriteReady6').remove();
        // animation function
        function spriteStop7() {
            document.querySelector('#spriteRun7').style.display = 'none';
            document.querySelector('#spriteReady7').style.display = 'block';

        }

        setInterval(spriteStop7, 1000)

        next6.addEventListener('click', function () {
            document.querySelector('#q6').style.display = 'none';
            document.querySelector('#q7').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('playUrself').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})

submitQ7.addEventListener('click', function () {

    // start loop

    if (answer7.value === "popped" || answer7.value === "Popped" || answer7.value === "pop" || answer7.value === "Pop") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('appreciate').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a7').value = "✅ popped";
        document.querySelector('.submitQ7').style.display = 'none';
        document.querySelector('#next7').style.display = 'block';

        document.querySelector('#spriteRun7').style.display = 'none';
        document.querySelector('#spriteRun8').style.display = 'block';
        document.querySelector('#spriteReady7').remove();

        function spriteStop8() {
            document.querySelector('#spriteRun8').style.display = 'none';
            document.querySelector('#spriteReady8').style.display = 'block';

        }
        setInterval(spriteStop8, 1000)

        next7.addEventListener('click', function () {
            document.querySelector('#q7').style.display = 'none';
            document.querySelector('#q8').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('noExcuses').play();
        document.getElementById('audio2').play();

        document.querySelector('#a7').value = "❌ popped";
        document.querySelector('.submitQ7').style.display = 'none';
        document.querySelector('#next7').style.display = 'block';

        document.querySelector('#spriteRun7').style.display = 'none';
        document.querySelector('#spriteRun8').style.display = 'block';
        document.querySelector('#spriteReady7').remove();

        function spriteStop8() {
            document.querySelector('#spriteRun8').style.display = 'none';
            document.querySelector('#spriteReady8').style.display = 'block';

        }
        setInterval(spriteStop8, 1000)


        next7.addEventListener('click', function () {
            document.querySelector('#q7').style.display = 'none';
            document.querySelector('#q8').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('noExcuses').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})

submitQ8.addEventListener('click', function () {
    if (answer8.value === "Leaders Of The New School" || answer8.value === "Leaders of the new school" || answer8.value === "LONS" || answer8.value === "lons" || answer8.value === "Lons") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('lion').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a8').value = "✅ LONS";
        document.querySelector('.submitQ8').style.display = 'none';
        document.querySelector('#next8').style.display = 'block';

        document.querySelector('#spriteRun8').style.display = 'none';
        document.querySelector('#spriteRun9').style.display = 'block';
        document.querySelector('#spriteReady8').remove();

        function spriteStop9() {
            document.querySelector('#spriteRun9').style.display = 'none';
            document.querySelector('#spriteReady9').style.display = 'block';

        }
        setInterval(spriteStop9, 1000)


        next8.addEventListener('click', function () {
            document.querySelector('#q8').style.display = 'none';
            document.querySelector('#q9').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('neverGiveUp').play();
        document.getElementById('audio2').play();

        document.querySelector('#a8').value = "❌ LONS";
        document.querySelector('.submitQ8').style.display = 'none';
        document.querySelector('#next8').style.display = 'block';

        document.querySelector('#spriteRun8').style.display = 'none';
        document.querySelector('#spriteRun9').style.display = 'block';
        document.querySelector('#spriteReady8').remove();

        function spriteStop9() {
            document.querySelector('#spriteRun9').style.display = 'none';
            document.querySelector('#spriteReady9').style.display = 'block';

        }
        setInterval(spriteStop9, 1000)

        next8.addEventListener('click', function () {
            document.querySelector('#q8').style.display = 'none';
            document.querySelector('#q9').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('neverGiveUp').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})

submitQ9.addEventListener('click', function () {
    if (answer9.value === "Rakim" || answer9.value === "rakim" || answer9.value === "RAKIM") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youGenius').play();
        document.getElementById("lives").innerHTML = lives + " 🗝";
        document.getElementById("score").innerHTML = score;

        document.querySelector('#a9').value = "✅ Rakim";
        document.querySelector('.submitQ9').style.display = 'none';
        document.querySelector('#next9').style.display = 'block';

        document.querySelector('#spriteRun9').style.display = 'none';
        document.querySelector('#spriteRun10').style.display = 'block';
        document.querySelector('#spriteReady9').remove();

        function spriteStop10() {
            document.querySelector('#spriteRun10').style.display = 'none';
            document.querySelector('#spriteReady10').style.display = 'block';

        }
        setInterval(spriteStop10, 1000)


        next9.addEventListener('click', function () {
            document.querySelector('#q9').style.display = 'none';
            document.querySelector('#q10').style.display = 'block';
        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('gameHuh').play();
        document.getElementById('audio2').play();

        document.querySelector('#a9').value = "❌ Rakim";
        document.querySelector('.submitQ9').style.display = 'none';
        document.querySelector('#next9').style.display = 'block';

        document.querySelector('#spriteRun9').style.display = 'none';
        document.querySelector('#spriteRun10').style.display = 'block';
        document.querySelector('#spriteReady9').remove();

        function spriteStop10() {
            document.querySelector('#spriteRun10').style.display = 'none';
            document.querySelector('#spriteReady10').style.display = 'block';

        }
        setInterval(spriteStop10, 1000)

        next9.addEventListener('click', function () {
            document.querySelector('#q9').style.display = 'none';
            document.querySelector('#q10').style.display = 'block';
        })

        if (lives <= -3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('gameHuh').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
            document.querySelector('#restart').style.display = 'block';
        }
    }
    restart.addEventListener('click', function () {
        location.reload();
      })
})

submitQ10.addEventListener('click', function () {
    if (answer10.value === "Public Enemy" || answer10.value === "public enemy" || answer10.value === "PUBLIC ENEMY" || answer10.value === "Public enemy") {
        score += 1000;
        lives += 1;

        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('lives').innerHTML = lives + " 🗝";
        document.getElementById('weDaBest').play();
        document.getElementById('audio1').play();

        document.querySelector('#a10').value = "✅ Public Enemy";
        document.querySelector('.submitQ10').style.display = 'none';
        document.querySelector('#next10').style.display = 'block';



        next10.addEventListener('click', function () {
            document.querySelector('#q10').style.display = 'none';
            if (lives >= 3) {
                document.getElementById('lives').innerHTML = "You Win! " + lives + " 🗝";
                document.getElementById('allIDoIsWin').play();
                document.getElementById('weDaBest').pause();
                document.querySelector('#confetti').style.display = 'block';
                document.querySelector('#spriteWon').style.display = 'block';
                document.querySelector('#spriteRun').style.display = 'none';
                document.querySelector('#spriteRun2').style.display = 'none';
                document.querySelector('#spriteRun3').style.display = 'none';
                document.querySelector('#djk2').style.display = 'none';
                document.querySelector('#questionBox').style.display = 'none';
                document.querySelector('#spriteReady10').remove();
    
            
            document.querySelector('#restart').style.display = 'block';
        
    restart.addEventListener('click', function () {
        location.reload();
      })}
    
            else if (lives < 3) {
                document.getElementById('lives').innerHTML = "You Lose!"
                document.getElementById('theyDontWant').play();
                document.getElementById('playUrself').pause();
                document.querySelector('#spriteLose').style.display = 'block';
                document.querySelector('#gameOver').style.display = 'block';
                document.querySelector('#spriteRun').style.display = 'none';
                document.querySelector('#questionBox').style.display = 'none';
                document.querySelector('#djk2').style.display = 'none';
                document.querySelector('.sprites').style.display = 'none';
                document.querySelector('#restart').style.display = 'block';
            }
        
        restart.addEventListener('click', function () {
            location.reload();
          })

        })

    } else {
        score -= 1000;
        lives -= 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById('playUrself').play();
        document.getElementById('audio2').play();

        document.querySelector('#a10').value = "❌ Public Enemy";
        document.querySelector('.submitQ10').style.display = 'none';
        document.querySelector('#next10').style.display = 'block';

        next10.addEventListener('click', function () {
            document.querySelector('#q10').style.display = 'none';
        

        if (lives >= 3) {
            document.getElementById('lives').innerHTML = "You Win! " + lives + " 🗝";
            document.getElementById('allIDoIsWin').play();
            document.getElementById('weDaBest').pause();
            document.querySelector('#confetti').style.display = 'block';
            document.querySelector('#spriteWon').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#spriteRun2').style.display = 'none';
            document.querySelector('#spriteRun3').style.display = 'none';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#spriteReady10').remove();

        }

        else if (lives < 3) {
            document.getElementById('lives').innerHTML = "You Lose!"
            document.getElementById('theyDontWant').play();
            document.getElementById('playUrself').pause();
            document.querySelector('#spriteLose').style.display = 'block';
            document.querySelector('#gameOver').style.display = 'block';
            document.querySelector('#spriteRun').style.display = 'none';
            document.querySelector('#questionBox').style.display = 'none';
            document.querySelector('#djk2').style.display = 'none';
            document.querySelector('.sprites').style.display = 'none';
        }
    })
    }




}

)