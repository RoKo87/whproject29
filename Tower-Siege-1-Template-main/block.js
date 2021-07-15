class Block{
    constructor(x, y, width, height) {
        var options = {   
          friction: 0.6,
          restitution: 1.57       
        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility = 0.5;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        

        if(this.body.speed < 8) {
          rectMode(CENTER);
          rect(pos.x,pos.y,this.width, this.height);
        } else {
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          rectMode(CENTER);
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
          pop();  
        }
      }
}
