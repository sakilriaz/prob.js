// Problem 04 : Calculate Admission Final Score 
// ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। 
// Output :  এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false
// Challenge 📢:  যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"
// typeof name = string 
// typeof testScore= number ( testScore <= 50) 
// typeof schoolGrade = number ( schoolGrade <=30) 
// typeof  isFFamily = boolean
function  calculateFinalScore(input){
    if(typeof input !== "object"){return "Invalid Input" }
    if(typeof input.name!=="string"|| typeof input.testScore!=="number"|| typeof input.schoolGrade!=="number"|| typeof input.isFFamily!=='boolean'){ return "Invalid Input" }
    let score = input.testScore + input.schoolGrade;
    // console.log(score)
    // if(input.isFFamily === true ){
    //     score +=20;    
    // } 
    if(input.isFFamily  ){
        score +=20;    
    } 
    // return score; 
    if(score>=80){ return true}
    else{ return false}

}
let result =calculateFinalScore({ name:"rajib", testScore: 45,  schoolGrade: 25, isFFamily : false })
console.log(result) 