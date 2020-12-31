class stone {

constructor(x,y,r){

    var options={
density:1.2,
friction:1,
restitution:0,
isStatic:false
    }

this.x=x
this.y=y
this.r=r

this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);


}

display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}





}