class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    }

    // Loop through the cards array in reverse order
    for (let i = this.cards.length - 1; i >= 1; i--) {
      //Generate a random index j between 0 and i (inclusive)
      // i represents the current index
      // j represents the randomly chosen index to swap with
      let j = Math.floor(Math.random() * (i + 1));

      // Temporarily stores the card at index i in the a variable
      let intermediate = this.cards[i];
      // Replace the card at index i with the card at index j
      this.cards[i] = this.cards[j];
      // Assign the value in intermediate to the card at index j
      // and it swaps the positions of the two cards.
      this.cards[j] = intermediate;
    }
    // Return the shuffled cards array
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
