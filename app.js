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
let submitQ1 = document.querySelector('.submitQ1')
let submitQ2 = document.querySelector('.submitQ2')
let submitQ3 = document.querySelector('.submitQ3')
let submitQ4 = document.querySelector('.submitQ4')
let submitQ5 = document.querySelector('.submitQ5')
let next = document.querySelector('.next')
let skip = document.querySelector('.skip')
let daKey = document.querySelector('#daKey')
let questions = document.querySelector('.buttonBox')
let confetti = document.querySelector('#confetti') 
let start = document.querySelector('#start')
let score = 0; 
let lives = 0;


//use setInterval to display none on image tehen display blcok to next
//hide all questions until onclick functions



start.addEventListener('click', function(){
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#q1').style.display = 'block';
    document.getElementById('IGotKeys').pause();
    

})

submitQ1.addEventListener('click', function() {
    // console.log(answer.value)
    if (answer.value === "diddy") {
        score += 1000;
        lives += 1;
        document.getElementById('audio1').play();
        document.getElementById('youSmart').play();
        document.getElementById("lives").innerHTML = lives + "🗝";
        document.getElementById("score").innerHTML = score;
        document.querySelector('#q1').style.display = 'none';
        document.querySelector('#q2').style.display = 'block';

     
    } else {
        document.getElementById('audio2').play();
        document.getElementById("score").innerHTML -= 1000;
        document.getElementById("lives").innerHTML -= 1;

    }

    
    if (lives >= 3) {
        document.getElementById('lives').innerHTML = "You Won! 🗝🗝🗝"
        document.getElementById('allIDoIsWin').play();
        document.getElementById('youSmart').pause();

    }
 
    
})



// function move(){ //function is move
//     var box = document.getElementById("astro"); //get that box
//     var position = 0; //var for box's position
//     var interval = setInterval(frame, 15); //var interval do the function setInterval for 5 secs create func frames
//     function frame() { 
//         if (position == 1300){ 
//             box.style.transition = "4s";
//             box.style.transform = "translate(200px, 100px)";
//         } else {
//             position++; 
//             box.style.left = position + "px"; 
//             box.style.bottom = position + "px";
//             if (position == 400) {
//                 box.style.transition = "4s";
//                 box.style.transform = "translate(100px, 200px)";
//                 console.log ();
//             }
//             if (position == 600) {
//                 box.style.transition = "4s";
//                 box.style.transform = "translate(300px, 400px)";
//                 console.log ();
//             }if (position == 1000) {
//                 box.style.transition = "4s";
//                 box.style.transform = "translate(500px, 800px)";
//             clearInterval(interval)
//             }
//         }
//         } 
//         }
// submitQ2.addEventListener('click', function() {
//     if (answer.value === "Lil' Wayne") {
//         score += 1000;
//         lives += 1;
//         document.getElementById('audio1').play();
//         document.getElementById('youSmart').play();
//         document.getElementById("lives").innerHTML = lives + "🗝🗝";
//         document.getElementById("score").innerHTML = score;
//         document.querySelector('#q2').style.display = 'none';
//         document.querySelector('#q3').style.display = 'block';


//     } else {
//         document.getElementById('audio2').play();
//         document.getElementById("score").innerHTML -= 1000;
//         document.getElementById("lives").innerHTML -= 1;

//     }

    
//     if (lives >= 3) {
//         document.getElementById('lives').innerHTML = "You Won! 🗝🗝🗝"
//         document.getElementById('allIDoIsWin').play();
//         document.getElementById('youSmart').pause();

//     }
//     if (lives <= 0) {
//         document.getElementById('lives').innerHTML = "You Done!"
//     }
// })

