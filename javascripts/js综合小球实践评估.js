/*
//学习社区的一位学习者发布的可运行的代码，代码与评估步骤的网页要求一致，也就是和参考运行示例网页源代码使用一致的形式代码
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const bCount = document.querySelector("p");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let count = 0;

// function to generate random number

function random(min, max){
  let num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
//ADD OF SHAPE()
function Shape(x, y, velX, velY, exists){
  	this.x = x;
 	this.y = y;
 	this.velX = velX;
  	this.velY = velY;
  	this.exists = exists;
};

function Ball(x, y, velX, velY, exists, color, size){
  	Shape.call(this, x, y, velX, velY, exists);

 	this.color = color;
  	this.size = size;
};

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function(){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
};

Ball.prototype.update = function(){
	if((this.x + this.size) >= width){
		this.velX = -(this.velX);
	}

	if((this.x - this.size) <= 0){
		this.velX = -(this.velX);
	}

	if((this.y + this.size) >= height){
		this.velY = -(this.velY);
	}

	if((this.y - this.size) <= 0){
		this.velY = -(this.velY);
	}

	this.x += this.velX;
	this.y += this.velY;
};

Ball.prototype.collisionDetect = function(){
	for(let j = 0; j < balls.length; j++){
		if(!(this === balls[j])){
			let dx = this.x - balls[j].x;
			let dy = this.y - balls[j].y;
			let distance = Math.sqrt(dx * dx + dy * dy);

			if(distance < this.size + balls[j].size){
				balls[j].color = this.color = "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")";
			}
		}
	}
};

//let's add an EvilCircle() constructor heir of Shape() constructor
function EvilCircle(x, y, velX, velY, exists){
  	Shape.call(this, x, y, 20, 20, exists);
  	this.color = "white";
  	this.size = 10;
};

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function(){
	ctx.beginPath();
  	ctx.lineWidth = 3
	ctx.strokeStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.stroke();
};

EvilCircle.prototype.checkBounds = function(){
  	if((this.x + this.size) >= width){
    this.x -= this.size;
  	}

  	if((this.x - this.size) <= 0){
    this.x += this.size;
  	}

  	if((this.y + this.size) >= height){
    this.y -= this.size;
  	}

  	if((this.y - this.size) <= 0){
    this.y += this.size;
  	}
};

EvilCircle.prototype.collisionDetect = function(){
	for(let k = 0; k < balls.length; k++){
		if(balls[k].exists === true){
			let dx = this.x - balls[k].x;
			let dy = this.y - balls[k].y;
			let distance = Math.sqrt(dx * dx + dy * dy);

			if(distance < this.size + balls[k].size){
        	balls[k].exists = false;
       	 	count--;
        	bCount.textContent = "Ball Count : " + count;
			}
		}
	}
};

EvilCircle.prototype.setControls = function(){
  let _this = this;
  window.onkeydown = function(e) {
    if (e.keyCode === 65) { //a
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {//d
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {//w
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {//s
      _this.y += _this.velY;
    }
  }
};

let evil = new EvilCircle(random(0, width), random(0, height), true);
evil.setControls();

const balls = [];

function loop(){
	ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
	ctx.fillRect(0, 0, width, height);

	while(balls.length < 50){
		let size = random(10,20);
		let ball = new Ball(
			random(0 + size,width - size),
			random(0 + size,height - size),
			random(-7,7),
			random(-7,7),
      		true,
			"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")",
			size,
			);
		balls.push(ball);
    	count++;
    	bCount.textContent = "Ball Count : " + count;
	}

	for(let i = 0; i < balls.length; i++){
    if(balls[i].exists){
      	balls[i].draw();
  		balls[i].update();
  		balls[i].collisionDetect();
    }
	}
  	evil.draw();
  	evil.checkBounds();
  	evil.collisionDetect();

	requestAnimationFrame(loop);
}
loop();
*/


//网页端源代码
// 定义弹球计数变量

const para = document.querySelector('p');
let count = 0;

// 设置画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// 生成随机颜色值的函数
function randomColor() {
  const color = 'rgb(' +
                random(0, 255) + ',' +
                random(0, 255) + ',' +
                random(0, 255) + ')';
  return color;
}

// 定义 Shape 构造器
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

// 定义 Ball 构造器，继承自 Shape
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);

  this.color = color;
  this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// 定义彩球绘制函数
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// 定义彩球更新函数
Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// 定义碰撞检测函数
Ball.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size && balls[j].exists) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
};

// 定义 EvilCircle 构造器, 继承自 Shape
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);

  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// 定义 EvilCircle 绘制方法

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};

// 定义 EvilCircle 的边缘检测（checkBounds）方法

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if((this.y - this.size) <= 0) {
    this.y += this.size;
  }
};

// 定义 EvilCircle 控制设置（setControls）方法

EvilCircle.prototype.setControls = function() {
  window.onkeydown = e => {
    switch(e.key) {
      case 'a':
      case 'A':
      case 'ArrowLeft':
        this.x -= this.velX;
        break;
      case 'd':
      case 'D':
      case 'ArrowRight':
        this.x += this.velX;
        break;
      case 'w':
      case 'W':
      case 'ArrowUp':
        this.y -= this.velY;
        break;
      case 's':
      case 'S':
      case 'ArrowDown':
        this.y += this.velY;
        break;
    }
  };
};

// 定义 EvilCircle 冲突检测函数
EvilCircle.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
        para.textContent = '剩余彩球数：' + count;
      }
    }
  }
};


// 定义一个数组，生成并保存所有的球，
const balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size
  );
  balls.push(ball);
  count++;
  para.textContent = '剩余彩球数：' + count;
}

// 定义一个循环来不停地播放
let evil = new EvilCircle(random(0, width), random(0, height), true);
evil.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();


/*评估的参考答案
// Thanks to Renan Martineli for this version of the demo

// setup canvas

const para = document.querySelector('p');
let count = 0;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
};

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {

  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

}

class Ball extends Shape {

  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);

    this.color = color;
    this.size = size;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }


  collisionDetect() {
     for (const ball of balls) {
        if (!(this === ball) && ball.exists) {
           const dx = this.x - ball.x;
           const dy = this.y - ball.y;
           const distance = Math.sqrt(dx * dx + dy * dy);

           if (distance < this.size + ball.size) {
             ball.color = this.color = randomRGB();
           }
        }
     }
  }

}

class EvilCircle extends Shape {

  constructor(x, y) {
    super(x, y, 20, 20);

    this.color = "white";
    this.size = 10;

    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'a':
          this.x -= this.velX;
          break;
        case 'd':
          this.x += this.velX;
          break;
        case 'w':
          this.y -= this.velY;
          break;
        case 's':
          this.y += this.velY;
          break;
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }

  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          count--;
          para.textContent = 'Ball count: ' + count;
        }
      }
    }
  }

}

// define array to store balls and populate it

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
  count++;
  para.textContent = 'Ball count: ' + count;
}

const evilBall = new EvilCircle(random(0, width), random(0, height));

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
*/
 