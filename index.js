let a;
a=Math.PI;
let n;
document.getElementById("b1").onclick=function(){
    n=document.getElementById("i1").value;
   
    document.getElementById("p1").innerHTML= "area of circle = " +  2 * a * n + "cm2";
}