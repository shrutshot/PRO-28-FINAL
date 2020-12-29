class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.9,
			friction:1,
			density:1.2
			}
		
		this.r=r;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(x, y, this.r/2, options);
		World.add(world, this.body);

	}

	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x,pos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2);
			pop();
			
	}

}