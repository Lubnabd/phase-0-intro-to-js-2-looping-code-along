// Code your solutions in this file

function writeCards(names, event) {
    const thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for attending the ${event} event.`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }
  
  function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const name = namesArray[i];
      const message = `Thank you, ${name}, for attending the ${eventName} event.`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }


  function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }