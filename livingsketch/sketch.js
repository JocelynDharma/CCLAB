let imgs = [];
let imageIndex = 0;

async function setup() {
  createCanvas(400, 400);

  let allPromises = [];

  for (let i = 1; i <= 4; i++) {
    let filename = "IMAGE/IMG_908" + (2 + i) + ".JPG";
    let onePromise = loadImage(filename);
    allPromises.push(onePromise);
  }

  imgs = await Promise.all(allPromises);
}

function draw() {
  background(220);

  imageIndex = floor(frameCount / 15) % imgs.length;

  image(imgs[imageIndex], 0, 0, 400, 400);
}

function mousePressed() {
  imageIndex++;
  if (imageIndex >= imgs.length) {
    imageIndex = 0;
  }
}
