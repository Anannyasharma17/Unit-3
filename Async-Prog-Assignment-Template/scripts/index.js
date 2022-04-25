
var data;

async function getMovies (){

    let res = await fetch("http://www.omdbapi.com/?apikey=f3d5c71f&s=titanic");

    data = await res.json();

    pose(data.Search);
}

 getMovies();

 function pose(movies){
    document.getElementById("movies").innerHTML = "";

    movies.map (function (items){
    var div = document.createElement("div")

    var divleft = document.createElement("div")
    divleft.setAttribute("id", "left")
    
    var image =  document.createElement("img");
    image.setAttribute("src", items.Poster)

    var title = document.createElement("h3");
    title.textContent = items.Title

    var ratings = document.createElement("p");
    var num = Math.random()*10
    ratings.textContent =`${num.toFixed(1)} ★`;
    
    var type = document.createElement("p");
    type.textContent = items.Type

    var year = document.createElement("p");
    year.textContent = items.Year

    var divright = document.createElement("div")
    divright.setAttribute("id", "right")


    divleft.append(image);

    divright.append(title, ratings, type, year);

    div.append(divleft, divright);

    document.getElementById("movies").append(div);
   })

 }


var count = 0;

var arr = [
    "https://bit.ly/32UdEPI",
    "https://bit.ly/3IVh2sW",
    "https://bit.ly/34whZJe",
    "https://bit.ly/3J6MTXX",
    "https://bit.ly/3J0EhSn",
    "https://bit.ly/3op3rCy",
    "https://bit.ly/3olXS7P"
]

var x = setInterval(function () {

    var Image = document.querySelector("#image")
    Image.setAttribute("src", arr[count])
    count++;

    if (count == arr.length){
        count = 0;
    }

}, 2000)


// console.log(data.Search);

function sort(){
    var year = document.querySelector("#sort").value;
    console.log(year);

    if(year == "low"){
       data.Search.sort( function (a, b){
           return (+a.Year - +b.Year)
       });
    }

    if(year == "high"){
        data.Search.sort( function (a, b){
            return (+b.Year - +a.Year)
        });
     }
     pose(data.Search);

}
