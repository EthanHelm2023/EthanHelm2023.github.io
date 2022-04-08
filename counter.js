var count = 0;

function subOne() {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	
	if (count < 10) {
		document.getElementById("total").style.color = "BLACK";
	}
	
	if (count == 68) {
		document.getElementById("total").style.color = "NICE";
	}
	
}

function addOne() {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	
	if (count > 10) {
		document.getElementById("total").style.color = "RED";
	}
	
	if (count == 68) {
		document.getElementById("total").style.color = "NICE";
	}
	
}

function multiplyTen() {
	count = count * 10;
	document.getElementById("total").innerHTML = count;
}

function multiplyNegativeTen() {
	count = count * -10;
	document.getElementById("total").innerHTML = count;
}


document.getElementById("minus").addEventListener("click",subOne);
document.getElementById("plus").addEventListener("click",addOne);
document.getElementById("multiply10").addEventListener("click",multiplyTen);
document.getElementById("multiply-10").addEventListener("click",multiplyNegativeTen);