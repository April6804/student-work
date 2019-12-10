function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getfile(){
	document.getElementById("upfile").click();

}




function sub(obj){
	var file = obj.value;
	var filename = file.split("//");
	document
}