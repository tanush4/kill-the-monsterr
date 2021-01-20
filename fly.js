class fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }

        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    attach(body){
        this.fly.bodyA = body;
    }
    
    fly(){
        this.fly.bodyA = null;
    }

    display(){
        
        
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0)
            
            
              line(pointA.x, pointA.y, pointB.x, pointB.y);        
             
           
            
            pop();
        
    }
    
}