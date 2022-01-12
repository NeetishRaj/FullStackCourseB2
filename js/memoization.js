function addTo256(num){
    return num + 256;
}

addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276


















// function memoizedAddTo256(){
//     var cache = {};

//     return function(num){
//         if(num in cache){
//         console.log("cached value");
//         return cache[num]

//         }
//         else{
//         cache[num] = num + 256;
//         return cache[num];
//         }
//     }
// }

// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20); // Normal return
// memoizedFunc(20); // Cached return