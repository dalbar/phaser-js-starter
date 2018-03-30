import Phaser from "phaser";

class MyGame extends Phaser.Game {
  constructor() {
    super(
      window.innerWidth * window.devicePixelRatio,
      window.innerHeight * window.devicePixelRatio,
      Phaser.AUTO
    );
  }
}

new MyGame();
