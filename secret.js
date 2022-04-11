
function chackPass(){
if (document.getElementById("password").value == 12345 )
{
	document.getElementById("access").innerHTML = "ACCESS GRANTED";
	document.getElementById("access").style.color = "green";
}
}
	
	else{
		document.getElementById("access").innerHTML = "ACCESS DENIED";
		document.getElementById("access").style.color = "red";
	}
}


document.getElementById("submit").addEventListener = "click", checkPass;