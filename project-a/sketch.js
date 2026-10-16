let leftX = 150;
let rightX = 200;
let sunRadius = 50;

function setup() {
    createCanvas(800, 500);
}

function draw() {
    // SUNSET BACKGROUND
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

    //Sun
    noStroke(); {
        fill(235, 94, 83)
        ellipse(0, 0, 255, 255)
    }
    //Cloud 1 
    noStroke(); {
        fill(255, 255, 255)
        circle(200, 100, 50)
        circle(230, 100, 60)
        circle(260, 100, 50)
    }
    //Cloud 2 
    noStroke(); {
        fill(255, 255, 255)
        circle(370, 100, 70)
        circle(400, 100, 90)
        circle(430, 100, 65)
    }

    //Grasses 1-55
    // GRASS 1
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 10 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 2
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 25 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 3
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 40 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 4
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.055 + frameCount * 0.01;
        let amp = 30;
        let x = 55 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 5
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 70 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 6
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 85 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 7
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 100 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 8
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.03 + frameCount * 0.01;
        let amp = 30;
        let x = 115 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 9
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.02 + frameCount * 0.01;
        let amp = 30;
        let x = 130 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 10
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.05 + frameCount * 0.01;
        let amp = 30;
        let x = 145 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }
    // GRASS 11
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 160 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 12
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 175 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 13
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 190 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 14
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 205 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 15
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 220 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 16
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 235 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 17
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 250 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 18
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.02 + frameCount * 0.01;
        let amp = 30;
        let x = 265 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 19
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.03 + frameCount * 0.01;
        let amp = 30;
        let x = 280 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 20
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 295 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }
    // GRASS 21
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.02;
        let amp = 30;
        let x = 310 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 22
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.015 + frameCount * 0.01;
        let amp = 30;
        let x = 325 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 23
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 340 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 24
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.03 + frameCount * 0.01;
        let amp = 30;
        let x = 355 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 25
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.28 + frameCount * 0.025;
        let amp = 30;
        let x = 370 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 26
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 385 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 27
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 400 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 28
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.02;
        let amp = 30;
        let x = 415 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 29
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 430 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 30
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 445 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }
    // GRASS 31
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 460 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 32
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 475 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 33
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.02 + frameCount * 0.21;
        let amp = 30;
        let x = 490 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 34
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 505 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 35
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.11 + frameCount * 0.02;
        let amp = 30;
        let x = 520 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 36
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 535 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 37
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 550 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 38
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 565 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 39
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.11 + frameCount * 0.01;
        let amp = 30;
        let x = 580 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 40
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 595 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }
    // GRASS 41
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.02 + frameCount * 0.31;
        let amp = 30;
        let x = 610 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 42
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 625 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 43
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 640 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 44
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 655 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 45
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.03 + frameCount * 0.21;
        let amp = 30;
        let x = 670 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 46
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 685 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 47
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 700 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 48
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 715 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 49
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 730 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 50
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 745 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 51
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 760 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 52
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 34;
        let x = 775 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 53
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.04 + frameCount * 0.03;
        let amp = 30;
        let x = 700 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 54
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.01 + frameCount * 0.01;
        let amp = 30;
        let x = 800 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // GRASS 55 (Last)
    for (let y = 600; y < height; y += 2) {
        let freq = y * 0.21 + frameCount * 0.11;
        let amp = 34;
        let x = 790 + sin(freq) * amp;

        noStroke();
        fill(40, 120, 50);
        circle(x, y, 5);
    }

    // Bugsy move with the mouse
    push();
    translate(mouseX - 400, mouseY - 400);

    let wingScale = 1 + 0.2 * sin(frameCount * 0.08);

    stroke(0);
    strokeWeight(2);
    noFill();

    // L wing movement
    push();
    translate(350, 375);
    rotate(radians(-2));
    scale(wingScale, 1);
    translate(-350, -375);

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

    // R wing movement
    push();
    translate(450, 375);
    rotate(radians(-2));
    scale(wingScale, 1);
    translate(-450, -375);

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
    ellipse(400, 400, 140, 120);

    // Eyes
    circle(380, 380, 10);
    circle(420, 380, 10);

    // Mouth
    arc(400, 395, 50, 45, 0, PI);

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
    rotate(radians(sin(frameCount * 0.1) * 5));
    line(0, 0, -20, -5);
    pop();

    // Right foot
    line(430, 455, 415, 510);

    // Right feet move
    push();
    translate(415, 510);
    rotate(radians(sin(frameCount * 0.1 + PI) * 5));
    line(0, 0, -20, -5);
    pop();

    pop();
}

