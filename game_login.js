function getNames(){
    var first_Name = document.getElementById("Player1").value;
    var next_Name = document.getElementById("Player2").value;

    localStorage.setItem("Math Quiz Player 1",first_Name);
    localStorage.setItem("Math Quiz Player 2",next_Name);

    window.location = "game.html";
}