const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const createGrid = () => {
  const points = [];
  const count = 35;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = count <= 1 ? 0.5 : x / (count - 1);
      const v = count <= 1 ? 0.5 : y / (count - 1);
      const radius = Math.abs(random.gaussian() * 0.014);
      points.push({ position: [u, v], radius });
    }
  }
  return points;
};

const whitePinkSketch = () => {
  const margin = 260;

  const filteredPoints = createGrid().filter(({ position, radius }) => {
    return random.value() > 0.45;
  });

  return ({ context, width, height }) => {
    context.fillStyle = "pink";
    context.fillRect(0, 0, width, height);

    filteredPoints.forEach(({ position: [u, v], radius }) => {
      //creating the circles
      console.log(u, v);
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      console.log(`x:${x}, y:${y}, radius:${radius}`);
      context.arc(x, y, radius * width, 0, 2 * Math.PI, false);
      context.fillStyle = "white";
      context.lineWidth = 20;
      context.fill();
    });
  };
};

export default whitePinkSketch;
