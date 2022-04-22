var enteredPass;



function checkPass(){
	enteredPass = document.getElementById("password").value;
if (enteredPass == "password"){
	document.getElementById("access").innerHTML = "ACCESS GRANTED";
	document.getElementById("access").style.color = "green";
	window.location = "index.html";
}

	
	else{
		document.getElementById("access").innerHTML = "The password" + enteredPass + "was the wrong answer";
		document.getElementById("access").style.color = "red";
	}
}


document.getElementById("submit").addEventListener("click", checkPass);