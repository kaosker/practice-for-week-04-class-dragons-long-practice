class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
}

module.exports = Dragon;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
