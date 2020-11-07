class Drop {
    constructor(x,y,radius) {
    this.body = Bodies.circle(x,y,radius);
    this.radius = radius;
    World.add(world, this.body);
    }

    display() {
    fill("blue");
    ellipse(this.body.position.x, this.body.position.y, this.radius);

    if (this.body.position.y > 800) {
     Matter.Body.setPosition(this.body, {x:this.body.position.x, y:random (-400,300)})
    }


    }

}