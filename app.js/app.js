let elem = document.getElementById('title');

let myClass = document.getElementsByClassName("inner-div");

elem.innerHTML += " no shit this is great";

myClass[1].style.backgroundColor = "green";

let myRoot = document.getElementById("Root");

myRoot.innerHTML = "<ul><li>israel</li><li>usa</li><li>russha</li></ul>";

let frute = "malon";

let under = document.getElementById('under-div' );

under.innerHTML = "<ul>";
under.innerHTML += "<li>orange</li>";
under.innerHTML += "<li>mango</li>";
under.innerHTML += "<li>aplle</li>";
under.innerHTML += "<li>lemon</li>";
under.innerHTML += "<li>tomato</li>";
under.innerHTML += "<li>"+frute+"</li>";
under.innerHTML += "</ul>";


let myCars =["BMW","Mazda","Audi","Fiat"]

let myColor =["hotpink","red","blue","green"]

let outomoble = document.getElementsByClassName("trial");

trial.innerHTML = myCars;


// outomoble.innerHTML = "<ul>";
// for(let x=0;x<outomoble.length;x++){
//     outomoble.innerHTML +='<li class="trial">'+myCars[x]+'</li>'; 
    
// }
// outomoble.innerHTML += "<ul>";