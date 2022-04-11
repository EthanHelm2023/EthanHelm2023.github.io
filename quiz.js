var q1 = document.getElementById("q1");
var q1result = document.getElementById("q1result");
var s1 = document.getElementById("s1");


function checkq1() {
	if (q1.value == "Option 3"){
		q1result.innerHTML = "Correct";
	}
	
	else{
		q1result.innerHTML = "Wrong";
		
	}
	
}

s1.addEventListener("click", checkq1);

var q2 = document.getElementById("q1");
var q2result = document.getElementById("q1result");
var s2 = document.getElementById("s1");

function checkq2() {
	if (q2.value == "Option 3"){
		q2result.innerHTML = "Correct";
	}
	
	else{
		q2result.innerHTML = "Wrong";
		
	}
	
}

s2.addEventListener("click", checkq2);