class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:1.5
        
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        stroke("red");
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);

    }
}