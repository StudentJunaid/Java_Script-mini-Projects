// let availablekeywords = [
//     'HTML',
//     'CSS',
//     'Easy Tutorials',
//     'Web Development Design',
//     'Java Script',
//     'Where to learn coading',
//     'Where to Learn web design',
//     'How to create website',
// ];

// const inputBox = document.getElementById("input-box");
// const resultBox = document.querySelector(".result-box");



// inputBox.onkeyup = function(){
//     let result = [];
//     let input = inputBox.value;
//     if(input.length){
//         result = availablekeywords.filter((keyword)=>{
//             // console.log(keyword)
//         return    keyword.toLowerCase().includes(input.toLowerCase());
//         })
//         console.log(result)
//     }
//     display(result)
//     if(!result.length){
//         resultBox.innerHTML = '';
//     }

// }


// function display(result){
//       const content = result.map((list)=>{
//   return  "<li onclick=showResult(this)>" + list + "</li>"
//       })
//      resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
// }

// function showResult(list){
//     inputBox.value = list.innerHTML;
//     resultBox.innerHTML = '';
// }



// 2nd method


let availablekeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web Development Design',
    'Java Script',
    'Where to learn coading',
    'Where to Learn web design',
    'How to create website',
];

const inputBox = document.getElementById("input-box");
const resultBox = document.querySelector(".result-box");

inputBox.onkeyup  = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword) =>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        })
        console.log(result)
    }
    display(result)
    if(!input.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    let content = result.map((list) =>{
       return '<li>' + list + '</li>'
    })

    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>'

}

resultBox.addEventListener('click',(e)=>{
    const item =  e.target
    inputBox.value = item.textContent
    resultBox.innerHTML = ''
})