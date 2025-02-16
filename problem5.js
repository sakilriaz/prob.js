function waitingTime(array,serial){
    if(!Array.isArray(array) || typeof serial !== 'number')
    {return "Invalid Input"}
    let totalTime = 0 ;
    for(let i=0; i<array.length; i++){
        // console.log(array[i])
     totalTime +=array[i];      
    }
    // console.log(totalTime)
    let averageTime = Math.round(totalTime/array.length);
    // console.log(averageTime)
    let remainingPerson = serial - 1 - array.length;
    // console.log(remainingPerson)
    let remainingTime = 0;
    if (remainingPerson>0){remainingTime = remainingPerson * averageTime;}
    // console.log(remainingTime)
    return remainingTime;

    
}
let result = waitingTime([ 3, 5, 7, 11, 6 ], 14);
console.log(result)