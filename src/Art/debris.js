const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const createGrid = () => {
  const points = [];
  const count = 30;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = count <= 1 ? 0.5 : x / (count - 1);
      const v = count <= 1 ? 0.5 : y / (count - 1);
      points.push({ position: [u, v], radius: random.value() });
    }
  }
  return points;
};

const debrisSketch = () => {
  const margin = 260;

  const filteredPoints = createGrid().filter(({ position, radius }) => {
    return random.value() > 0.45;
  });

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    filteredPoints.forEach(({ position: [u, v], radius }) => {
      //creating the circles
      console.log(u, v);
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, radius * y * 4, 0, 2 * Math.PI, false);
      context.strokeStyle = "white";
      context.lineWidth = 20;
      context.stroke();
    });
  };
};

export default debrisSketch;
