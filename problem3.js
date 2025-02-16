// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(name){
    
    if(typeof name !== "string"){ return "Invalid Input" }
    let charDigit = false;
    for(i=0;i<name.length;i++){
        let char = name[i];
        //  console.log(char)
         if(!isNaN(char)  && char !== ""){
            charDigit = true;
            break;

         }
    }
    return charDigit;

}

const result = checkDigitsInName("gg");
console.log(result)

// console.log(isNaN(4))