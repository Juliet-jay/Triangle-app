function calculator(){
  // #this is my logic
var a= parseInt(document.getElementById("a").value);
var b= parseInt(document.getElementById("b").value);
var c= parseInt(document.getElementById("c").value);

// #my business logic/
if(a===b && b===c && c===a){
         alert("equilateral Triangle");
}
else if(a===b && a + b > c || b===c && b + c > a || a===c && a + c >b){
        alert("isosceles triangle");
}
else if(a===b || b=== c || c=== a && a + c>d || b + c >a){
        alert("scalene triangle");
}
else if (a + b <= c || b + c <= a || a + c <= b){
        alert("not a triangle");
}
else (alert("input a valid integer"))

}
