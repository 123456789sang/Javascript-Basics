let arr=[1,2,3,4,5,6,2,3];
let n=2;
// arr.sort();
// arr.splice(1,2);
// arr.splice(2,5);
// arr.splice(1,0,3,4,5,6)
for (let i = 0; i < arr.length; i++) {
    if (arr[i]==n) {
       arr.splice(i,1) ;
    }
    
}
console.log(arr);