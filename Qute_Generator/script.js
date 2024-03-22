const api_url = "https://api.quotable.io/random";

let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
let value = "";


async function getQutes(url){
     const response = await fetch(url);
     const  data = await response.json();
      console.log(data)  
    value = quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQutes(api_url);


function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${value}%20world`)
}

