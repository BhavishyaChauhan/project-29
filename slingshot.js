class Chain{
    constructor(bodyA,pointB){
        var options={
            length: 8,
            stiffness: 0.6,
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB=pointB;
        this.chain1=Constraint.create(options);
        World.add(world, this.chain1);
    }
    fly(){
        this.chain1.bodyA=null;
    }
    
    display(){
        if(this.chain1.bodyA){
            var pos=this.chain1.bodyA.position;
            var pointB=this.pointB;
            stroke("white");
            strokeWeight(4)
            line(pos.x,pos.y,pointB.x,pointB.y);
        }
    }
}

