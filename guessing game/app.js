const max = prompt("enter the max number");
const random = Math.floor((Math.random()*max)+1);

let guess = prompt("enter the number");
while (true) {
   if (guess == "quit") {
      console.log("User quit");
   } 
   // if (guess==random) {
   //    console.log("you are right ! ,congrats!! random number was " ,random);
   //    break;
   // }
    
   // else {
   //    guess= prompt("your guess was wrong ,please try again ")
   // }
   else if (guess<random) {
      guess= prompt("hints: your guess was too short,please try again ");

   }
   else {
      guess= prompt("hints: your guess was too long,please try again ");
   }
 
}