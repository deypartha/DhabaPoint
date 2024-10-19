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


// function addDetails(event){
//     let t = document.getElementById("user").value
//     let b = document.getElementById("pass").value
//     let data = {
//         title: t,
//         pass: b
//     }
//     data = JSON.stringify(data)
//     event.preventdefault();
//     fetch("http://localhost:3000/details",{
//         method: "post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:data
//     }).then((response)=>{
//         if(response==201){
//             alert("Submitted successfully")
//         }else{
//             throw new Error(response.statusText)
//         }
//     }).catch((post)=>{
//         alert(Error)
//     })
// }



// function addDetails(){
//     let n = document.getElementById("user").value
//     let p = document.getElementById("pass").value
//     let data = {
//         user : n,
//         pass : p
//     }
//     data = JSON.stringify(data)
//     fetch("http://localhost:3002/users",{
//         method: "POST",
//         headers : {"Content-Type" : "application/json"} ,
//         body : data 
//     }).then(response=>{
//         if(response.status===201){
//             alert("Login Successfully . . . ")
//         }else{
//             throw new Error(response.statusText)
//         }
//     }).catch(error=>{
//         alert(error)
//     })
// }


function checkLoginDetails() {
    let n = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    fetch("http://localhost:3002/users")
        .then(response => response.json())
        .then(users => {
            // Find user with matching username and password
            let user = users.find(user => user.user === n && user.pass === p);
            
            if(user) {
                // If user is found, login is successful, redirect to project.html
                alert("Login Successful . . . ");
                window.location.href = "project.html";
            } else {
                let error = document.getElementById("error");
                window.location.href = "registration.html";
                error.innerHTML = "Invalid Username or Password. Please try again.";
                // error.style.display = "block";
            }
        })
        .catch(error => {
            // Handle any errors from the fetch request
            console.error('Error:', error);
            alert("An error occurred while trying to log in. Please try again later.");
        });

    // Prevent default form submission
    return false;
}


// function addDetails(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "partha222004@gmail.com",
//         Password : "6C57FF81C9E6DEFF9D599D340E45164EF8B4",
//         To : document.getElementById("user").value,
//         From : "partha222004@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }