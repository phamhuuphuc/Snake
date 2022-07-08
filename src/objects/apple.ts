import { CONST } from '../const/const';
import { IGraphicsConstructor } from '../interfaces/graphics.interface';

export class Apple extends Phaser.GameObjects.Graphics {
  constructor(aParams: IGraphicsConstructor) {
    super(aParams.scene, aParams.options);
    this.x = aParams.options.x;
    this.y = aParams.options.y;
    this.fillStyle(0xFF0000, 0.8);
    this.fillRect(
      CONST.FIELD_SIZE,
      CONST.FIELD_SIZE,
      CONST.FIELD_SIZE,
      CONST.FIELD_SIZE
    );
    this.scene.add.existing(this);
    var ellipse = new Phaser.Geom.Ellipse(0, 0, 14, 5);
    var particles = this.scene.add.particles('flares');

    var emitter = particles.createEmitter({
      frame: { frames: [ 'red', 'green', 'blue' ], cycle: true },
      scale: { start: 0.08, end: 0 },
      blendMode: 'ADD',
      emitZone: { type: 'edge', source: ellipse, quantity: 48, yoyo: false }
  });
    emitter.startFollow(this,12,12);
  }

  /**
   * Randomly generate new apple position on the field
   * @param _rndX [Random X Position]
   * @param _rndY [Random Y Position]
   */
  public newApplePosition(_rndX: number, _rndY: number): void {
    this.x = _rndX;
    this.y = _rndY;
  }
}
