class Slingshot{
    constructor(bodyA,bodyB){
        var Options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
        this.band=Matter.Constraint.create(Options)
        World.add(world,this.band);
    
    }
    display(){
        var x1y1=this.band.bodyA.position;
        var x2y2=this.band.bodyB.position;
        line(x1y1.x,x1y1.y,x2y2.x,x2y2.y);
    }
}