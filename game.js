let y = [];
let y_v=0;
// let fallingSpeed;
let distance =0;
let fallingvisible= false;
let lineLength = 0;
let time = 0;
let explosionVisible = false;
let linedistance = 20;
let r = 170;
let song_flow = 0;
// let xLEt = 138;
let timeE = 0;
let N= 0;
let LetItSnowNote = [];
let bpm = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=1; i<31; i++){
    y[i] = 0;
  }

  LetItSnowNote = [784, 698.5, 659, 587, 523, 392, 523, 587, 523, 587, 523, 494, 392, 880, 784, 698.5, 659, 587, 988, 880, 784, 784, 698.5, 659, 659, 587, 523 ];
  
  // serial = new p5.SerialPort();
  // serial.on("data", serialEvent);
  // serial.open('/dev/cu.usbmodem14401');
}

function draw() {
  background(0,0,0, 70);
  fill(255);
  LetItSnow();
  LetItSnow2();
  song_flow ++;
  
  if(explosionVisible){
    timeE++;
    explosion();
  }
  
}


function keyPressed(){
  // fallingvisible = false;
  explosionVisible = true;
  // distance = y;
  Makesound();
  N=N+1;
  
  // r=50;
}

function Makesound(){
  let osc;
  osc = new p5.Oscillator();
  osc.freq(LetItSnowNote[N]);
  osc.amp(0.1);
  osc.start();
  
  osc.stop(1.5);
}

function explosion(){
  let x;
  let Height;
  if(N%4 == 0){
    x = windowWidth*4/5;
  }
  else{
    x = windowWidth*(N%4)/5;
  }
  Height = y[N];
  stroke(255);
  timeE++;

  line(x, Height - linedistance -lineLength, x, Height -lineLength);
  line(x + (linedistance+lineLength)*sin(TWO_PI/5), Height - (linedistance+lineLength)*cos(TWO_PI/5), x + lineLength*sin(TWO_PI/5) , Height - lineLength*cos(TWO_PI/5));
  line(x - (linedistance+lineLength)*sin(TWO_PI/5), Height - (linedistance+lineLength)*cos(TWO_PI/5), x - lineLength*sin(TWO_PI/5) , Height - lineLength*cos(TWO_PI/5));
  line(x + (linedistance+lineLength)*cos(PI/5), Height + (linedistance+lineLength)*sin(TWO_PI/5), x + lineLength*cos(PI/5) , Height + lineLength*sin(TWO_PI/5));
  line(x - (linedistance+lineLength)*cos(PI/5), Height + (linedistance+lineLength)*sin(TWO_PI/5), x - lineLength*cos(PI/5) , Height + lineLength*sin(TWO_PI/5));
  lineLength +=2;
  if(timeE > 80){
    explosionVisible = false;
    timeE = 0;
    lineLength = 0;
  }
}

function ready(x, Height, time){
  stroke(255);
  noFill();
  ellipse(x, Height, r, r);
  if(r>10){
    r= r -1;
  }
}

function LetItSnow(){
  if(song_flow>0){
    move_circle1(note('G+')/(8*bpm));
  }
  if(song_flow>160){
    move_circle2(note('F+')/(4*bpm));
  }
  if(song_flow>240){
    move_circle3(note('E+')/(bpm));
  }
  if(song_flow>260){
    move_circle4(note('D+')/(2*bpm));
  }
  if(song_flow>300){
    move_circle5(note('C+')/(2*bpm));
  }
  if(song_flow>340){
    move_circle6(note('G')/(2*bpm));
  }
  if(song_flow>380){
    move_circle7(note('C+')/(4*bpm));
  }
  if(song_flow>460){
    move_circle8(note('D+')/(2*bpm));
  }
  if(song_flow>500){
    move_circle9(note('C+')/(3*bpm));
  }
  if(song_flow>560){
    move_circle10(note('D+')/(bpm));
  }
  if(song_flow>580){
    move_circle11(note('C+')/(3*bpm));
  }
  if(song_flow>640){
    move_circle12(note('B')/(bpm));
  }
  if(song_flow>660){
    move_circle13(note('G')/(2*bpm));
  }
  if(song_flow>700){
    move_circle14(note('A+')/ (8*bpm));
  }
  if(song_flow>860){
    move_circle15(note('G+')/(2*bpm));
  }
  if(song_flow>900){
    move_circle16(note('F+')/(2*bpm));
  }
  if(song_flow>940){
    move_circle17(note('E+')/(2*bpm));
  }
  if(song_flow>980){
    move_circle18(note('D+')/(bpm));
  }
  if(song_flow>1000){
    move_circle19(note('B+')/(2*bpm));
  }
  if(song_flow>1040){
    move_circle20(note('A+')/(bpm));
  }
  if(song_flow>1060){
    move_circle21(note('G+')/(bpm));
  }
  if(song_flow>1080){
    move_circle22(note('G+')/(2*bpm));
  }
  if(song_flow>1120){
    move_circle23(note('F+')/(bpm));
  }
  if(song_flow>1140){
    move_circle24(note('E+')/(bpm));
  }
  if(song_flow>1160){
    move_circle25(note('E+')/(2*bpm));
  }
  if(song_flow>1200){
    move_circle26(note('D+')/(bpm));
  }
  if(song_flow>1220){
    move_circle27(note('C+')/(bpm));
  }
}

