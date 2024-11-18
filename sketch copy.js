let song;
let mFFT;

function preload() {
  song = loadSound("Marjorie W.C Sinclair - Daikirai (Live Action).mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  mFFT = new p5.FFT();
}

function draw() {
  background(220, 10);

  // must call this before getting energy
  mFFT.analyze();

  let energy0 = mFFT.getEnergy(1000, 5000);  
  let diam0 = map(energy0, 0, 255, 0, height / 2);
  ellipse(width / 2, height/4, diam0);

  let energy1 = mFFT.getEnergy(5000, 20000);
  let diam1 = map(energy1, 0, 255, 0, height / 2);
  ellipse(width / 2, 3 * height / 4, diam1);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}