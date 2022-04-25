
async function getFood(){
    try{
        let res = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");

        let data = await res.json();
         console.log(data);

        dishesFood(data.meals);

    }
    catch(err){
        console.log(err);
    }
}

var arr = JSON.parse(localStorage.getItem("cartData")) || [];

function dishesFood(x){
    console.log(x)

   x.map (function (items){

    var div = document.createElement("div");

    var img = document.createElement("img")
    img.setAttribute("src", items.strMealThumb)


    var name = document.createElement("h3");
    name.textContent = items.strMeal;

    var price1 = Math.random() * (500 - 0) + 0;
    var price = price1.toFixed(2);

    var btn = document.createElement("button")
    btn.textContent = "Add to Cart";
    btn.addEventListener("click" , function (){
        var obj = new addToCart(items.strMealThumb, items.strMeal, price1.toFixed(2));

        arr.push(obj);

        localStorage.setItem("cartData" , JSON.stringify(arr));
    })

    div.append(img, name, price, btn);

    document.querySelector("#menu").append(div);



   })
}

function addToCart(img, name, price){

    this.image = img;
    this.name = name;
    this.price = price;
}

console.log(arr)


 getFood()