const getcolor = () => {
  // Hex code
  const rendomNumber = Math.floor(Math.random()* 16777215);
  const randomCode = "#" + rendomNumber.toString(16);
  console.log(rendomNumber, randomCode);
  document.body.style.backgroundColor = randomCode
  document.getElementById('color-code').innerText = randomCode;

  navigator.clipboard.writeText(randomCode)
};
 

// even call 
document.getElementById("btn").addEventListener("click", getcolor);


// inti call 
getcolor();






