var player1 = localStorage.getItem("Math Quiz Player 1");
var player2 = localStorage.getItem("Math Quiz Player 2");

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1_name").innerHTML = player1 + " :  ";
document.getElementById("player2_name").innerHTML = player2 + " :  ";
document.getElementById("player1_score").innerHTML = " " + player1Score;
document.getElementById("player2_score").innerHTML = " " + player2Score;


document.getElementById("player_question").innerHTML = "Question Turn : " + " " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + " " + player2;

questionTurn = player1;
AnswerTurn = player2;


function startQuestion() {

    var input1 = document.getElementById("answer1").value;
    var input2 = document.getElementById("answer2").value;
    localStorage.setItem("number1",input1);
    localStorage.setItem("number2",input2);








    Question = "<h1 id='question' style='color: black;'>" + input1 + " X " + input2 + "</h1>";
    Input = "<br><br><input type='number' placeholder = 'Enter your Answer' class='input-checkbox' id='AnswerPlace'>";
    Button = "<br><br><button class='btn btn-lg' style='background-color: rgb(251,193,66); color: white;' id='buttonForClicky' onclick='Check()'>Check</button>";
    Row = Question + Input + Button;



    document.getElementById("output").innerHTML = Row;
    document.getElementById("answer1").value = '';
    document.getElementById("answer2").value = '';






}



function Check() {

    var InputForAnswer = document.getElementById("AnswerPlace");
    var input1valueAgain, input2valueAgain;
    input1valueAgain = localStorage.getItem("number1");
    input2valueAgain = localStorage.getItem("number2");
    var answer = input1valueAgain * input2valueAgain;
    console.log(answer);


    if (AnswerTurn == player1) {
        if (InputForAnswer.value == answer) {
            player1Score++;
            document.getElementById("player1_score").innerHTML = " " + player1Score;

        }
        questionTurn = player1;
        AnswerTurn = player2;
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1;
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2;

    } else if (AnswerTurn == player2) {
        if (InputForAnswer.value == answer) {
            player2Score++;
            document.getElementById("player2_score").innerHTML = " " + player2Score;

        }

        questionTurn = player2;
        AnswerTurn = player1;
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2;
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1;
    }


    document.getElementById("output").innerHTML = '';




    //Then what happens nothing.

}