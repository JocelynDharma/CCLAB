/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new AspenDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AspenDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    let armSwing = sin(frameCount * 0.08) * 0.5;
    let legSwing = sin(frameCount * 0.08) * 0.3;
    let bounce = sin(frameCount * 0.16) * 3;
    let headTilt = sin(frameCount * 0.08) * 0.12;
    let dancerX = map(mouseX, 0, width, -60, 60);

    translate(dancerX, bounce);
    //the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    // LEFT LEG
    noStroke();
    //Left leg
    push();
    translate(-10.5, 32);
    rotate(legSwing);
    fill(50, 180, 70);
    rect(-18, -4, 15, 40);
    pop();

    // RIGHT LEG
    push();
    translate(9, 32);
    rotate(-legSwing);
    fill(50, 180, 70);
    rect(0, -4, 18, 40);
    pop();

    // BODY
    fill(40, 100, 230);
    rect(-20, -10, 40, 42);

    // LEFT ARM
    push();
    translate(-20, -10);
    rotate(-armSwing);
    fill(255, 220, 80);
    rect(-18, 0, 18, 42);
    pop();
    // RIGHT ARM
    push();
    translate(20, -10);
    rotate(armSwing);
    fill(255, 220, 80);
    rect(0, 0, 18, 42);
    pop();

    // HEAD
    push();
    translate(0, -27);
    rotate(headTilt);
    fill(255, 220, 80);
    rect(-20, -21, 40, 35);
    pop();

    // LEFT EYE
    fill(0);
    ellipse(-9, -34, 4, 4);

    // RIGHT EYE
    ellipse(9, -34, 4, 4);

    // SMILE
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0, -27, 13, 8, 0, PI);
  }



}
/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/