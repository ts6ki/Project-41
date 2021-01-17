class Umbrella {
    constructor(x, y,radius) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.animation = loadImage("walking_1.png");
      this.body = Bodies.circle(this.x, this.y,this.radius, options);
     
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      imageMode(CENTER);
      image(this.animation, pos.x, pos.y, 300, 300);
      
    }
  }