/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 50.199601201716774,
        y: 52.84919879828324
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    while (true) {
      yield* this.wait(this.random(0, 20));
      this.direction = this.random(-360, 360);
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.score += 1;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.move(25);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(this.random(0, 15));
      this.visible = false;
      yield* this.wait(this.random(10, 60));
      this.visible = true;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.move(25);
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.score = 0;
    while (true) {
      yield* this.wait(this.random(0, 20));
      this.direction = this.random(-360, 360);
      yield;
    }
  }
}
