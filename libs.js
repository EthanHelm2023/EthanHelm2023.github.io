var input1 = document.getElementById("password1");
var input2 = document.getElementById("password2");
var input3 = document.getElementById("password3");
var input4 = document.getElementById("password4");
var input5 = document.getElementById("password5");
var input6 = document.getElementById("password6");
var input7 = document.getElementById("password7");
var input8 = document.getElementById("password8");
var input9 = document.getElementById("password9");
var input10 = document.getElementById("password10");


function checkPass(){

	document.getElementById("access").innerHTML = "Hi, my name is" + input1 + "My favourite food is" + input2 + "My favourite activity is to play" + input3 + "My favourite day of the week is" + input4 + "I do not like" + input5 + "I always like" + input6 + "My favourite place is" + input7 + "My favourite color is" + input8 + "My favourite animal is" + input9 + "Yesterday I saw a" + input10;		
		
}


document.getElementById("submit").addEventListener("click", checkPass);