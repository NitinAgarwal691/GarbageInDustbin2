class Paper {
   constructor(x,y,r){
   var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
   }
   this.r=r;
   this.x=x;
   this.y=y;
   this.image = loadImage("paper.png");
   this.body=Matter.Bodies.circle(this.x,this.y,this.r,options);
   World.add(world,this.body);
   }
   display() {
   push();
   //rectMode(RADIUS);
   //fill("red");
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
   imageMode(CENTER);
   image(this.image, 0,0,this.r,this.r);
   //ellipse(this.body.position.x,this.body.position.y,39,39);
   pop();
   }
}