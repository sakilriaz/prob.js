// Problem 02 : Notification Generator

function  sendNotification(email){
    if(!email.includes("@")){
         return "Invalid Email";
        // console.log("Invalid Email")
    }

    let splitEmail = email.split('@');
    // console.log(splitEmail)
    // `username` ও `domain name`
    // sent you an email from
    const username = splitEmail[0];
    const domainname = splitEmail[1];
    let newString = username + " sent you an email from " + domainname;
    // console.log(newString)
     return newString;

}
  let result = sendNotification("mugdho.ph@gmail.com")
   console.log(result)




