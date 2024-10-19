
let divf = document.querySelectorAll(".divfac")
function changeColor(ele){
    ele.style.boxShadow='10px 10px 40px 10px gray';  
}
function removeColor(ele){
    ele.style.boxShadow='none';
}

// let btn = document.querySelectorAll(".bbtn")
// function bbtnover(ele){
//     ele.style.boxShadow = "20px 20px 70px 5px red"
// }
// function bbtnout(ele){
//     ele.style.boxShadow = "none"
// }

function view_more(){
    document.querySelector(".para_btn").innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing elit";
}
function remove_this(){
    document.querySelector(".para_btn").innerHTML = ""
}


