// function colorBlack(){
//     document.body.style.background="black";
//     document.querySelectorAll('h1').forEach(function(e){
//       e.style.color="White"
//     })
//     document.querySelectorAll(".anc").forEach(function(e){e.style.color = "white"})
//     document.querySelectorAll('p').forEach(function(e){e.style.color="white"})
//     document.querySelectorAll('h4').forEach(e=>e.style.color="white")
//     document.querySelectorAll('nav').forEach(e=>e.style.color="white")
//     document.querySelectorAll('a').forEach(e=>e.style.color="white")
//     document.querySelectorAll('svg').forEach(e=>e.style.color="white");
//     document.querySelectorAll('myButton').forEach(e=>{e.style.backgroundColor = "red";e.style.color="white"})
//     const button1 = document.getElementById('myButton');
//     button1.style.backgroundColor = "white";
//     button1.style.color = "black";
//     const button2 = document.getElementById('myBtn');
//     button2.style.backgroundColor = "white";
//     button2.style.color = "black";
//     let menubtn=document.querySelector(".menu")
//     menubtn.style.color = "white";
//     menubtn.style.backgroundColor="white";
// }
// function colorWhite(){
//     document.body.style.background="white";
//     document.getElementById('hh1').style.color="black";
//     document.getElementById('hhh1').style.color="black";
//     document.getElementById('pp1').style.color="black";
//     document.getElementById('hh4').style.color="black";
//     document.querySelectorAll('nav').forEach(e=>e.style.color="black")
//     document.querySelectorAll('a').forEach(e=>e.style.color="black")
//     document.querySelectorAll('svg').forEach(e=>e.style.color="black")
//     document.querySelectorAll('myButton').forEach(e=>{e.style.backgroundColor = "red";e.style.color="black"})
//     const button1 = document.getElementById('myBtn');
//     button.style.backgroundColor = "black";
//     button.style.color = "black";
//     let text = document.querySelectorAll('.cheff-p');
//     text[0].style.color = 'black'
//     text[1].style.color = 'black'
//     document.getElementsById('clock').style.color = "white"
// }
documnet.getElementsByClassName('btn.border-danger').style.color = "white";

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


