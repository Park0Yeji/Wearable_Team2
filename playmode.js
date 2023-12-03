var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var note;
var freqcc;

var notee;

let serial; // variable to hold an instance of the serialport library
let portName = '/dev/tty.usbmodem14401';
let inData; // for incoming serial data


function preload(){
  trex_running = loadAnimation("rabbit2.png","rabbit1.png","rabbit3.png", "rabbit1.png");
  
  groundImage = loadImage("ground.png");
  
  cloudImage = loadImage("carrot.png");
  
  Do = loadImage("/Assets/do_g.png");
  Re = loadImage("/Assets/re_g.png");
  Mi = loadImage("/Assets/mi_g.png");
  Fa = loadImage("/Assets/fa_g.png");
  Sol= loadImage("/Assets/sol_g.png");
  La= loadImage("Assets/la_g.png");
  Si= loadImage("Assets/si_g.png");
  Doo= loadImage("Assets/doo_g.png");

  notee = [ , "도", "레", "미", "파", "솔", "라", "시", "도"];
  
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  ground = createSprite(300,windowHeight - 40);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/8;
  ground.velocityX = -4;
  ground.scale = 0.3;

  trex = createSprite(100,50,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.3;

  invisibleGround = createSprite(200, windowHeight -56,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  note = [1, 1, 5, 5, 6, 6, 5, 4, 4, 3, 3, 2, 2, 1, 5, 5, 4, 4, 3, 3, 2, 5, 5, 4, 4, 3, 3, 2, 1, 1, 5, 5, 6, 6, 5, 4, 4, 3, 3, 2, 2, 1];
  freqcc = [0, 261.625, 293.6648, 329.6276, 349.2284, 391.9954, 440, 493.8833, 523.251];
  i = 0;
}

function draw() {
  background(0);
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, windowWidth*8/9 ,50);
  
  if(keyDown("space")) {
    trex.velocityY = -15;
  }

  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < width/2){
    ground.x = ground.width/8;
  }
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
  jump(inData);

  rectMode(CENTER);
  textSize(100);
  text(notee[inData], 100, 100);

}

function spawnClouds() {
  //write code here to spawn the clouds 
  if (frameCount % 60 === 0) {
    var cloud = createSprite(windowWidth,120,40,10);
    cloud.y = Math.round(random(120, windowHeight - 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.25;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 600;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(windowWidth, windowHeight-300 ,32, 450);
    obstacle.velocityX = -4;
    switch(note[i]) {
      case 1: obstacle.addImage(Do);
              break;
      case 2: obstacle.addImage(Re);
              break;
      case 3: obstacle.addImage(Mi);
              break;
      case 4: obstacle.addImage(Fa);
              break;
      case 5: obstacle.addImage(Sol);
              break;
      case 6: obstacle.addImage(La);
              break;
      case 7: obstacle.addImage(Si);
              break;
      case 8: obstacle.addImage(Doo);
              break;
      default: break;
    }
    i++;


    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1;
    obstacle.lifetime = 600;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


function jump(num){
  if(num == 1){
    trex.velocityY = -12;
  }
  else if(num == 2){
    trex.velocityY = -15;
  }
  else if(num == 3){
    trex.velocityY = -18;
  }
  else if(num == 4){
    trex.velocityY = -21;
  }
  else if(num == 5){
    trex.velocityY = -24;
  }
  else if(num == 6){
    trex.velocityY = -26;
  }
  else if(num == 7){
    trex.velocityY = -28;
  }
  else if(num == 8){
    trex.velocityY = -30;
  }
  else{
    return;
  }
  Makesound(freqcc[num]);
}

function Makesound(freqc){
  let osc;
  osc = new p5.Oscillator();
  osc.freq(freqc);
  osc.amp(0.1);
  osc.start();
  
  osc.stop(1.5);
}


function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readLine();
  // check to see that there's actually a string there:
  if (inString.length > 0 ) {
  // convert it to a number:
    inData = Number(inString);
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}
