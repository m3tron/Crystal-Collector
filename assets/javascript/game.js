var randomNumberGenerator = 19 + Math.floor(Math.random() * 102);
var jewel1Number = 1 + Math.floor(Math.random() * 12);
var jewel2Number = 1 + Math.floor(Math.random() * 12);
var jewel3Number = 1 + Math.floor(Math.random() * 12);
var jewel4Number = 1 + Math.floor(Math.random() * 12);
var total = 0;
var wins = 0;
var losses = 0;
console.log(jewel1Number, jewel2Number, jewel3Number, jewel4Number);
jewelNumberCheck();

function reset() {
  randomNumberGenerator = 19 + Math.floor(Math.random() * 101);
  $("#computerNumber").text(randomNumberGenerator);
  jewel1Number = 1 + Math.floor(Math.random() * 12);
  jewel2Number = 1 + Math.floor(Math.random() * 12);
  jewel3Number = 1 + Math.floor(Math.random() * 12);
  jewel4Number = 1 + Math.floor(Math.random() * 12);
  jewelNumberCheck();
  total = 0;
  $("#userNumber").text(total);
  $("#message").fadeOut(3000);
}

function totalScore() {
  if (total === randomNumberGenerator) {
    wins++;
    $("#winNumber").text("Wins: " + wins);
    $("#loseNumber").text("Losses: " + losses);
    $("#message").text("You Win!");
    $("#message").fadeIn(400);

    reset();
  } else if (total > randomNumberGenerator) {
    losses++;
    $("#winNumber").text("Wins: " + wins);
    $("#loseNumber").text("Losses: " + losses);
    $("#message").text("You Lose!");
    $("#message").fadeIn(400);
    reset();
  }
}

function jewelNumberCheck() {
  if (
    jewel2Number === jewel1Number ||
    jewel3Number === jewel2Number ||
    jewel3Number === jewel1Number ||
    jewel4Number === jewel3Number ||
    jewel4Number === jewel2Number ||
    jewel4Number === jewel1Number
  ) {
    jewel2Number = 1 + Math.floor(Math.random() * 11);
    jewel3Number = 1 + Math.floor(Math.random() * 11);
    jewel4Number = 1 + Math.floor(Math.random() * 11);
    jewelNumberCheck();
  }
}
console.log(jewel1Number, jewel2Number, jewel3Number, jewel4Number);
$("#computerNumber").text(randomNumberGenerator);

$("#jewel1").click(function() {
  total += jewel1Number;
  $("#userNumber").text(total);
  totalScore();
});

$("#jewel2").click(function() {
  total += jewel2Number;
  $("#userNumber").text(total);
  totalScore();
});

$("#jewel3").click(function() {
  total += jewel3Number;
  $("#userNumber").text(total);
  totalScore();
});

$("#jewel4").click(function() {
  total += jewel4Number;
  $("#userNumber").text(total);
  totalScore();
});
