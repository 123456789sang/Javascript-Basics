// function savetoDb(data) {
//     return  new Promise((resolve, reject) => {
    
//       let internetSpeed  = Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4) {
//            resolve(" success : data was saved");
//         } 
//         else {
//         reject("Failure : weak connection ");
//         }
//    }) ;
// }
// savetoDb("apnacollege")
// .then((result)=>{
//     console.log("data1 is saved. ");
//     console.log("result of promise :", result);
//     return savetoDb("hello world");
// })
// .then((result)=> {
//     console.log("data2 is saved .");
//     console.log("result of promise :", result);

//    return savetoDb("hello Dear ") ;
// })
// .then((result)=> {
//     console.log("data3 is saved");
//     console.log("result of promise :", result);

// })
// .catch((error)=> {
//     console.log("Promise was rejected ");
//     console.log("result of promise :", error);

// })

// apply promise to (color changer) call back hell


h1=document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
          
        },delay);
    });  
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("purple",1000);
})
.then(()=>{
    console.log("purple color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was completed");
    return changeColor("purple",1000);
});



// changeColor("red",  1000, () => {
//     changeColor("orange", 1000, ()=> {
//         changeColor("green", 1000, ()=> {
//             changeColor("purple", 1000, () => {
//                changeColor("yellow", 1000);
//            });
//         });
//     });
// });
