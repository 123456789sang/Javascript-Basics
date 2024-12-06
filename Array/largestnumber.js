let arr=[1,3,5,7,8,9,12,14,23];
let largest =0;
 
for (let i=0;i<arr.length;i++) {
    if (arr[i]>largest) {
        largest=arr[i];
    }
}
console.log(largest);