class box extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image = loadImage("block.png")
        this.visibility = 255;
    }
    display(){
        if(this.body.speed<1){
            super.display()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
            pop()
        }
    }
}