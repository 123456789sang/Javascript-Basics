

function savetoDb(data) {
    return  new Promise((resolve, reject) => {
    
      let internetSpeed  = Math.floor(Math.random()*10)+1;
        if (internetSpeed>4) {
           resolve(" success : data was saved")
        } 
        else {
        reject("Failure : weak connection ")
        }
   }) ;
}


// let request = savetoDb("apna college ");  // req = promise object
// request 
// .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=> {
//     console.log("promise was not resolved"); 
//     console.log(request);
// 
savetoDb("apna college ") 
.then(() => {
    console.log("promise was resolved");
 
})
.catch(()=> {
    console.log("promise was not resolved"); 
});