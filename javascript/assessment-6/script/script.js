window.addEventListener('load', function(){
let canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
canvas.width =1400;
canvas.height =900;
let enemies = [];
let finishGame = false ; 
let score = [0];

class InputHandler {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown',e => {
            if(( e.key === 'ArrowDown' || 
                 e.key === 'ArrowUp' ||
                 e.key === 'ArrowLeft' ||
                 e.key === 'ArrowRight')
                 && this.keys.indexOf(e.key) === -1){
              this.keys.push(e.key);
            }
            console.log(e.key, this.keys);
        });

        window.addEventListener('keyup',e => {
            if( e.key === 'ArrowDown' || 
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft'|| 
                e.key === 'ArrowRight'){
               this.keys.splice(this.keys.indexOf(e.key),1);
            }
            else if (e.key === 'Enter' && finishGame)  reloadGame();
            console.log(e.key, this.keys);
        })
    }
}

// Car starts here...
class Player{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;     
        this.image = document.getElementById("player-img") ;
        this.width = 150;
        this.height = 200;
        this.x = 130;
        this.y = this.gameHeight-this.height-100;
        this.speed = 0;
    }

      // Reload game
      reload(){
        this.x = 130;
        this.y = this.gameHeight-this.height-100;
    }

    draw(context){
        // context.fillStyle = "pink";
        // context.fillRect(this.x, this.y, this.width,this.height)
        context.drawImage(this.image, this.x, this.y,this.width,this.height);
    }

    update(input,enemies,player){
       this.x += this.speed ;

    //    Collision detection
    collisionDetection(enemies,player);
    
    //   Arrow direction for Car
       if(input.keys.indexOf('ArrowRight') > -1){
        this.speed = 35;
       } else if(input.keys.indexOf('ArrowLeft') > -1){
        this.speed = -35;
       }
       else{
        this.speed = 0;
       }

       if(this.x < 0 ) this.x = 0;
       if(this.x > this.gameWidth -  this.width ) this.x = this.gameWidth-this.width;
    }
     // this.x = x;
    // this.y = y;
}


/** takeCollisionDetection */
function collisionDetection (en,pl){
    
        en.forEach(enemy => {
            let dx = enemy.x - pl.x;
            let dy = enemy.y - pl.y;
            let distance = Math.sqrt(dx * dx + dy *dy);

            if(distance < enemy.width/2 + pl.width/2){
                finishGame = true;
            }
        })
    
}

// Road starts here
class Background{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;    
        this.image = document.getElementById("background-img");
        // this.width = 2400;
        // this.height = 500;
        this.x = 0;
        this.y = 0;
        this.speed = 12;
    }
    reload(){
        this.x = 0;
        this.y = 0;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y,this.gameWidth,this.gameHeight);
        context.drawImage(this.image, this.x, this.y-this.gameHeight,this.gameWidth,this.gameHeight);
    }

    update(){
        this.y += this.speed ;
        if(this.y > this.gameHeight-this.speed) this.y= 0 ;
     }
}

// Enemy starts here
let obstacle_no = [120,420,810,1150]


class Enemy{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;   
        let random_no = Math.floor(Math.random() * 3);
        this.x =  obstacle_no[random_no];
        // Math.random() * this.gameWidth * 1;;
        this.y = 0; 
        this.image = document.getElementById("enemy-img");
        this.width = 100;
        this.height = 200;
        this.speed = 9;
        this.removeEnemy = false;
        // this.frameInterval = 1000/this.speed;
        // this.frameTimer = 0;
        // this.enemyTimer = 0;
        // this.enemyInterval = 1000; 
    }
    draw(context){
    //     context.strokeStyle = "white";
    //     context.strokeRect(this.x,this.y,this.width,this.height);
    //     context.beginPath();
    //     context.arc(this.x+this.width/2,this.y + this.height/2,this.width/2,0,Math.PI *2);
    //    context.stroke();
    //    context.fillStyle = "red";
    //    context.fill();
        context.drawImage(this.image, this.x, this.y,this.width,this.height);
    }

    update(){
        this.y += this.speed ;
        if(this.y > this.gameHeight-this.height+200){
            score++;
            this.removeEnemy = true;
        }
     }
}    
// add enemy loop 
enemies.push(new Enemy(canvas.width, canvas.height));

function addEnemy(deltaTime){

     if(enemyTimer > enemyInterval){
            enemyTimer= 0;
            enemies.push(new Enemy(canvas.width, canvas.height));
            console.log(enemies);
        } else{
           enemyTimer += deltaTime;
        } 

     enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update();
        })
        enemies = enemies.filter(enemy => 
            !enemy.removeEnemy
        )
}

function pointCard(context){
    context.fillStyle ="white";
    context.font = "50px Regular"
    context.fillText("Score:"+score,1200,100);
    
   passFinishGame(context);

    }

// goes to pointCard Function --- // game over text
function passFinishGame(context){
    if(finishGame){
        let txt =  "Game Over:\nTotal score:\n Enter to restart 🚙";
        let lines = txt.split('\n');
        let lineheight = 54;
        // for (var i = 0; i<lines.length; i++){
        context.fillText(lines[1]+score,600,400 +(1*lineheight) )
        context.fillText(lines[0],600,400 +(0*lineheight) )
        context.fillText(lines[2],540,400 +(2.3*lineheight) )

        // }
}
}

function reloadGame(){
    player.reload();
    background.reload();
     enemies = [];
     finishGame = false ; 
     score = [0];   
    animate(0);  
}


let input = new InputHandler();
let player = new Player(canvas.width,canvas.height)
let background = new Background(canvas.width,canvas.height);

let lastTime = 0;
// this.frameInterval = 1000/this.speed;
// this.frameTimer = 0;
this.enemyTimer = 0;
this.enemyInterval = 500; 

function animate(timeStamp){
    let deltaTime = timeStamp -lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    background.draw(ctx);
    background.update();
    player.draw(ctx);
    player.update(input,enemies,player);
    addEnemy(deltaTime);
    pointCard(ctx);
    // enemy.draw(ctx);
    if(!finishGame){
        requestAnimationFrame(animate);
    }
}

animate(0);  

});