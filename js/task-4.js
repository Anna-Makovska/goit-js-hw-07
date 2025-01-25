const form = document.querySelector(".login-form");
const email = document.querySelector("input[name = 'email']");
const password = document.querySelector("input[name = 'password']");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if(email.value === "" || password.value === "") {
        alert("All form fields must be filled in");
        return;
    
}; 
    const obj = {
        email: email.value,
        password: password.value,
        
    };
console.log(obj);
form.reset();
})



