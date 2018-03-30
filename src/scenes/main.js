import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: "Main"
    });

    this.preload = this.preload.bind(this);
  }

  preload() {
    this.load.image("ninja", "assets/ninja.png");
    this.key_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  }

  create() {
    this.image = this.add.image(300, 400, "ninja");
  }

  update() {
    if (this.key_a.isDown) this.image.x -= 10;
    if (this.key_d.isDown) this.image.x += 10;
  }
}
