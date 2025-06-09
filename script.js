//found this solution online when it gave me an error that the addEventListener was null (because quiz.html didn't have a start id button)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start").addEventListener("click", function() {
    //opens the quiz page in SAME WINDOW??? crazy.
    window.location.replace("quiz.html");
  });
});

//Store result scores
const values = [["hazelnut", 0], ["vanilla", 0], ["raspberry", 0], ["chocolate", 0], ["cinnamon", 0], ["brown sugar", 0]];

//Store # questions answered
var questionDone = 0;

//event listeners
//q1
{
  document.getElementById("q1a1").addEventListener("click", function() {
    addPoint(1, 1, 1);
  });
  document.getElementById("q1a2").addEventListener("click", function() {
    addPoint(5, 1, 2);
  });
  document.getElementById("q1a3").addEventListener("click", function() {
    addPoint(2, 1, 3);
  });
  document.getElementById("q1a4").addEventListener("click", function() {
    addPoint(4, 1, 4);
  });
  document.getElementById("q1a5").addEventListener("click", function() {
    addPoint(3, 1, 5);
  });
  document.getElementById("q1a6").addEventListener("click", function() {
    addPoint(6, 1, 6);
  });
}

//q2
{
  document.getElementById("q2a1").addEventListener("click", function() {
    addPoint(4, 2, 1);
  });
  document.getElementById("q2a2").addEventListener("click", function() {
    addPoint(2, 2, 2);
  });
  document.getElementById("q2a3").addEventListener("click", function() {
    addPoint(3, 2, 3);
  });
  document.getElementById("q2a4").addEventListener("click", function() {
    addPoint(1, 2, 4);
  });
  document.getElementById("q2a5").addEventListener("click", function() {
    addPoint(6, 2, 5);
  });
  document.getElementById("q2a6").addEventListener("click", function() {
    addPoint(5, 2, 6);
  });
}

//q3
{
  document.getElementById("q3a1").addEventListener("click", function() {
    addPoint(6, 3, 1);
  });
  document.getElementById("q3a2").addEventListener("click", function() {
    addPoint(3, 3, 2);
  });
  document.getElementById("q3a3").addEventListener("click", function() {
    addPoint(4, 3, 3);
  });
  document.getElementById("q3a4").addEventListener("click", function() {
    addPoint(1, 3, 4);
  });
  document.getElementById("q3a5").addEventListener("click", function() {
    addPoint(2, 3, 5);
  });
  document.getElementById("q3a6").addEventListener("click", function() {
    addPoint(5, 3, 6);
  });
}

//q4
{
  document.getElementById("q4a1").addEventListener("click", function() {
    addPoint(2, 4, 1);
  });
  document.getElementById("q4a2").addEventListener("click", function() {
    addPoint(4, 4, 2);
  });
  document.getElementById("q4a3").addEventListener("click", function() {
    addPoint(3, 4, 3);
  });
  document.getElementById("q4a4").addEventListener("click", function() {
    addPoint(1, 4, 4);
  });
  document.getElementById("q4a5").addEventListener("click", function() {
    addPoint(6, 4, 5);
  });
  document.getElementById("q4a6").addEventListener("click", function() {
    addPoint(5, 4, 6);
  });
}

//q5
{
  document.getElementById("q5a1").addEventListener("click", function() {
    addPoint(5, 5, 1);
  });
  document.getElementById("q5a2").addEventListener("click", function() {
    addPoint(1, 5, 2);
  });
  document.getElementById("q5a3").addEventListener("click", function() {
    addPoint(3, 5, 3);
  });
  document.getElementById("q5a4").addEventListener("click", function() {
    addPoint(2, 5, 4);
  });
  document.getElementById("q5a5").addEventListener("click", function() {
    addPoint(4, 5, 5);
  });
  document.getElementById("q5a6").addEventListener("click", function() {
    addPoint(1, 5, 6);
  });
}

//q6
{
  document.getElementById("q6a1").addEventListener("click", function() {
    addPoint(1, 6, 1);
  });
  document.getElementById("q6a2").addEventListener("click", function() {
    addPoint(5, 6, 2);
  });
  document.getElementById("q6a3").addEventListener("click", function() {
    addPoint(3, 6, 3);
  });
  document.getElementById("q6a4").addEventListener("click", function() {
    addPoint(4, 6, 4);
  });
  document.getElementById("q6a5").addEventListener("click", function() {
    addPoint(2, 6, 5);
  });
  document.getElementById("q6a6").addEventListener("click", function() {
    addPoint(6, 6, 6);
  });
}

//q7
{
  document.getElementById("q7a1").addEventListener("click", function() {
    addPoint(3, 7, 1);
  });
  document.getElementById("q7a2").addEventListener("click", function() {
    addPoint(2, 7, 2);
  });
  document.getElementById("q7a3").addEventListener("click", function() {
    addPoint(4, 7, 3);
  });
  document.getElementById("q7a4").addEventListener("click", function() {
    addPoint(1, 7, 4);
  });
  document.getElementById("q7a5").addEventListener("click", function() {
    addPoint(6, 7, 5);
  });
  document.getElementById("q7a6").addEventListener("click", function() {
    addPoint(5, 7, 6);
  });
}

