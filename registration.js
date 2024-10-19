function submitDetails(){
    let n = document.getElementById("user").value   
    let p = document.getElementById("pass").value   
    let data = {
        user : n,
        pass : p
    }
    data = JSON.stringify(data)
    fetch("http://localhost:3002/users",{
        method: "POST",
        headers : {"Content-Type" : "application/json"} ,
        body : data 
    }).then(response=>{
        if(response.status===201){
            window.location.href = "project.html";
            alert("Registration Successful . . . ")
            
        }else{
            throw new Error(response.statusText)
        }
    }).catch(error=>{
        alert(error)
    })
}
