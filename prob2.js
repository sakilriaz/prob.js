function notification(email) {
    if (!email.includes("@")) {return"invalid email";

    }
    else {typeof email ==="string"
        const splitEmail = email.split('@');
        const userName = splitEmail[0];
        const domainName = splitEmail[1];
        return `${userName} sent  you and email from ${domainName}`;
        // return userName + " sent you an email from " + domainName;
        
    }
}

const result = notification('gias@gmail.com');
console.log(result)