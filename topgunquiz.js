var question = 1
var score = 0;
function RightAnswer() {
    alert("That is correct!");
    if(document.getElementById("Q"+question+"timer").innerHTML != "EXPIRED")
    {
        score+=10;
    }
    question++;
    DisplayNextQuestion(question)
}

function WrongAnswer() {
    alert("WRONG! Try again.")
}

function DisplayScore() {
    document.getElementById("final-score").innerHTML = "Final score: " + score;
}

function DisplayNextQuestion(question) {
    if(question == 1)
    {
        document.getElementById('Q1').style.visibility = 'visible';
        DisplayTimer(question);
    }
    else if(question == 2)
    {
        document.getElementById('Q2').style.visibility = 'visible';
        DisplayTimer(question);
    }
    else if(question == 3)
    {
        document.getElementById('Q3').style.visibility = 'visible';
        DisplayTimer(question);
    }
    else if(question == 4)
    {
        document.getElementById('Q4').style.visibility = 'visible';
        DisplayTimer(question);
    }
    else
    {
        document.getElementById('final-score').style.visibility = 'visible'; 
        DisplayScore();
    }

}

function DisplayTimer(question)
{
    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds()+10);
    var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate-now;
    var seconds = Math.floor((distance % (1000*60))/1000);
    document.getElementById("Q"+question+"timer").innerHTML = seconds + "s";
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("Q"+question+"timer").innerHTML = "EXPIRED";
      }
    },1000);
}