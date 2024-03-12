document.write("Hello world");
// alert("Learn javascript");
console.log("learn javascript");
var a=10;
var b=20;
document.write("<br>");
var c=a+b;
document.write(c+"<br>");

document.write(typeof c +"<br>");
function greetings(name){
    document.write("Good morning"+ name+"<br>");
}
var animal=["lion","tiger","elephant"];
animal.push("monkey");
animal.sort();
// animal.shift();
// animal.pop();
animal.splice(2,1);
for(var i=0;i<animal.length;i++){
    document.write(animal[i]+"<br>");
}
// var a =document.getElementById("one");
// a.innerHTML="Arun";
// // a.style.color="green";
// var b=document.getElementsByClassName("two")[1];
// // alert(b);
// b.style.color="blue";
// var c=document.getElementsByTagName("h1")[1];
// c.innerHTML="Martin James";
// var d=document.querySelectorAll(".two");
// d.innerHTML="alackal";
var e=document.querySelector("#one");
e.style.color="red";
var heading=document.createElement("h1");
function create(){
  heading.innerHTML="New Heading";
  document.body.appendChild(heading);
}
function remove(){
    heading.remove();
}
heading.addEventListener("mouseover",changeColor);
heading.addEventListener("mouseleave",change);
function changeColor(){
    heading.style.backgroundColor="red";
}
function change(){
    heading.style.backgroundColor="white";
}
var image=document.getElementById("third");
image.addEventListener("mouseover",over);
image.addEventListener("mouseout",out);
function over(){
    image.style.backgroundColor="green";
}
function out(){
    image.style.backgroundColor="white";
}
var e={
    name:"Martin",
    age:22,
    salary:20000,
    getSalary:function getSalary(){
        document.write("Name of the employee is "+this.name+" Age of the employee is "+this.age+" Salary of the employee is "+this.salary+"<br>");
    }
    
}
document.write(e.getSalary());