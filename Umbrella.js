class Umbrella {
    constructor(x, y,radius) {
      var options = {
          isStatic: false,
          'friction':0.1,
          'restitution':0
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.animation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png",);
      this.body = Bodies.circle(this.x, this.y,this.radius, options);
     
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push()
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop()
      
    }
  }