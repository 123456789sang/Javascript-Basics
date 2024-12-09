function savetoDb(data) {
    return  new Promise((resolve, reject) => {
    
      let internetSpeed  = Math.floor(Math.random()*10)+1;
        if (internetSpeed>4) {
           resolve(" success : data was saved");
        } 
        else {
        reject("Failure : weak connection ");
        }
   }) ;
}
savetoDb("apnacollege")
.then(()=>{
    console.log("data1 is saved. ");
    return savetoDb("hello world");
})
.then(()=> {
    console.log("data2 is saved .");
   return savetoDb("hello Dear ") ;
})
.then(()=> {
    console.log("data3 is saved");
})
.catch(()=> {
    console.log("Promise was rejected ");
})