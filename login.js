// to adding details of user-----------------
// function addDetails(){
    // let t = document.getElementById("user").value
    // let b = document.getElementById("pass").value
    // let data = {
    //     title: t,
    //     pass: b
    // }
//     data = JSON.stringify(data)        // converting from js to json
//     let xhr = new XMLHttpRequest();
//     xhr.open("post", "http://localhost:3000/details/", true);
//     xhr.setRequestHeader("content-type","application/json")
//     xhr.send(data);
//     xhr.onload = function(){
//         if(this.status == 201){
//             alert("You are logged in successfully . . . ")
//         }
//         alert("Successfully submitted . . .")
//     }
// }

function addDetails(event){
    let t = document.getElementById("user").value
    let b = document.getElementById("pass").value
    let data = {
        title: t,
        pass: b
    }
    data = JSON.stringify(data)
    event.preventdefault();
    fetch("http://localhost:3000/details",{
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }).then((response)=>{
        if(response==201){
            alert("Submitted successfully")
        }else{
            throw new Error(response.statusText)
        }
    }).catch((post)=>{
        alert(Error)
    })
}


