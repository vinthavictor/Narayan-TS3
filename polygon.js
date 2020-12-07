class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:0.1
        }
        this.r=r;
        this.polygon=Bodies.circle(x,y,r,options);
        this.image=loadImage("polygon.png");
        World.add(world,this.polygon);
    }
    display(){
        var pos=this.polygon.position;
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.r,this.r);
    }
}