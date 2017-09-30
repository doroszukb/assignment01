function setup() {
  createCanvas(800,600);
}

function draw() {
  
  background(183,183,183)
  
 //neck
  
  strokeWeight(2)
  stroke(82,97,118,180)

  line(387,280,387,230)
  line(395,280,395,230)
  line(403,280,403,230)
  
 //hair
  
  line(width/2-24,200,340,206)
  line(340,150,width/2-18,186)
  line(370,235,width/2-15,215)
  
  
 //head
  
  noStroke()
  fill(241,243,48)
  
  ellipse(width/2,200,75,75)
  
  
 //eyes
  
  fill(255,255,255)
  ellipse(width/2+8,192,23,23)
  
  noStroke()
  fill(82,97,118,235)
  ellipse(width/2+8,192,7,7)
  

  fill(200,200,200)
  ellipse(width/2-15,215,9,9)
  ellipse(width/2-24,200,7,7)
  ellipse(width/2-18,186,5,5)
  
  
 //leg
  
  fill(65,75,92)
  ellipse(387,384,55,55)
   

  //body
  
  fill(130,130,130)
  rect(350,280,74,104)
  
  
  //body rect
  
  fill(215,215,215)
  rect(350,300,74,8)

}