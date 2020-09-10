const createGrid = () => {
  const points = [];
  const count = 10;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = count <= 1 ? 0.5 : x / (count - 1);
      const v = count <= 1 ? 0.5 : y / (count - 1);
      points.push([u, v]);
    }
  }
  return points;
};

const circlesSketch = () => {
  const points = createGrid();
  // console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      //creating the circles
      const x = u * width;
      const y = v * height;

      context.beginPath();
      context.arc(x, y, 100, 0, 2 * Math.PI, false);
      context.strokeStyle = "red";
      context.lineWidth = 40;
      context.stroke();
    });
  };
};

export default circlesSketch;
