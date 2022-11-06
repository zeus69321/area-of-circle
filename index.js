let a;
a=Math.PI;
let n;
let na;
na=window.prompt("enter your name :- ");
document.getElementById("b1").onclick=function(){
    n=document.getElementById("i1").value;
    document.getElementById("p1").innerHTML= "area of circle = " +  2 * a * n + "cm2";
    document.getElementById("h2").innerHTML="WELCOME " + na;
}
