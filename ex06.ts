class Ball {
    constructor(public ballType: string = 'regular'){}
  }
  
  var ball1 = new Ball();
  var ball2 = new Ball('super');
  
  console.log(ball1.ballType);
  console.log(ball2.ballType);