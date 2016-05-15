var i = 0;
var randomNumber1 = getRandomNumber(1, 9);
var randomNumber2 = getRandomNumber(1, 9);
var randomNumber3 = getRandomNumber(1, 9);

var firstDigit = prompt("Guess the first digit that I am thinking of");
var secondDigit = prompt("Guess the second digit that I am thinking of");
var thirdDigit = prompt("Guess the third digit that I am thinking of");

analyzeGuess();

function getRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

function analyzeGuess()
{
  if((firstDigit == randomNumber1) && (secondDigit == randomNumber2) && (thirdDigit == randomNumber3))
  {
    alert("That is correct! Congratulations, you have won!");
  }
  else if(firstDigit == randomNumber1)
  {
    alert("Fermi");
  }
  else if(secondDigit == randomNumber2)
  {
    alert("Fermi");
  }
  else if(thirdDigit == randomNumber3)
  {
    alert("Fermi");
  }
  else if(secondDigit == randomNumber1)
  {
    alert("Pico");
  }
  else if(thirdDigit == randomNumber1)
  {
    alert("Pico");
  }
  else if(firstDigit == randomNumber2)
  {
    alert("Pico");
  }
  else if(thirdDigit == randomNumber3)
  {
    alert("Pico");
  }
  else if(firstDigit == randomNumber3)
  {
    alert("Pico");
  }
  else if(secondDigit == randomNumber3)
  {
    alert("Pico");
  }
  else
  {
    alert("Bagels");
  }
}

while(i < 21)
{
  i++;
  var firstDigit = prompt("Guess the first digit that I am thinking of");
  var secondDigit = prompt("Guess the second digit that I am thinking of");
  var thirdDigit = prompt("Guess the third digit that I am thinking of");

  analyzeGuess();

  if(i == 20)
  {
    alert("You've used up all 20 guesses, you lose");
  }
}
