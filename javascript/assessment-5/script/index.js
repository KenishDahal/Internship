const main = document.getElementById("main");
let Con_Width = 500;
let Con_Height = 500;
let NO_BOXES = 6;
let BOX_WIDTH = 40;
let BOX_HEIGHT =40;
let BOX_TOP = 10;
let BOX_LEFT = 10;

let Inital_PositionX;
let Inital_PositionY;


const container = document.createElement("div");
container.setAttribute("class", "container");
container.style.width = Con_Width+"px";
container.style.height = Con_Height+"px";
main.appendChild(container);

// Create box
function createBox(x, y, boxNo){
        const boxes = document.createElement("div");
        // boxes.setAttribute("class","box")
        boxes.classList.add("box", `box${boxNo}`)
        container.appendChild(boxes);
        boxes.style.width= BOX_WIDTH+"px";
        boxes.style.height= BOX_HEIGHT+"px";
        boxes.style.top=  y+"px";
        boxes.style.left= x+"px";
}

function getRandomNumber(){
    return [Math.floor(Math.random() *(Con_Width-BOX_WIDTH-10) ), Math.floor(Math.random() * (Con_Height-BOX_HEIGHT))];
}

let box_Object = {};

function createBoxes(){
    for(let i=0; i<NO_BOXES; i++){
        [Inital_PositionX, Inital_PositionY] = getRandomNumber(); 
        box_Object[`box${i}`] = {
            Inital_PositionX,
            Inital_PositionY,
            DirectionX:1,
            DirectionY:1
        }
        createBox(Inital_PositionX,Inital_PositionY, i);
}
}
createBoxes();

setInterval( () =>{
for (let i = 0; i < NO_BOXES; i++) {
    let box = document.querySelector(`.box${i}`);

    function col(el){
        let a = el.getBoundingClientRect();
        for (let j = i+1; j < NO_BOXES; j++){
            let el2 = document.querySelector(`.box${j}`);
            let b = el2.getBoundingClientRect();
    
            return (a.x < (b.x+b.width)) && ((a.x +a.width)>b.x) 
            && (a.y<(b.y+b.height)) &&
            ((a.y +a.height)>b.y);
        }
        
    }
    // col(box);
    // console.log(col(box));

    if(col(box)){
        box_Object[`box${i}`].DirectionX = -1;  
        box_Object[`box${i}`].DirectionY = -1; 
    }


    box_Object[`box${i}`].Inital_PositionX += box_Object[`box${i}`].DirectionX *10;
    box_Object[`box${i}`].Inital_PositionY += box_Object[`box${i}`].DirectionY *10;
    
    box.style.top = box_Object[`box${i}`].Inital_PositionY+ "px";
    box.style.left = box_Object[`box${i}`].Inital_PositionX + "px";

    if(parseInt(box.style.left, 10)  >= (Con_Width-BOX_WIDTH-20) || parseInt(box.style.left, 10) <= 20){
        box_Object[`box${i}`].DirectionX *= -1;              
    }

    if(parseInt(box.style.top, 10) <= 15 || parseInt(box.style.top, 10) >= (Con_Height-BOX_HEIGHT-10) ){
        box_Object[`box${i}`].DirectionY *= -1
          }
       
}


},100)
