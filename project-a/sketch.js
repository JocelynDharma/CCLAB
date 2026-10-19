let leftX = 150;
let rightX = 200;
let jumpY = 0;

function setup() {
    createCanvas(800, 500);
}
function draw() {
    //BACKGROUND: 
    // 1. Sunset Sky 
    let topColor = color(100, 140, 200);
    let middleColor = color(170, 145, 210);
    let pinkColor = color(220, 150, 200);
    let bottomColor = color(255, 185, 150);

    for (let y = 0; y < height; y++) {
        let c;

        if (y < height * 0.25) {
            c = lerpColor(topColor, middleColor,
                map(y, 0, height * 0.25, 0, 1));
        } else if (y < height * 0.5) {
            c = lerpColor(middleColor, pinkColor,
                map(y, height * 0.25, height * 0.5, 0, 1));
        } else {
            c = lerpColor(pinkColor, bottomColor,
                map(y, height * 0.5, height, 0, 1));
        }

        stroke(c);
        line(0, y, width, y);
    }

    //2. Sun
    noStroke();
    fill(255, 190, 120);
    circle(15, 15, 200);

    //Cloud: 
    //Cloud 1
    push()
    translate(sin(frameCount * 0.03) * 80, 0);
    noStroke();
    {
        fill(255, 255, 255);
        circle(200, 100, 50);
        circle(230, 100, 60);
        circle(260, 100, 50);
    }
    pop()

    //Cloud 2
    push()
    translate(sin(frameCount * 0.02) * 300, 0);
    noStroke();
    {
        fill(255, 255, 255);
        circle(380, 160, 25);
        circle(400, 160, 35);
        circle(420, 160, 25);
    }
    pop()
    //Cloud 3
    push()
    translate(-sin(frameCount * 0.015) * 200, 0);
    noStroke();
    {
        fill(255, 255, 255);
        circle(370, 250, 70);
        circle(400, 250, 90);
        circle(430, 250, 65);
    }
    pop()


    //3. Mountain
    noStroke();
    fill(221, 229, 244);

    beginShape();
    vertex(0, 370); //(https://p5js.org/reference/p5/vertex/)
    splineVertex(50, 360);
    splineVertex(100, 345);
    splineVertex(170, 315);
    splineVertex(220, 300);
    splineVertex(270, 315);
    splineVertex(330, 350);
    splineVertex(400, 370);
    vertex(400, 420);
    vertex(0, 420);
    endShape(CLOSE);

    beginShape();
    vertex(300, 370);
    splineVertex(350, 355);
    splineVertex(400, 340);
    splineVertex(470, 305);
    splineVertex(530, 290);
    splineVertex(590, 305);
    splineVertex(660, 345);
    splineVertex(800, 370);
    vertex(800, 420);
    vertex(300, 420);
    endShape(CLOSE);

    // 
    // Tree 1: (https://editor.p5js.org/mathura/sketches/S1cljfdvl)
    noStroke(); {
        fill(100, 65, 40);
        rect(95, 360, 12, 70);
        fill(50, 130, 70);
        ellipse(101, 350, 40, 40);
        ellipse(87, 360, 25, 25);
        ellipse(115, 360, 25, 25);

        //Tree 2: 
        fill(100, 65, 40);
        rect(245, 360, 12, 70);
        fill(50, 130, 70);
        ellipse(251, 350, 40, 50);
        ellipse(237, 360, 25, 35);
        ellipse(265, 360, 25, 35);

        //Tree 3:
        fill(100, 65, 40);
        rect(395, 360, 12, 70);
        fill(50, 130, 70);
        ellipse(401, 350, 40, 80);
        ellipse(387, 360, 25, 45);
        ellipse(415, 360, 25, 45);

        //Tree 4:
        fill(100, 65, 40);
        rect(600, 360, 12, 70);
        fill(50, 130, 70);
        ellipse(605, 350, 40, 80);
        ellipse(590, 360, 25, 65);
        ellipse(620, 360, 25, 65);
    }

    //4.ROAD 
    noStroke();
    fill(27, 35, 43);
    rect(0, 420, 800, 40);

    //5. ROAD LINE
    noStroke();
    fill(255);

    for (let x = 20; x < 800; x += 60) {
        rect(x, 433, 30, 4);
    }

    //6.RIVER
    noStroke();
    fill(135, 206, 235);
    rect(0, 450, 800, 70);

    //7.RIVER WAVY//(https://p5js.org/reference/p5/splineVertex/)
    noFill();
    stroke(0);
    strokeWeight(2);

    beginShape();
    splineVertex(540, 450);
    splineVertex(520, 460);
    splineVertex(550, 470);
    splineVertex(570, 480);
    splineVertex(540, 490);
    splineVertex(530, 500);
    endShape();

    beginShape();
    splineVertex(620, 450);
    splineVertex(600, 460);
    splineVertex(630, 470);
    splineVertex(650, 480);
    splineVertex(620, 490);
    splineVertex(600, 500);
    endShape();

    //   Bugsy: 
    push();
    if (key === '') {
        jumpY = +   100;
    } else {
        jumpY = 0;
    }
    let bugsyX = mouseX - 400;
    let bugsyY = mouseY - 400 + jumpY;
    translate(bugsyX, bugsyY);

    let wingScale = 1 + 0.2 * sin(frameCount * 0.08);

    stroke(0);
    strokeWeight(2);
    noFill();

    // L wing
    push();
    translate(350, 375);
    rotate(radians(-2));
    scale(wingScale, 1);
    translate(-350, -375);
    fill(70, 162, 218)
    beginShape();
    splineVertex(360, 350);
    splineVertex(315, 340);
    splineVertex(290, 350);
    splineVertex(285, 365);
    splineVertex(305, 375);
    splineVertex(285, 385);
    splineVertex(290, 400);
    splineVertex(315, 410);
    splineVertex(330, 400);
    endShape();
    pop();

    // R wing 
    push();
    translate(450, 375);
    rotate(radians(-2));
    scale(wingScale, 1);
    translate(-450, -375);
    fill(70, 162, 218)
    beginShape();
    splineVertex(437, 350);
    splineVertex(485, 340);
    splineVertex(510, 350);
    splineVertex(515, 365);
    splineVertex(495, 375);
    splineVertex(515, 385);
    splineVertex(510, 400);
    splineVertex(485, 410);
    splineVertex(470, 400);
    endShape();
    pop();

    // Bugsy Body
    fill(255, 170, 29);
    ellipse(400, 400, 140, 120);

    // Eyes
    fill(255);
    circle(380, 380, 18);
    circle(420, 380, 18);

    // Pupils
    fill(30, 40, 60);
    circle(382, 381, 9);
    circle(422, 381, 9);

    // small white eye
    fill(255);
    noStroke();
    circle(383, 378, 2);
    circle(423, 378, 3);

    // Mouth 
    stroke(0);
    strokeWeight(2);
    fill(240, 160, 170);
    arc(400, 410, 42, 30, 0, PI, CHORD);

    // Left arm
    line(334, 420, 300, 445);

    // Left fingers
    line(300, 445, 285, 440);
    line(300, 445, 290, 455);
    line(300, 445, 305, 460);

    // Right arm
    line(466, 420, 505, 470);

    // Right fingers
    line(505, 470, 490, 460);
    line(505, 470, 520, 458);
    line(505, 470, 505, 485);

    // Left foot
    line(370, 455, 360, 495);

    // Left feet move
    push();
    translate(360, 495);
    rotate(radians(sin(frameCount * 0.1) * 10));
    line(0, 0, -20, -5);
    pop();

    // Right foot
    line(430, 455, 415, 510);

    // Right feet move
    push();
    translate(415, 510);
    rotate(radians(sin(frameCount * 0.1) * 5));
    line(0, 0, -20, -5);
    pop();
}