class Paper{
    constructor(x,y){
       var options = {
           isStatic:false,
           restitution:0.3,
           friction : 0.5,
           density : 1.2
       } 
       this.body = Bodies.rectangle(x,y,20,10,options);
       this.width = 30;
       this.height = 30
       World.add(world,this.body) 
    }
display(){
    var pos = this.body.position;
    fill("purple") 
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

}