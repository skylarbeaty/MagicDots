let angle = 0;
let index;
var dotsArray = [ dots1, dots2, dots3, dots4, dots5 ];
let countDots = 0;

function setup(){
    createCanvas(400, 400);
    index = floor(random(0, dotsArray.length - 0.001));
}

function draw(){
    background(255);
    let c = color(255,255,255,255);
    fill(c);

    // countDots++;
    // index = floor(countDots / 100);

    translate(width / 2, height / 2);
    dotsArray[index]();
}
function dots1(){//save first good looking one
    fill(255);
    let angleDelta = 0.1;
    let numThisRing = 10;
    for (var spacing = 20; spacing < 100; spacing += 10){
        numThisRing += 3;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            let d = map(sin(angle + a * 3), -1, 1, 1, 1.5);
            ellipse(cos(a) * spacing * d, sin(a) * spacing * d, 5, 5);
        }
    }
    angle += angleDelta;
}
function dots2(){
    fill(255);
    let angleDelta = 0.2;
    let numThisRing = 10;
    for (var spacing = 20; spacing < 150; spacing += 10){
        numThisRing += 4;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            let d = map(sin(angle + a * 8), -1, 1, 1, 1.15);
            let offA = map(spacing, 20, 150, 0, PI / 16);
            ellipse(cos(a - offA) * spacing * d, sin(a - offA) * spacing * d, 5, 5);
        }
    }
    angle -= angleDelta;
}
function dots3(){
    let c = color(255,255,255,255);
    fill(c);
    // translate(width / 2, height / 2);
    let angleDelta = 0.1;
    let numThisRing = 10;

    let offset = map(sin(angle))

    for (var spacing = 15; spacing < 100; spacing += 10){
        numThisRing += 3;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            let d1 = map(sin(angle + a * 2), -1, 1, 1, 1.5);
            let d2 = map(sin(angle + a * 4), -1, 1, 1, 1.5);
            let d = constrain(d1 * d2, 1, 1.5)
            // let alpha = map(spacing, 0, 20, 0, 255);
            // c = color(255,255,255,alpha);
            fill(c);
            ellipse(cos(a) * spacing * d, sin(a) * spacing * d, 5, 5);
        }
    }
    angle += angleDelta;
}
function dots4(){
    fill(255);
    let angleDelta = 0.2;
    let numThisRing = 10;
    count = 0;
    for (var spacing = 20; spacing < 150; spacing += 10){
        numThisRing += 4;
        count++;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            let d = map(sin(angle + a * 8 + count), -1, 1, 1, 1.15);
            let offA = map(spacing, 20, 150, 0, PI / 16);
            ellipse(cos(a + offA) * spacing * d, sin(a - offA) * spacing * d, 5, 5);
        }
    }
    angle -= angleDelta;
}
function dots5(){
    fill(color(255,0,127));
    let angleDelta = 0.2;
    let numThisRing = 10;
    count = 0;
    for (var spacing = 20; spacing < 150; spacing += 10){
        numThisRing += 4;
        count++;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            let d = map(sin(angle + a * 8), -1, 1, 1, 1.15);
            let offA = map(spacing, 20, 150, 0, PI / 16) + count;
            ellipse(cos(a - offA) * spacing * d, sin(a - offA) * spacing * d, 5, 5);
        }
    }
    angle -= angleDelta;
}

