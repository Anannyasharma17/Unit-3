document.querySelector("form").addEventListener("submit" , data);

var arr =  JSON.parse(localStorage.getItem("user_data")) || [];

function data(event){
    event.preventDefault()
  var Email =  document.querySelector("#email").value;
  var pswrd =  document.querySelector("#pass").value;

    arr.map (function (item){

        if (item.email == Email && item.password == pswrd){
           
            document.querySelector("p").textContent = "Login Successful"
            document.querySelector("p").style.color = "green"
        }
        else{
            // document.querySelector("p").textContent = "Wrong details mentioned"
            document.querySelector("p").style.color = "red"
            alert("invalid Credentials")
        }
        // console.log(item)
        
    })
    // console.log(arr)
}