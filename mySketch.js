
let images=[]
let rs
let simplex

function preload() {
  cosmo= loadImage('blueRose.PNG');
	dtree= loadImage('cat.PNG');
	branch= loadImage('flower.PNG');
	ginko= loadImage('jelly.PNG');
	handup= loadImage('memeCat.PNG');
	inhand= loadImage('whiteRose.PNG');
	jelly= loadImage('jiji.PNG');
	opentree= loadImage('inkCat.PNG');
	shroom= loadImage('whiteLily.PNG');
	yshroom= loadImage('orangeLily.PNG');
	leaf= loadImage('pinkLily.PNG');
		}
		
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	simplex= new OpenSimplexNoise(Date.now())
	background('#F6F3F4');
	imageMode(CENTER)
	
	//hard_light is a pretty good alternative take, uncomment to try it
	//blendMode(HARD_LIGHT)
	
	images.push(cosmo, dtree, branch, branch,ginko, handup, inhand, jelly, opentree, shroom, yshroom, leaf);
	shuffle(images, true);

}

function draw() {
	let noOfImages= (width*height)/800
	for(let i=0; i<noOfImages; i++){
		let x= random(width)
		let y= random(height)
	let chooser=  Math.floor(map(noise(x/500, y/10), 0, 1, 0, images.length-1))
	let p= images[chooser]	
	push()	
	translate(x, y)
	let r = map(simplex.noise2D(x/400, y/500), -1, 1, 0, TAU)
	rotate(r)
	let sizer= map(dist(width/2, height/2, x, y), 0, height, 0.1, 1)
	image(p, 0, 0, p.width*sizer, p.height*sizer)
	pop()
	}
noLoop()
}