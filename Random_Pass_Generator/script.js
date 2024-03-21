const passwordBox = document.querySelector("#Password");
const index = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()?[]{}"

const allChar = upperCase + lowerCase + number + symbol;

function creatPassword(){
  let pass = "";
  pass += upperCase[Math.floor(Math.random()* upperCase.length)]
  pass += lowerCase[Math.floor(Math.random()* lowerCase.length)]
  pass += number[Math.floor(Math.random()* number.length)]
  pass += symbol[Math.floor(Math.random()* symbol.length)]

  while(index > pass.length){
    pass += allChar[Math.floor(Math.random()* allChar.length)]
  }
  passwordBox.value = pass;
}


function copyPass(){
  passwordBox.select();
  document.execCommand("copy")
}

