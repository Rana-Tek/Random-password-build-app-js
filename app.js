//variables 

const form = document.getElementById("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const praf = document.querySelector(".praf");
const showPass = document.querySelector("show-pass");
const removeBtn = document.getElementById("reset");

//error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//success Message 
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = "form-control success";
}

//check length

function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

//check passwords
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
   

}

function checkPassword(input1){
    if(input1.value.search(/[a-z]/) < 0){
        showError(input1, "Password must contain at least one lowercase letter");
    }else if(input1.value.search(/[A-Z]/) < 0) {
        showError(input1, "Password must contain at least one uppercase letter");
    }else if(input1.value.search(/[0-9]/) < 0){
        showError(input1, "Password must contain at least one number");
    }else if(input1.value.search(/[!@#$%^&*]/) < 0){
        showError(input1, "Password must contain at least one symbols");
    }else{
        showSuccess(input1)
    }
}

//fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkLength(password, 7, 10);
    checkPasswordMatch(password,password2);
    checkPassword(password);
    password.value = "";
    password2.value = "";   
})

//password create area
removeBtn.addEventListener("click", ()=> {





function generatePassword() {
    const characters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "l",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const numbers = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "l",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
 const charactersUpper =  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const symbols = ["!@#$%^&*()_+~|}{[]:;?><,./-="];
let symbol = symbols.join("");
let createPassword = "";

for (let i = 0; i < 3; i++) {
    createPassword += numbers[Math.floor(Math.random() * numbers.length)];
  }
  for (let i = 0; i < 2; i++) {
    createPassword += symbol[Math.floor(Math.random() * symbol.length)];
  }
  for (let i = 0; i < 4; i++) {
    createPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  for (let i = 0; i < 1; i++) {
    createPassword += charactersUpper[Math.floor(Math.random() * charactersUpper.length)];
  }

  let pass = [...createPassword]
  pass.sort(() => Math.random() - 0.5);

  return pass.join("");
}

praf.innerText = generatePassword();

setTimeout(() => {
    showPass.innerText = "";

},  60000);

setTimeout(() => {
    praf.innerText = "";
}, 60000)





})