function LetItSnow2(){
  print(r);
  print(song_flow);
  if(song_flow<160){
    ready(windowWidth/5, note('G+'), 160);
  }
  else if(song_flow == 160){
    r = 90;
  }
  else if(song_flow<240){
    ready(windowWidth*2/5, note('F+'),(4*bpm));
  }
  else if(song_flow == 240){
    r = 30;
  } 
  else if(song_flow<260){
    ready(windowWidth*3/5, note('E+'),(bpm));
  }
  else if(song_flow == 260){
    r = 50;
  } 
  else if(song_flow<300){
    ready(windowWidth*4/5, note('D+'),(2*bpm));
  }
  else if(song_flow == 300){
    r = 50;
  } 
  else if(song_flow<340){
    ready(windowWidth*1/5, note('C+'),(2*bpm));
  }
  else if(song_flow == 340){
    r = 50;
  } 
  else if(song_flow<380){
    ready(windowWidth*2/5, note('G'),(2*bpm));
  }
  else if(song_flow == 380){
    r = 90;
  } 
  else if(song_flow<460){
    ready(windowWidth*3/5, note('C+'),(4*bpm));
  }
  else if(song_flow == 460){
    r = 50;
  } 
  else if(song_flow<500){
    ready(windowWidth*4/5, note('D+'),(2*bpm));
  }
  else if(song_flow == 500){
    r = 70;
  } 
  else if(song_flow<560){
    ready(windowWidth/5, note('C+'),(3*bpm));
  }
  else if(song_flow == 560){
    r = 30;
  } 
  else if(song_flow<580){
    ready(windowWidth*2/5, note('D+'),(bpm));
  }
  else if(song_flow == 580){
    r = 70;
  } 
  else if(song_flow<640){
    ready(windowWidth*3/5, note('C+'),(3*bpm));
  }
  else if(song_flow == 640){
    r = 30;
  } 
  else if(song_flow<660){
    ready(windowWidth*4/5, note('B'),(bpm));
  }
  else if(song_flow == 660){
    r = 50;
  } 
  else if(song_flow<700){
    ready(windowWidth/5, note('G'),(2*bpm));
  }
  else if(song_flow == 700){
    r = 170;
  } 
  else if(song_flow<860){
    ready(windowWidth*2/5, note('A+'), 160);
  }
  else if(song_flow == 860){
    r = 50;
  } 
  else if(song_flow<900){
    ready(windowWidth*3/5, note('G+'),(2*bpm));
  }
  else if(song_flow == 900){
    r = 50;
  } 
  else if(song_flow<940){
    ready(windowWidth*4/5, note('F+'),(2*bpm));
  }
  else if(song_flow == 940){
    r = 50;
  } 
  else if(song_flow<980){
    ready(windowWidth/5, note('E+'),(2*bpm));
  }
  else if(song_flow == 980){
    r = 30;
  } 
  else if(song_flow<1000){
    ready(windowWidth*2/5, note('D+'),(bpm));
  }
  else if(song_flow == 1000){
    r = 50;
  } 
  else if(song_flow<1040){
    ready(windowWidth*3/5, note('B+'),(2*bpm));
  }
  else if(song_flow == 1040){
    r = 30;
  } 
  else if(song_flow<1060){
    ready(windowWidth*4/5, note('A+'),(bpm));
  }
  else if(song_flow == 1060){
    r = 30;
  } 
  else if(song_flow<1080){
    ready(windowWidth/5, note('G+'),(bpm));
  }
  else if(song_flow == 1080){
    r = 50;
  } 
  else if(song_flow<1120){
    ready(windowWidth*2/5, note('G+'),(2*bpm));
  }
  else if(song_flow == 1120){
    r = 30;
  } 
  else if(song_flow<1140){
    ready(windowWidth*3/5, note('F+'),(bpm));
  }
  else if(song_flow == 1140){
    r = 30;
  } 
  else if(song_flow<1160){
    ready(windowWidth*4/5, note('E+'),(bpm));
  }
  else if(song_flow == 1160){
    r = 50;
  } 
  else if(song_flow<1200){
    ready(windowWidth/5, note('E+'),(2*bpm));
  }
  else if(song_flow == 1200){
    r = 30;
  } 
  else if(song_flow<1220){
    ready(windowWidth*2/5, note('D+'),(bpm));
  }
  else if(song_flow == 1220){
    r = 30;
  } 
  else if(song_flow<1240){
    ready(windowWidth*3/5, note('C+'),(bpm));
  }
  
}

