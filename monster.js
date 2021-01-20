class monster{
   
    constructor(x,y,r){
  
      var options={
  
      'restitution' :0.3,
      'friction' :0.3,
      'density' :0.3
  
      }
  
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x,y,r/2,options)
      World.add(world,this.body);
  
      this.image = loadImage("monster-01.png");
      
    }  
      
      display(){
       
      var paperpos = this.body.position;
      push();
      translate (paperpos.x , paperpos.y);
      imageMode(CENTER)
      
      scale (0.2);
      image (this.image,0,0,this.r,this.r);    
      pop();    
  
     
      
      }   
  
  
  }