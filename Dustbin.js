class Dustbin {
    constructor(x,y,width,height){
    var options={
     'isStatic':true
    }
    this.image=loadImage("dustbingreen.png");
    this.body=Matter.Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display() {
    push();
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    //fill("yellow");
    //rectMode(CENTER);
    //rect(this.body.position.x,this.body.position.y,1600,20);
    pop();
    }
 }