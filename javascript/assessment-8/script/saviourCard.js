const card1 = {
    x:10,
    y:4,
    width:70,
    height:70
}
const card2 = {
    x:90,
    y:4,
    width:70,
    height:70
}


  
export default function savioursCard(context,saviourType) {
    context.fillStyle = "white";
    context.strokeStyle = "blue"
    context.fillRect(card1.x,card1.y,card1.width,card1.height)
    context.strokeRect(card1.x,card1.y,card1.width,card1.height)
    context.drawImage(
        saviourType[0],
        0,
        50,
        92,100,0,0,92,92
      );
     
    context.fillRect(card2.x,card2.y,card2.width,card2.height)
    context.strokeStyle = "gold"
    context.strokeRect(card2.x,card2.y,card2.width,card2.height)
    context.drawImage(
        saviourType[1],
        0,
        50,
        92,100,73,0,92,92
      );
    
    // context.drawImage(,0,0,194,194);
}
