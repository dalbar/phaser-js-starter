import Phaser from "phaser";
import Main from "./scenes/main";

class MyGame extends Phaser.Game {
  constructor() {
    super({
      width: window.innerWidth * window.devicePixelRatio,
      height: window.innerHeight * window.devicePixelRatio,
      type: Phaser.AUTO,
      scene: [Main]
    });
  }
}
new MyGame();
