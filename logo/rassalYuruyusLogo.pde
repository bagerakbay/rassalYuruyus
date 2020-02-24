//based on https://processing.org/examples/brownian.html
// web version https://www.openprocessing.org/sketch/842383

int num = 10555;
int range = 20;

float[] ax = new float[num];
float[] ay = new float[num]; 


void setup() 
{
  size(600, 600);
  for (int i = 0; i < num; i++) {
    ax[i] = width/2;
    ay[i] = height/2;
  }
  frameRate(3000);
  strokeJoin(ROUND);

  fill(0);
  text("press any key to walk", 50, 50);
  stroke(255, 50);
  strokeWeight(2);

  noFill();
}

void draw() 
{
}

void keyReleased() {
  walk();
}
void walk() {

  background(51);

  for (int i = 0; i < num-1; i++) {
    ax[i+1] = ax[i]+ random(-range, range);
    ay[i+1] = ay[i]+ random(-range, range);

    ax[i+1] = constrain(ax[i+1], 0, width);
    ay[i+1] = constrain(ay[i+1], 0, height);
  }
  for (int i = 10; i < num-10; i++) {
    bezier(ax[i], ay[i], ax[i-10], ay[i-10], ax[i+10], ay[i+10], ax[i+1], ay[i+1]);
  }

  save(hour()+"-"+minute()+"-"+second()+"-"+millis()+".jpg");
}