//q8
{
  document.getElementById("q8a1").addEventListener("click", function() {
    addPoint(2, 8, 1);
  });
  document.getElementById("q8a2").addEventListener("click", function() {
    addPoint(6, 8, 2);
  });
  document.getElementById("q8a3").addEventListener("click", function() {
    addPoint(5, 8, 3);
  });
  document.getElementById("q8a4").addEventListener("click", function() {
    addPoint(3, 8, 4);
  });
  document.getElementById("q8a5").addEventListener("click", function() {
    addPoint(1, 8, 5);
  });
  document.getElementById("q8a6").addEventListener("click", function() {
    addPoint(4, 8, 6);
  });
}

//q9
{
  document.getElementById("q9a1").addEventListener("click", function() {
    addPoint(5, 9, 1);
  });
  document.getElementById("q9a2").addEventListener("click", function() {
    addPoint(2, 9, 2);
  });
  document.getElementById("q9a3").addEventListener("click", function() {
    addPoint(1, 9, 3);
  });
  document.getElementById("q9a4").addEventListener("click", function() {
    addPoint(3, 9, 4);
  });
  document.getElementById("q9a5").addEventListener("click", function() {
    addPoint(4, 9, 5);
  });
  document.getElementById("q9a6").addEventListener("click", function() {
    addPoint(6, 9, 6);
  });
}

//q10
{
  document.getElementById("q10a1").addEventListener("click", function() {
    addPoint(1, 10, 1);
  });
  document.getElementById("q10a2").addEventListener("click", function() {
    addPoint(6, 10, 2);
  });
  document.getElementById("q10a3").addEventListener("click", function() {
    addPoint(2, 10, 3);
  });
  document.getElementById("q10a4").addEventListener("click", function() {
    addPoint(5, 10, 4);
  });
  document.getElementById("q10a5").addEventListener("click", function() {
    addPoint(3, 10, 5);
  });
  document.getElementById("q10a6").addEventListener("click", function() {
    addPoint(4, 10, 6);
  });
}

//restart button
document.getElementById("restart").addEventListener("click", restart);

//point adding function
function addPoint(type, qNum, aNum) {
  values[type - 1][1]++;
  questionDone++;
  console.log("Questions done = " + questionDone);
  disable(qNum, aNum);

  //prints out final tallies for testing
  if (questionDone == 10) {
    console.log("The quiz is complete!");
    console.log("Hazelnut = " + values[0][1]);
    console.log("Vanilla = " + values[1][1]);
    console.log("Raspberry = " + values[2][1]);
    console.log("Chocolate = " + values[3][1]);
    console.log("Cinnamon = " + values[4][1]);
    console.log("Brown Sugar = " + values[5][1]);
    finalResults();
  }
}

function disable(qNum, aNum) {
  for (let i = 1; i < 7; i++) {
    id = "q" + qNum + "a" + i;
    if (i != aNum) {
      document.getElementById(id).disabled = true;
    } else {
      //disables the chosen answer but still allows it to be readable :)
      document.getElementById(id).disabled = true;
      document.getElementById(id).style.backgroundColor = "#5F4C4C";
      document.getElementById(id).style.color = "#FFEFF1";
      document.getElementById(id).style.border = "2px solid #FFEFF1"
    }
  }
  if (qNum != 10) {
    next = "q" + (qNum + 1);
    document.getElementById(next).scrollIntoView({
      behavior: 'smooth' //what CAN'T websites do 
    });
  } else if (qNum == 10) {
    document.getElementById("result").scrollIntoView({
      behavior: "smooth"
    });
  }
}

//determines final result
function finalResults() {
  var big = values[0];

  //finds biggest value
  for (let v of values) {
    if (v[1] > big[1]) {
      big = v;
    }
  }
  console.log("Biggest is " + big[0]);

  //finds ALL biggest values (may have multiple with same tally)
  const finals = [];
  for (let v of values) {
    if (v[1] == big[1]) {
      finals.push(v);
    }
  }

  //randomly selects one from values with equal tallies (user has equal chance of being any of those personalities!)
  console.log("Final possibilities are ");
  for (let f of finals) {
    console.log(f[0]);
  }

  //all this code logic lowkey gave me a headache. but strangely satisfying to see it working...

  big = finals[Math.round(Math.random() * (finals.length - 1))]

  //final result
  console.log("You are " + big[0] + "!");
  document.getElementById("result").innerHTML = "you are " + big[0] + " syrup!";
}

//restarts the quiz
function restart() {
  window.location.reload(); //this command just reloads the webpage - THAT'S SO COOL??? power of the internet
  window.scrollTo(0, 0); //back to top - bless w3schools
}

