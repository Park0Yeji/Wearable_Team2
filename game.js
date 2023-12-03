let timeE = 0;
let linedistance = 20;
let lineLength = 0;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
let posx, posy;


let serial; // variable to hold an instance of the serialport library
let portName = '/dev/tty.usbmodem14401';
let inData; // for incoming serial data
var freqcc;

var notee;

function preload(){
    
    Do = loadImage("/Assets/do.png");
    Re = loadImage("/Assets/re.png");
    Mi = loadImage("/Assets/mi.png");
    Fa = loadImage("/Assets/fa.png");
    Sol= loadImage("/Assets/sol.png");
    La= loadImage("/Assets/la.png");
    Si= loadImage("/Assets/si.png");
    Doo= loadImage("/Assets/doo.png");

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
    obstaclesGroup = new Group();
    freqcc = [0, 261.625, 293.6648, 329.6276, 349.2284, 391.9954, 440, 493.8833, 523.251];
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
}

function draw(){
    background(0,0,0, 30);
    spwanCircle(inData);
    drawSprites();
    rectMode(CENTER);
    textSize(100);
    text(notee[inData], 100, 100);
    
    timeE++
    if(timeE < 300){
        rectMode(CENTER);
        text('Hello! Wating...', windowWidth/2, windowHeight/2);
    }
}

// function explosion(x, Height){
  
//     timeE++;
//     line(x, Height - linedistance -lineLength, x, Height -lineLength);
//     line(x + (linedistance+lineLength)*sin(TWO_PI/5), Height - (linedistance+lineLength)*cos(TWO_PI/5), x + lineLength*sin(TWO_PI/5) , Height - lineLength*cos(TWO_PI/5));
//     line(x - (linedistance+lineLength)*sin(TWO_PI/5), Height - (linedistance+lineLength)*cos(TWO_PI/5), x - lineLength*sin(TWO_PI/5) , Height - lineLength*cos(TWO_PI/5));
//     line(x + (linedistance+lineLength)*cos(PI/5), Height + (linedistance+lineLength)*sin(TWO_PI/5), x + lineLength*cos(PI/5) , Height + lineLength*sin(TWO_PI/5));
//     line(x - (linedistance+lineLength)*cos(PI/5), Height + (linedistance+lineLength)*sin(TWO_PI/5), x - lineLength*cos(PI/5) , Height + lineLength*sin(TWO_PI/5));
//     lineLength +=2;
//     if(timeE > 80){
//         explosionVisible = false;
//         timeE = 0;
//         lineLength = 0;
//     }
// }

function spwanCircle(num){
    if(num != 0){
        posx = random(windowWidth);
        posy = random(windowHeight);
        var obstacle = createSprite(windowWidth, windowHeight, 680,680);
        switch(num){
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
        obstacle.x = posx;
        obstacle.y = posy;
        console.log(num);
        
        // explosion(posx, posy); 
        obstacle.scale = 0.5;
        obstacle.lifetime = 300;
        obstaclesGroup.add(obstacle);
        Makesound(freqcc[num]);
    }
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