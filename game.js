const cards = document.querySelectorAll('.card');

  let openedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

//First and second pick
    if (!openedCard) {
      openedCard = true;
      firstCard = this;
     return;
   }

   secondCard = this;
   checkForMatch();
 }
//If it's not a match display a random message
 function checkForMatch() {
  let message = [
  "Try harder Harry!",
  "You can do this!",
  "I believe in you!",
  "Oh, come on!",
  ];
   if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    disableCards();
     return;
  }else{
   let mess = Math.floor(Math.random() * message.length);
      document.getElementById("mess").innerHTML = message[mess]; 
   }

   closeCards();
 }
//If it's a match display a random message
function disableCards() {
    let message = [
  "Great job Harry!",
  "You are doing amazing, sweetie!",
  "Fantastic!",
  "Awesome!",
  ];
   firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

     resetBoard(); 
     let mess = Math.floor(Math.random() * message.length);
      document.getElementById("mess").innerHTML = message[mess]; 
}             

 function closeCards() {
  lockBoard = true;

   setTimeout(() => {
     firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     resetBoard();
   }, 1200);
 }

function resetBoard() {
   [openedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
 }
//Shuffling the cards, *16 'cause we have 16 memory cards
 (function shuffle() {
   cards.forEach(card => {
     let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
   });
 })();


cards.forEach(card => card.addEventListener('click', flipCard));

function reloadPage() {
  location.reload();
  
}