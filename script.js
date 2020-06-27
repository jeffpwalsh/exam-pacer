let totalMinutes = 0;
let totalQuestions = 0;
let progress = 0;
let totalProgress;
let switchCounter = 0;
let questionCounter = 0;
let progressCounter = 0;

let suggestedQNum = 1;
let totalSeconds = 0;
let timePerQuestion = 0;
let timeRemaining = 0;

function reset() {
  location.reload();
}

function myFunction() {
  totalMinutes = document.getElementById('minutes').value;
  totalQuestions = document.getElementById('questions').value;
  totalProgress = document.getElementById('progression');
  totalSeconds = totalMinutes * 60;

  timePerQuestion = totalSeconds / totalQuestions;
  timePerQuestion = timePerQuestion.toFixed(2);
  progressPerQuestion = totalSeconds / 100;
  progressPerQuestion = progressPerQuestion.toFixed(2);

  if (totalSeconds < totalQuestions) {
    alert(
      'According to your inputs, you are required to answer more than one question per second. Please correct your inputs to continue'
    );
  } else {
    console.log(`${timePerQuestion} seconds per question`);
    console.log(`${totalQuestions} questions overall/total`);
    console.log(`${totalSeconds} seconds overall/total `);
    console.log(`${progressPerQuestion} seconds per 1% increase`);

    function timer() {
      if (totalSeconds <= -0.1) {
        clearInterval(myVar);
        alert('Times Up');
        location.reload();
      } else {
        document.getElementById(
          'countDisplay'
        ).innerHTML = totalSeconds.toFixed(2);

        if (totalSeconds <= 60) {
          totalMinutes = 0;
        }

        document.getElementById('countDisplay2').innerHTML = totalMinutes;

        totalSeconds = totalSeconds - 0.1;
        switchCounter = switchCounter + 0.1;
        questionCounter = questionCounter + 0.1;

        // console.log(`${switchCounter} switch counter`);
        // console.log(`${questionCounter} question counter`);
        // console.log(`${totalSeconds} total seconds`);

        if (switchCounter >= 60) {
          totalMinutes = totalMinutes - 1;
          switchCounter = 0;
        }

        if (
          questionCounter >= timePerQuestion &&
          suggestedQNum != totalQuestions
        ) {
          suggestedQNum = suggestedQNum + 1;
          questionCounter = 0;
        }

        if (progressCounter >= progressPerQuestion) {
          progress = progress + 5;
          progressCounter = 0;
        }

        progressCounter = progressCounter + 0.1;

        document.getElementById('countDisplay3').innerHTML = suggestedQNum;
        document.getElementById('progression').style.width = progress + 'px';
        if (progress / 5 < 35) {
          document.getElementById('progression').style.backgroundColor =
            'green';
        } else if (progress / 5 > 33 && progress / 5 < 66) {
          document.getElementById('progression').style.backgroundColor =
            'yellowgreen';
        } else if (progress / 5 > 66 && progress / 5 < 80) {
          document.getElementById('progression').style.backgroundColor =
            'orange';
        } else if (progress / 5 > 80 && progress / 5 < 90) {
          document.getElementById('progression').style.backgroundColor =
            'orangered';
        } else if (progress / 5 > 90) {
          document.getElementById('progression').style.backgroundColor = 'red';
        }
        document.getElementById('progression2').innerHTML = progress / 5 + '%';
        //progress calculation is slightly out. look at tofixed on the progress counter
      }
    }

    let myVar = setInterval(timer, 100);

    //WORKOUT THE TOTAL QUESTIONS DIVED OR MULTIPLES BY UPDATED QUESTION NUMBER TO GET AN ACCUARTE PROGRESS BAR
  }
}
