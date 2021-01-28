// 1. Select elements (h2, 3 cards)
const h2Element = document.querySelector("h2");
const whiteCards = document.querySelectorAll(".white-card");
console.log(h2Element, whiteCards);

// 2. Listen to an event (click)
h2Element.addEventListener("click", () => {
  // iterate over our whiteCards
  whiteCards.forEach((whiteCard) => {
    // 3. Add the class display to the card
    whiteCard.classList.toggle("display");
  });
});

document.addEventListener("scroll", () => {
  // iterate over our whiteCards
  whiteCards.forEach((whiteCard) => {
    // 3. Add the class display to the card
    whiteCard.classList.add("display");
  });
});
