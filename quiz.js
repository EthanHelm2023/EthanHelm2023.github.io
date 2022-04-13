var q1 = document.getElementById("q1");
var q2 = document.getElementById("q1");
var q3 = document.getElementById("q1");
var q4 = document.getElementById("q1");
var q5 = document.getElementById("q1");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;

function calculate() {
	if (q1.value == "Option 3"){
		q1result.innerHTML = "Correct";
	}
	
	if (q2.value == "Option 3"){
		result = result + 1;
	}
	
	if (q3.value == "Option 3"){
		result = result + 1;
	}
	
	if (q4.value == "Option 3"){
		result = result + 1;
	}
	
	if (q5.value == "Option 3"){
		result = result + 1;
	}
}

result.addEventListener("click", submit);


