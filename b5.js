function containsArr(arr,n){
    let newArr=[];
for(let i=0;i<arr.length;i+=n){
    let  putArr=arr.slice(i,i+num);
    newArr.push(putArr);
}
return newArr;
};
console.log(containsArr([1, 2, 3, 4, 5, 6, 7, 8],3));
console.log(containsArr([1, 2, 3, 4, 5, 6, 7, 8],2))