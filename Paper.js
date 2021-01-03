class Paper{
    constructor(x,y,rad){
        var options = {
            isStatic: false,
            restitution: 0.03,
            friction: 1,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, rad,options);
        this.width = x;
        this.height = y;
        this.diameter = rad;
        World.add(world, this.body);  
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        circle(pos.x, pos.y, this.width, this.height);
    }
        
}