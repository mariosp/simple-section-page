

const numberValidation = (number)=>{
    const phoneReg = /^\d{10}$/;
    const testNumber = number;
    if(number.length === 13){ //with country prefix
        if(!(testNumber[0]=== "+")){ return false; }
        const withoutPrefix = testNumber.substring(3);
        if(!(withoutPrefix[0] == "2" || withoutPrefix[0] == "6")) { return false; }
        return phoneReg.test(parseInt(withoutPrefix));
    } else if(number.length === 10) { //without country prefix
        if(!(testNumber[0] == "2" || testNumber[0] == "6")) { console.log("not 2 or 6");return false; }
        return phoneReg.test(parseInt(testNumber));
    } else{
        return false;
    }
};

const validate = (values)=>{
    let errors = {};
    if(!values.number){
        errors.number = "Mobile number is required";
    } else if(!numberValidation(values.number)){
        errors.number = "Mobile format is invalid";
    }
    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
    } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)){
        errors.password = "Password should contain at least: a number, a capital letter, a symbol and a low case letter";
    }
    return errors;
};

export default validate;
