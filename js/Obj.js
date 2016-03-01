class Obj{
  constructor(options){
    this.GridX = options.GridX;
    this.GridY = options.GridY;
    // this.state = state;//0 is a color0, 1 is color1
	this.H_BLOCKS = 13;
    this.H_DIMENTION = 256;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = 960;

  }




 //  convertPixel(counter) {
	//   var x = counter.GridX * (this.H_DIMENTION / this.H_BLOCKS);
	//   console.log("xis"+x);
	//   var gridPixel = {
	// 	  x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
	// 	  y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
	//   }
 //    return gridPixel;
	// }

	 clear(ctx,x,y) {
		 // console.log(this.H_DIMENTION / this.H_BLOCKS);
		 // // console.log(this.GridX);
		 // var x = this.GridX * (this.H_DIMENTION / this.H_BLOCKS);
		 // var y = (this.GridY) * (this.V_DIMENTION / this.V_BLOCKS);
		 // console.log("x is "+ x);
		 // console.log("y is " + y);

	  // ctx.clearRect(x,y, 3 * (this.H_DIMENTION / this.H_BLOCKS), 1+(this.V_DIMENTION / this.V_BLOCKS));
		 ctx.clearRect(x, y, 60, 50);
  }
}

module.exports = Obj;
