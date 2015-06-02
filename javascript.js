
	function doubleCheck() {
		var text1=document.getElementById("text1").value;
		if(text1===""){
			alert("Input could not be blank");
		} else if (text1 % 1 !== 0){
			alert("Input Should be a number");
		} else {
			answer = text1 + text1
			text1.value = answer;
		}
	}
	//my above function works fine when i comment my "checkDivision()" function using /* */ -- i cannot find my error -.- so the whole js file executes
	function checkDivision() {
		var number1=document.getElementById("number1").value;
		var number2=document.getElementById("number2").value;
		var number3=document.getElementById("number3").value;
		var number4=document.getElementById("number4").value;
		var number5=document.getElementById("number5").value;
		var number6=document.getElementById("number6").value;
		var number7=document.getElementById("number7").value;
		var number8=document.getElementById("number8").value;
		var division=document.getElementById("division").value;
		if(number1 % 1 === 0 && number2 % 1 === 0 && number3 % 1 === 0 && number4 % 1 === 0 && number5 % 1 === 0 && number6 % 1 === 0 && number7 % 1 === 0 && number8 % 1 === 0 && division >= 0){
			if ( number1 / division === 0 && number2 / division === 0 &&  number3 / division === 0 && number4 / division === 0 && \
		number5 / division === 0 && number6 / division === 0 && number7 / division === 0 && number8 / division === 0) {
				alert("Each number divided by division value gets a remainder of 0.");
			} else {
				alert("Not all of these numbers divided by Division value get a remainder of 0");
			}
		}
	}