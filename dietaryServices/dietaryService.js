let employee = true;
let enrolledMemeber = true;
let subscriber = true;
let access;

if(employee){
    access = "You have Dietary Services"
}else if(enrolledMemeber){
access = "You have dietary services and one on one interaction with dietician"
}else if(subscriber){
    access = "Partial dietary services"
}else {
    access = "Enroll or subscribe"
}

console.log("Your access is",access);