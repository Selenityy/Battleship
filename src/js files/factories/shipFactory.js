class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitCount += 1;
    return { hitCount: this.hitCount };
  }

  isSunk() {
    if (this.hitCount >= this.length) {
      return (this.sunk = true);
    } else {
      return (this.sunk = false);
    }
  }
}

export { Ship };
