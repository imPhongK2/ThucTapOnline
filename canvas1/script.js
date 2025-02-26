let canvas;
let ctx;
let flowField;
window.onload = function () {
  canvas = document.getElementById("canvas1");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();
};

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "Blue";
    this.#ctx.fillStyle = "pink";
    this.#ctx.fillRect(0, 0, width, height);
    this.#width = width;
    this.#height = height;
    this.x = 0;
    this.y = 0;
  }
  #draw(x, y) {
    const length = 300;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }
  animate() {
    this.#draw(this.x, this.y);
    this.x += 2;
    this.y += 0.5;
    requestAnimationFrame(this.animate.bind(this));
  }
}
