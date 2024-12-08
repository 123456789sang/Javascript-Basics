h1=document.querySelector("h1");

function changeColor(color,delay,nextColorchange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorchange();
    },delay);
   
}
changeColor("red",1000, ()=>{
    changeColor("orange",1000, ()=> {changeColor("green",1000)});
});
