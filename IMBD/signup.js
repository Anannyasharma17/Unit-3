document.querySelector("form").addEventListener("submit" , data);

var arr =  JSON.parse(localStorage.getItem("user_data")) || [];


function data(event){
    event.preventDefault();
   
    var name = document.querySelector("#one").value;
    var contact = document.querySelector("#two").value;
    var email = document.querySelector("#three").value;
    var password = document.querySelector("#four").value;

    if (name == ""){
        document.querySelector("#wrong1").textContent = "Please enter correct name"
    }
    
    if (contact == ""){
        document.querySelector("#wrong2").textContent = "Please enter correct contact"
    }
    
    if (email == ""){
        document.querySelector("#wrong3").textContent = "Please enter correct email"
    }
    
    if (password == ""){
        document.querySelector("#wrong4").textContent = "Please enter correct password"
    }
    
    else{
        var obj = new details(name, contact, email, password);

        arr.push(obj);
    
        localStorage.setItem("user_data", JSON.stringify(arr));    

    }

}

function details(name, contact, email, password) {
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password = password;
}


