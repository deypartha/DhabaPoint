const btn = document.getElementById("bbtn");
let body = document.getElementsByTagName("body")[0];
        btn.onclick = (event) => {
            event.preventDefault(); // Prevent default form submission
            window.alert("Thanks for rating us!");
            body.style.display = "none"; // Hide the body
        };