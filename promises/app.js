function savetoDb (data,success,failure){
    let internetSpeed =Math.floor(Math.random()*10)+1;
    if (internetSpeed>4) {
        success();

    }else{
        //console.log("weak connection , data is not saved");
        failure();
    }
}
savetoDb("apna college",
    ()=>{
       console.log("success: your data is ,saved");
       savetoDb("hello world",
            ()=>{
               console.log("Success2: your data2 is saved");
               savetoDb("Shradha ",
                    ()=> {

                       console.log("success 3: your data3 is saved ");
                    },
                    ()=>{
                        console.log("failure2: your data is not saved");
                    }
                );

            },
            ()=>{
                console.log("failure3: your data is not saved");
            }
        );
   },
   ()=>{
       console.log("failure: weak connection ,data is not saved");
   }
); 