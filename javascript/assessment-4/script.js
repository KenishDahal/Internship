let Width = 50;
let Height = 50;

let Width2 = 50;
let Height2 = 50;

// for box-1 origin & direction
let firstOrigin1 = 0;
let direction1 = 1;

// for box-2 origin & direction
let firstOrigin2 = 0;
let direction2 = 1;

const main = document.getElementById("main");

// container
const container = document.createElement("div");
container.setAttribute("class", "container");
main.appendChild(container);

// 1st box
const box1 = document.createElement("div");
box1.setAttribute("class", "box1");
container.appendChild(box1);

box1.style.width = Width+"px";
box1.style.height = Height+"px";

box1.style.marginLeft = firstOrigin1+ "px";

// 2nd box
const box2 = document.createElement("div");
box2.setAttribute("class", "box2");
container.appendChild(box2);

box2.style.width = Width2+"px";
box2.style.height = Height2+"px";

box2.style.marginRight = firstOrigin2+ "px";


// box-1 setInterval
setInterval( () =>{
    firstOrigin1 += 10*direction1;
    box1.style.marginLeft = firstOrigin1+"px";

    if(firstOrigin1>=210 ){
        direction1 = -1;
        firstOrigin1 = firstOrigin1+ 10 * direction1;
        box1.style.marginLeft = firstOrigin1+"px" ;
}
else if(firstOrigin1<=-10){
    direction1=+1;
    firstOrigin1 =firstOrigin1+ 10 * direction1;
    box1.style.marginLeft = firstOrigin1+"px" ;
}

} ,100)

// box-2 setInterval
setInterval( () =>{
    firstOrigin2 += 10*direction2;
    box2.style.right = firstOrigin2+"px";

    if(firstOrigin2>=210 ){
        direction2 = -1;
        firstOrigin2 = firstOrigin2+ 10 * direction2;
        box2.style.right = firstOrigin2+"px" ;
}
else if(firstOrigin2<=-10){
    direction2=+1;
    firstOrigin2 =firstOrigin2+ 10 * direction2;
    box2.style.right = firstOrigin2+"px" ;
}

} ,100)


