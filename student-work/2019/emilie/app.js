function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getFile(){
	document.getElementById("upfile").click();
}

function sub(obj){
	var file = obj.value;
	var fileName = file.split("\\");
	document.getElementById("btn").innerHTML = fileName[fileName.length=1];
}