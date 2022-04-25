
let arr = [

{imgUrl:"https://bit.ly/33Ig1FO", name:"VITAMIN C+E SUPER BRIGHT MOISTURIZER", price:"Rs.595.00"},
{imgUrl:"https://bit.ly/3h2LwNO", name:"NIGHT RESET RETINOL + CERAMIDE TREATMENT CREAM", price:"Rs.897.00"},
{imgUrl:"https://bit.ly/3p4ECMg", name:"CICA CALMING NIGHT GEL WITH NIACINAMIDE", price:"Rs.595.00"},
{imgUrl:"https://bit.ly/3v803QE", name:"WATERMELON SUPERGLOW MATTE MOISTURIZER", price:"Rs.595.00"},
{imgUrl:"https://bit.ly/3IdSziO", name:"72HR HYDRATION GEL + PROBIOTICS", price:"Rs.707.00"},
{imgUrl:"https://bit.ly/35ga2sj", name:"AVOCADO SMOOTHIE DAY CREAM SPF 20", price:"Rs.845.00"},
{imgUrl:"https://bit.ly/3sYip3N", name:"DAY & NIGHT CARE COMBO", price:"Rs.1,161.00"},
{imgUrl:"https://bit.ly/3h8RdtH", name:"HAND CREAM + SANITIZER, LAVENDER", price:"Rs.395.00"},
{imgUrl:"https://bit.ly/3BDsffs", name:"FOOT CREAM + DEODORIZER, MINT", price:"Rs.395.00"},
{imgUrl:"https://bit.ly/3v5lUbp", name:"HAND CREAM + SANITIZER, ROSE", price:"Rs.395.00"},
{imgUrl:"https://bit.ly/3BE23kT", name:"HAND CREAM + SANITIZER, MANDARIN", price:"Rs.395.00"},

];

let data = (parent) =>{

    arr.map ((items)=>{

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = items.imgUrl;

        let rating = Math.floor(Math.random() * (6 - 2) + 2);;
        let bag = "";
        for(let i=0; i<Math.floor(rating); i++){
            bag += "★";
        }

        let heart = document.createElement("p")
        heart.textContent = "♡";
        heart.style.display = "inline-block"
        heart.style.marginLeft = "60%"
        heart.style.fontSize = "25px"

        let name = document.createElement("h4");
        name.textContent = items.name;

        let price = document.createElement("h6");
        price.textContent = items.price;

        let btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.onclick=()=>{
            alert("Your item added successfully!")
        }

        div.append(img, bag, rating, heart, name, price, btn);

        parent.append(div);
    });
}

export default data;

