//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {

    //if the number has a remanider of 0 returns even
    if(number % 2 === 0){
      return("Even");
    }
    //otherwise return as odd
    else{
      return("Odd");
    }
    
  }