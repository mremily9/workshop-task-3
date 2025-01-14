// let img0, img1, img2, img3, img4;
let imgs = [];
let sticks = [];
let alpha = 255;

function preload() {

  for(i = 0; i < 18; i++){
    imgs[i] = loadImage('images/img'+ i + '.png'); 
  }

  //load stickers
  // for(n = 0; n < 12; n++){
  //   sticks[n] = loadImage('images/sticker'+ n + '.png');
  // }

  sticks[0] = loadImage('images/sticker0.png');
  sticks[1] = loadImage('images/sticker1.png');
  sticks[2] = loadImage('images/sticker2.png');
  sticks[3] = loadImage('images/sticker3.png');
  sticks[4] = loadImage('images/sticker4.png');
  sticks[5] = loadImage('images/sticker5.png');
  sticks[6] = loadImage('images/sticker6.png');
  sticks[7] = loadImage('images/sticker7.png');
  sticks[8] = loadImage('images/sticker8.png');
  sticks[9] = loadImage('images/sticker9.png');
  sticks[10] = loadImage('images/sticker10.png');
  sticks[11] = loadImage('images/sticker11.png');


}

function setup() {
  createCanvas(600, 440);
  frameRate(1);
  // img.resize(300, 0);

  background(0);
  imageMode(CORNER);

  //top left
  image(imgs[int(random(0, 17))], 10, 10, width/2 - 20 , height/2 - 10);
  //top right
  image(imgs[int(random(0, 17))], width/2  , 10, width/2 - 20, height/2 - 10);
  //bottom left
  image(imgs[int(random(0, 17))], 10, height/2 + 10, width/2 - 20, height/2 - 20);
  //bottom right
  image(imgs[int(random(0, 17))], width/2 , height/2 + 10, width/2 - 20, height/2 - 20);

  //inital set up of stickers
  imageMode(CENTER);
  for(j = 0 ; j < random(1, 2); j++){
    scale = random(50, 120);
    image(sticks[int(random(0, 11))], random(0, width),  random(0, height), scale, scale);
  }
}

function draw() {
  //stickers
  filter(DILATE);
  imageMode(CENTER);
  for(j = 0 ; j < random(1, 2); j++){
    scale = random(50, 200);
    image(sticks[int(random(0, 11))], random(0, width),  random(0, height), scale, scale);
  }

  for(k = 0 ; k < random(1, 8); k++){
    let x = random(width);
    let y = random(height);
    let c = get(int(x), int(y));
  
    fill(c);
    noStroke();
    circle(x, y, random(20, 50));
  }


}
