var pileA = 5;
var pileB = 5;
var pileC = 5;
var currentStones = pileA + pileB + pileC;

function getRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log("STARTING STATE");
console.log("Pile A: O O O O O");
console.log("Pile B: O O O O O");
console.log("Pile C: O O O O O");

while(currentStones > 0)
{
    var humanAnswer = prompt("Please select a pile and the number of stones to remove from the pile (e.g. a3, c5)")

    switch(humanAnswer)
    {
      case 'a1':
      if(pileA > 0)
      {
        pileA = pileA - 1;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 1;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile A, try another pile!");
        break;
      }
      case 'a2':
      if(pileA > 1)
      {
        pileA = pileA - 2;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 2;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile A, try another pile!");
        break;
      }
      case 'a3':
      if(pileA > 2)
      {
        pileA = pileA - 3;
        console.log("CURRENT STATE");
        console.log("Pile A: O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 3;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile A, try another pile!");
        break;
      }
      case 'a4':
      if(pileA > 3)
      {
        pileA = pileA - 4;
        console.log("CURRENT STATE");
        console.log("Pile A: O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 4;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile A, try another pile!");
        break;
      }
      case 'a5':
      if(pileA > 4)
      {
        pileA = pileA - 5;
        console.log("CURRENT STATE");
        console.log("Pile A:");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 5;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile A, try another pile!");
        break;
      }
      case 'b1':
      if(pileB > 0)
      {
        pileB = pileB - 1;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 1;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile B, try another pile!");
        break;
      }
      case 'b2':
      if(pileB > 1)
      {
        pileB = pileB - 2;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 2;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile B, try another pile!");
        break;
      }
      case 'b3':
      if(pileB > 2)
      {
        pileB = pileB - 3;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 3;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile B, try another pile!");
        break;
      }
      case 'b4':
      if(pileB > 3)
      {
        pileB = pileB - 4;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 4;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile B, try another pile!");
        break;
      }
      case 'b5':
      if(pileB > 4)
      {
        pileB = pileB - 5;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B:");
        console.log("Pile C: O O O O O");
        currentStones = currentStones - 5;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile B, try another pile!");
        break;
      }

      case 'c1':
      if(pileC > 0)
      {
        pileC = pileC - 1;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O O");
        currentStones = currentStones - 1;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile C, try another pile!");
        break;
      }
      case 'c2':
      if(pileC > 1)
      {
        pileC = pileC - 2;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O O");
        currentStones = currentStones - 2;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile C, try another pile!");
        break;
      }
      case 'c3':
      if(pileC > 2)
      {
        pileC = pileC - 3;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O O");
        currentStones = currentStones - 3;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile C, try another pile!");
        break;
      }
      case 'c4':
      if(pileC > 3)
      {
        pileC = pileC - 4;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C: O");
        currentStones = currentStones - 4;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile C, try another pile!");
        break;
      }
      case 'c5':
      if(pileC > 4)
      {
        pileC = pileC - 5;
        console.log("CURRENT STATE");
        console.log("Pile A: O O O O O");
        console.log("Pile B: O O O O O");
        console.log("Pile C:");
        currentStones = currentStones - 5;
        break;
      }
      else
      {
        alert("There's no more (or not enough) stones in Pile C, try another pile!");
        break;
      }

      default:
        alert("Please follow the correct format (e.g. a3, c5)");
        break;
    }

    if(currentStones == 0)
    {
      alert("Congratulations, you have won!");
      break;
    }

    var computerAnswer = getRandomNumber(1, 6);
    if(computerAnswer <= pileA)
    {
      currentStones = currentStones - computerAnswer;
      pileA = pileA - computerAnswer;
      alert("The computer removed " + computerAnswer + " stones from Pile A");
    }
    else if(computerAnswer <= pileB)
    {
      currentStones = currentStones - computerAnswer;
      pileB = pileB - computerAnswer;
      alert("The computer removed " + computerAnswer + " stones from Pile B");
    }
    else if(computerAnswer <= pileC)
    {
      currentStones = currentStones - computerAnswer;
      pileC = pileC - computerAnswer;
      alert("The computer removed " + computerAnswer + " stones from Pile C");
    }

    if(currentStones == 0)
    {
      alert("Sorry, the computer beat you this time!");
      break;
    }
}
