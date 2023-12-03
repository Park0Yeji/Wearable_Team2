#include <SoftPWM.h>
int trig = 9;
int echo = 8;
int sw = 2;
int sw2 = 4;
int motor1 = 10;
int motor2 = 3;
int motor3 = 6;
int motor4 = 5;
int trig2 = 12;
int echo2 = 13;


// int LED_g = 13;
// int LED_r = 4;
// int LED_y = 5;

void setup() {
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT); 
  pinMode(trig2, OUTPUT);
  pinMode(echo2, INPUT);
  pinMode(sw, INPUT); // INPUT_PULLUP for a pull-up resistor
  pinMode(sw2, INPUT);
  pinMode(motor1, OUTPUT);
  pinMode(motor2, OUTPUT);
  pinMode(motor3, OUTPUT);
  pinMode(motor4, OUTPUT);
  pinMode(A0, OUTPUT);
  pinMode(A1, OUTPUT);
  pinMode(A2, OUTPUT);
  pinMode(A3, OUTPUT);
  SoftPWMBegin();
  SoftPWMSet(A0, 0);
  SoftPWMSet(A1, 0);
  SoftPWMSet(A2, 0);
  SoftPWMSet(A3, 0);
  //

  SoftPWMSetFadeTime(A0, 1000, 1000);
  SoftPWMSetFadeTime(A1, 1000, 1000);
  SoftPWMSetFadeTime(A2, 1000, 1000);
  SoftPWMSetFadeTime(A3, 1000, 1000);
  //SoftPWMSetFadeTime(motor2, 1000, 1000);
  //pinMode(LED_g, OUTPUT);
  // pinMode(LED_r, OUTPUT);
  // pinMode(LED_y, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  float length, distance, length2, distance2;
  
  
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  

  length = pulseIn(echo, HIGH);
  distance = ((340 * length) / 10000) / 2;

  
  if (distance < 20) {
  
    if (digitalRead(sw) == 1)
    {
      // Serial.print(distance);
      // Serial.print("cm   ");
      Serial.println("1");
      //digitalWrite(LED_y, HIGH);
      // ////delay(1000);
      // digitalWrite(LED_y, LOW);
      analogWrite(motor1, 100);
      ////delay(1000);
    }
    else if (digitalRead(sw) == 0)
    {//digitalWrite(LED_y, LOW);
    analogWrite(motor1, 0);
    Serial.println("0");
    }
  }

  else 
    {analogWrite(motor1, 0);}



  if (distance < 30 && distance > 20) {
  
    if (digitalRead(sw) == 1)
    {
      // Serial.print(distance);
      // Serial.print("cm   ");
      Serial.println("2");
      // digitalWrite(LED_g, HIGH);
      // ////delay(1000);
      // digitalWrite(LED_g, LOW);
      analogWrite(motor2, 255);
      ////delay(1000);
      //SoftPWMSet(motor2, 100);
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_g, LOW);}

      {analogWrite(motor2, 0);
      //SoftPWMSet(motor2, 0);
      Serial.println("0");}
  }

  else
  {analogWrite(motor2, 0);
  //SoftPWMSet(motor2, 0);}


  if (distance < 45 && distance > 30) {
    if (digitalRead(sw) == 1)
    {
      // Serial.print(distance);
      // Serial.print("cm   ");
      Serial.println("3");
      // digitalWrite(LED_r, HIGH);
      // ////delay(1000);
      // digitalWrite(LED_r, LOW);
      analogWrite(motor3, 100);
      ////delay(1000);
    
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_r, LOW);}
    {analogWrite(motor3, 0);
    Serial.println("0");}
  }  
  
  else
  {analogWrite(motor3, 0);}


  if (distance > 45) {
    if (digitalRead(sw) == 1)
    {
      // Serial.print(distance);
      // Serial.print("cm   ");
      Serial.println("4");
      // digitalWrite(LED_r, HIGH);
      // //delay(1000);
      // digitalWrite(LED_r, LOW);
      analogWrite(motor4, 100);
      //delay(1000);
    
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_r, LOW);}
    {analogWrite(motor4, 0);
    Serial.println("0");}
  }  
  
  else
  {analogWrite(motor4, 0);}





  digitalWrite(trig2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig2, LOW);


  length2 = pulseIn(echo2, HIGH);
  distance2 = ((340 * length2) / 10000) / 2;
  
  
  if (distance2 < 10) {
  
    if (digitalRead(sw2) == 1)
    {
      // Serial.print(distance2);
      // Serial.print("cm   ");
      Serial.println("5");
      //digitalWrite(LED_y, HIGH);
      // //delay(1000);
      // digitalWrite(LED_y, LOW);
      SoftPWMSet(A0, 100);
      //delay(1000);
    }
    else if (digitalRead(sw) == 0){
    //digitalWrite(LED_y, LOW);
    SoftPWMSet(A0, 0);
    Serial.println("0");}
  }

  else 
    SoftPWMSet(A0, 0);



  if (distance2 < 20 && distance2 > 10) {
  
    if (digitalRead(sw2) == 1)
    {
      // Serial.print(distance2);
      // Serial.print("cm   ");
      Serial.println("6");
      // digitalWrite(LED_g, HIGH);
      // //delay(1000);
      // digitalWrite(LED_g, LOW);
      SoftPWMSet(A1, 100);
      //delay(1000);
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_g, LOW);}

      {SoftPWMSet(A1, 1); 
      Serial.println("0");}
  }

  else
  {SoftPWMSet(A1, 1);}


  if (distance2 < 35 && distance2 > 20) {
    if (digitalRead(sw2) == 1)
    {
      // Serial.print(distance2);
      // Serial.print("cm   ");
      Serial.println("7");
      // digitalWrite(LED_r, HIGH);
      // //delay(1000);
      // digitalWrite(LED_r, LOW);
      SoftPWMSet(A2, 100);
      //delay(1000);
    
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_r, LOW);}
    {SoftPWMSet(A2, 0);
    Serial.println("0");}
  }  
  
  else
  {SoftPWMSet(A2, 0);}


  if (distance2 > 35) {
    if (digitalRead(sw2) == 1)
    {
      // Serial.print(distance2);
      // Serial.print("cm   ");
      Serial.println("8");
      // digitalWrite(LED_r, HIGH);
      // //delay(1000);
      // digitalWrite(LED_r, LOW);
      SoftPWMSet(A3, 100);
      //delay(1000);
    
    }
    else if (digitalRead(sw) == 0)
    // {digitalWrite(LED_r, LOW);}
    {SoftPWMSet(A3, 0);
    Serial.println("0");}
  }  
  
  else
  {SoftPWMSet(A3, 0);}  
   
  }
  }



