function fun(){
    var a=new Date();
    document.getElementById("demo").innerHTML=
    "Display the Current Date:"+"<br>"+a;
}
function fun1(){
    var a=new Date();
    document.getElementById("demo").innerHTML=
    "Display the Current Date:"+"<br>"+a.toDateString();
}
function fun2(){
    var a=new Date();
    document.getElementById("demo").innerHTML=
    "Display the Current Date:"+"<br>"+a.toUTCString();
}
function fun3(){
    var a=new Date();
    document.getElementById("demo").innerHTML=
    "Display the Current Date:"+"<br>"+a.toISOString();
}

//Date formate
function call(){
    var a=document.getElementById("date").value;
    var b=new Date(a);
    document.getElementById("demo1").innerHTML=b;
}
function call1(){
    var a=document.getElementById("date").value;
    var b=Date.parse(a);
    document.getElementById("demo1").innerHTML=b;
}
//Get Methods

function get(){
    var a=document.getElementById("get").value;
    var b= new Date(a);
    document.getElementById("demo2").innerHTML=b.getFullYear();
}
function get1(){
    var a=document.getElementById("get").value;
    var b= new Date(a);
    document.getElementById("demo2").innerHTML=b.getMonth();
}
function get2(){
    var a=document.getElementById("get").value;
    var b= new Date(a);
    document.getElementById("demo2").innerHTML=b.getDate();
}

function get3(){
    var a=document.getElementById("get").value;
    var b= new Date(a);
    document.getElementById("demo2").innerHTML=b.getTime();
}
function get4(){
    var a= new Date();
    document.getElementById("demo3").innerHTML=a.getTime();
}
function get5(){
    var a= new Date();
    document.getElementById("demo3").innerHTML=a.getHours();
}
function get6(){
    var a= new Date();
    document.getElementById("demo3").innerHTML=a.getSeconds();
}
function get7(){
    var a= new Date();
    document.getElementById("demo3").innerHTML=a.getMinutes();
}
function get8(){
    var a= new Date();
    document.getElementById("demo3").innerHTML=a.getMilliseconds();
}
//setDateMethods
function set()
{
    var a=document.getElementById("set").value;
    var b=new Date();
    b.setHours(a);
    document.getElementById("demo4").innerHTML=b;
}
function set1()
{
    var a=document.getElementById("set").value;
    var b=new Date();
    b.setSeconds(a);
    document.getElementById("demo4").innerHTML=b;
}
function set2()
{
    var a=document.getElementById("set").value;
    var b=new Date();
    b.setMinutes(a);
    document.getElementById("demo4").innerHTML=b;
}
function set3()
{
    var a=document.getElementById("set").value;
    var b=new Date();
    b.setMilliseconds(a);
    document.getElementById("demo4").innerHTML=b;
}

