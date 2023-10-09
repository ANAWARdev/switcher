//var color="yellow";// 
//document.getElementById("bg").style.backgroundColor = color;//
// var doit-être un seul mot sans espace sionn il va le considère en tant que 3 variables//
let color= "yellow";
function setBgColor () {
    document.getElementById("bg").style.backgroundColor = color;
    document.getElementById("bgcolor").innerHTML = color;
    //à l'intérieur de HTML//

//setBgColor(); c'est cette fonction qui fait appel pour modifier ta page//

document.getElementById("bgcolor").style.color = color;
}
