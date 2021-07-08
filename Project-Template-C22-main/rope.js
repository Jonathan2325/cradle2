class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA = pointA;
        this.pointB=pointB;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB}
        }
       
        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }

   

display(){
    var point1 = this.body.bodyA.position;
    var point2 = this.body.bodyB.position;
     
    strokeWeight(2);

    var point1x = point1.x;
    var point1y =point1.y;
    var point2x = point2.x + this.pointA;
    var point2y = point2.y + this.pointB; 
    line(point1x,point1y,point2x,point2y);
    
}}
