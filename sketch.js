let sound
let mFFT;
let amp
let angle4=0
function preload(){
  sound=loadSound("Marjorie W.C Sinclair - Daikirai (Live Action).mp3")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
 angleMode(DEGREES)
 amp=new p5.Amplitude()
 mFFT = new p5.FFT();
 sound.connect(amp)
}
function mousePressed(){
  sound.loop()

}

function draw() {
  let level=amp.getLevel()
  mFFT.analyze();
  let energy1 = mFFT.getEnergy(5000, 20000);  
  angle1=lerp(angle4,energy1*2,0.07)
  let energy2 = mFFT.getEnergy(2000, 5000);  
  angle2=lerp(angle4,energy2*2,0.07)
  let energy3 = mFFT.getEnergy(200, 2000);  
  angle3=lerp(angle4,energy3*2,0.07)
  let energy4 = mFFT.getEnergy(20, 200);  
  angle4=lerp(angle4,energy4*2,0.07)
  background(211, 228, 220)
  let starSize=level*200
  star(width/2,height/2,starSize,height*0.4,angle1)
  star(width/2,height/2,starSize/2,height*0.4/2,angle2)
  star(width/2,height/2,starSize/4,height*0.4/4,angle3)
  star(width/2,height/2,starSize/8,height*0.4/8,angle4)
  print(level)
}

function star(x,y,s1,s2,angleOff){
  strokeWeight(5)
  noFill()

beginShape()
for(let i=0;i<10;i++){
  let angle=36*i+18+angleOff
  let vx,vy
  if(i%2==0){
    vx=cos(angle)*s2+x
    vy=sin(angle)*s2+y
  }else{
 vx=cos(angle)*s1+x
 vy=sin(angle)*s1+y
}
vertex(vx,vy)
}
endShape(CLOSE)
noFill()
stroke(83, 68, 90)
ellipse(x,y,s1*2)
ellipse(x,y,s2*2)
stroke(214, 116, 145)
}
// 211, 228, 220
// 214, 116, 145
// rgb(186, 186, 186)
// rgb(83, 68, 90)
// rgb(98, 51, 59)