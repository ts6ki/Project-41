class Drops {
    constructor(x, y,radius) {
      var options = {
          isStatic: false,
          'friction':0.1,
          'restitution':0
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.image = loadImage("raindrop.png");
      this.rain = Bodies.circle(this.x, this.y,this.radius, options);

  
      World.add(world, this.rain);
    }
    display(){
      var pos =this.rain.position;

      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 20, 20);

      if(pos.x > 900)
      {
        World.remove(world, this.rain);
      }

      //ellipseMode(CENTER);
      //ellipse(pos.x, pos.y, this.radius, this.radius);
      
    }
  }