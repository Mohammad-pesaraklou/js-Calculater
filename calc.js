
// let displayBox = document.querySelector(".display");


// document.querySelector(".calculate").addEventListener("click", result)
// document.querySelector(".all-clear").addEventListener("click", pakKon)
// document.querySelector(".clear").addEventListener("click", pak)
// let list = document.querySelectorAll(".show");
// list.forEach(item =>{
//     item.addEventListener("click", display)
// })

// function display(i){
//     let w =i.target.innerText;
//     if(displayBox.innerText == 0){
//         return displayBox.innerText = w;
//      }
//     return  displayBox.innerHTML += w;
// }
// function pak(){
//     let t = displayBox.innerText;
//     if(t.length === 1){
//         displayBox.innerText = 0;
//     }else{
//         displayBox.innerText = t.substring(0, t.length -1)
//     }
// };
// function result(){
//     let y = displayBox.innerHTML;
//     displayBox.innerHTML = eval(y)
// }


// function pakKon(){
//     displayBox.innerHTML = 0;
// }


















let displayBox = document.querySelector(".display");
document.querySelector(".calculate").addEventListener("click", result)
document.querySelector(".all-clear").addEventListener("click", pakKon)
document.querySelector(".clear").addEventListener("click", pak)
let list = document.querySelectorAll(".show");

list.forEach( item =>{
    item.addEventListener("click", display)
})

function display(e){
let click = e.target.innerText;
if(displayBox.innerText == 0){
    return displayBox.innerText = click;
}
return displayBox.innerHTML += click;
}



function result(){
let rst = displayBox.innerHTML;
displayBox.innerHTML = eval(rst)
}

function pakKon(){
displayBox.innerHTML = 0;
}
function pak(){
    let p = displayBox.innerText;
    if(p.length === 1){
        displayBox.innerText = 0;
    }else{
        displayBox.innerText = p.substring(0, p.length -1)
    }
    }