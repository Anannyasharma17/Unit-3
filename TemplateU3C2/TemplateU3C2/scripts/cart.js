let arr = JSON.parse(localStorage.getItem("cartData")) || [];

console.log(arr);

function foodItems(){

    arr.map (function (items, index){

    var div = document.createElement("div");

    var img = document.createElement("img")
    img.setAttribute("src", items.image)

    var name = document.createElement("h3");
    name.textContent = items.name;

    var price = document.createElement("p")
    price.textContent = items.price

    var remove = document.createElement("button");
    remove.textContent = "Remove"
    remove.addEventListener("click", function (){
        arr.splice(index, 1);

        localStorage.setItem("cartData" , JSON.stringify(arr));
        window.location.href = "cart.html";
    })

    div.append(img, name, price, remove)

    document.querySelector("#cart").append(div);

    });
}


function price(){
    var reduce1 = arr.reduce(function(a, b){
        return (a + +b.price);
    }, 0)
    
    document.querySelector("h2").textContent = reduce1;
    
}

price();
foodItems();