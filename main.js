//;

document.getElementById("hello1").innerHTML = "red";


function changeText() {
	document.getElementById("hello1").innerHTML = "It works!";
}
	
changeText();

function potato() {
	document.getElementById("hello1").innerHTML = "red";
}

changeText();
potato;

//; 

function red() {
	document.getElementById("hello1").innerHTML = "red";
}

document.getElementById("button1").addEventListener("click",red);

function blue() {
	document.getElementById("hello1").innerHTML = "blue";
}

document.getElementById("button2").addEventListener("click",blue);


function green() {
	document.getElementById("hello1").innerHTML = "green";
}

document.getElementById("button3").addEventListener("click",green);

function yellow() {
	document.getElementById("hello1").innerHTML = "yellow";
}

document.getElementById("button4").addEventListener("click",yellow);

function purple() {
	document.getElementById("hello1").innerHTML = "purple";
}

document.getElementById("button5").addEventListener("click",purple);


function changeRed() {
	document.getElementById("hello1").style.backgroundColor = "Red"
}

document.getElementById("button2").addEventListener("click",changeRed);
