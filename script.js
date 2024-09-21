function mini(){
var o=document.getElementById("text").value;
var u=document.getElementById("text2").value;
if(o == "" || u == "" ){
document.getElementById("text3").innerHTML = "PLEASE ENTER NUMBERS TO ASK YOU "
}
else if(o != "" && u != ""){
document.getElementById("text3").innerHTML = Number(o) - Number(u);
}
}