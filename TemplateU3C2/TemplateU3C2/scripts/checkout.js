

document.querySelector("form").addEventListener("submit", amount);

function amount(event){

    event.preventDefault();

    alert("Your order is accepted");

    setTimeout( function (){
        alert("Your order is being cooked")
    }, 3000);

    setTimeout( function (){
        alert("Your order is ready")
    }, 8000);

    setTimeout( function (){
        alert("Your order is out for delivery")
    }, 10000);

    setTimeout( function (){
        alert("Your order has been Delivered")
    }, 12000);

}