function note(N){
  let nheight;
  let noteNum = 11;
  if(N == 'B+'){
    nheight = windowHeight/noteNum;
  }
  if(N == 'A+'){
    nheight = windowHeight*2/noteNum;
  }
  if(N == 'G+'){
    nheight = windowHeight*3/noteNum;
  }
  if(N == 'F+'){
    nheight = windowHeight*4/noteNum;
  }
  if(N == 'E+'){
    nheight = windowHeight*5/noteNum;
  }
  if(N == 'D+'){
    nheight = windowHeight*6/noteNum;
  }
  if(N == 'C+'){
    nheight = windowHeight*7/noteNum;
  }
  if(N == 'B'){
    nheight = windowHeight*8/noteNum;
  }
  if(N == 'A'){
    nheight = windowHeight*9/noteNum;
  }
  if(N == 'G'){
    nheight = windowHeight*10/noteNum;
  }
  return nheight;
}

function move_circle1(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[1],10,10);
  y[1] = y[1]+fallingSpeed;
}
function move_circle2(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[2],10,10);
  y[2] = y[2]+fallingSpeed;
}
function move_circle3(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[3],10,10);
  y[3] = y[3]+fallingSpeed;
}
function move_circle4(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[4],10,10);
  y[4] = y[4]+fallingSpeed;
}
function move_circle5(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[5],10,10);
  y[5] = y[5]+fallingSpeed;

}
function move_circle6(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[6],10,10);
  y[6] = y[6]+fallingSpeed;

}
function move_circle7(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[7],10,10);
  y[7] = y[7]+fallingSpeed;
}
function move_circle8(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[8],10,10);
  y[8] = y[8]+fallingSpeed;
}
function move_circle9(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[9],10,10);
  y[9] = y[9]+fallingSpeed;
}
function move_circle10(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[10],10,10);
  y[10] = y[10]+fallingSpeed;
}
function move_circle11(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[11],10,10);
  y[11] = y[11]+fallingSpeed;
}
function move_circle12(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[12],10,10);
  y[12] = y[12]+fallingSpeed;
}
function move_circle13(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[13],10,10);
  y[13] = y[13]+fallingSpeed;
}
function move_circle14(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[14],10,10);
  y[14] = y[14]+fallingSpeed;
}
function move_circle15(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[15],10,10);
  y[15] = y[15]+fallingSpeed;
}
function move_circle16(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[16],10,10);
  y[16] = y[16]+fallingSpeed;
}
function move_circle17(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[17],10,10);
  y[17] = y[17]+fallingSpeed;
}
function move_circle18(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[18],10,10);
  y[18] = y[18]+fallingSpeed;
}
function move_circle19(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[19],10,10);
  y[19] = y[19]+fallingSpeed;
}
function move_circle20(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[20],10,10);
  y[20] = y[20]+fallingSpeed;
}
function move_circle21(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[21],10,10);
  y[21] = y[21]+fallingSpeed;
}
function move_circle22(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[22],10,10);
  y[22] = y[22]+fallingSpeed;
}
function move_circle23(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[23],10,10);
  y[23] = y[23]+fallingSpeed;
}
function move_circle24(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[24],10,10);
  y[24] = y[24]+fallingSpeed;
}
function move_circle25(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[25],10,10);
  y[25] = y[25]+fallingSpeed;
}
function move_circle26(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[26],10,10);
  y[26] = y[26]+fallingSpeed;
}
function move_circle27(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*3/5,y[27],10,10);
  y[27] = y[27]+fallingSpeed;
}
function move_circle28(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*4/5,y[28],10,10);
  y[28] = y[28]+fallingSpeed;
}
function move_circle29(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth/5,y[29],10,10);
  y[29] = y[29]+fallingSpeed;
}
function move_circle30(fallingSpeed){
  fill(255);
  noStroke();
  ellipse(windowWidth*2/5,y[30],10,10);
  y[30] = y[30]+fallingSpeed;
}
