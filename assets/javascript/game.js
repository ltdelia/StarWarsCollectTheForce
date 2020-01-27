$(document).ready (function(){

	//-----------------------------
	// GLOBALS
	//-----------------------------
	
	// Character Values at start -- these are placeholders
	let charValue = [];
	let reyValue = 0;
	let finnValue = 0;
	let poeValue = 0;
	let bbValue = 0;
	let matchNumber = 0;

	// Game Counters
	let winCounter = 0;
	let lossCounter = 0;
	let totalScore = 0;

	init();

	//-----------------------------
	// METHODS
	//-----------------------------
	
	function init(){
		for (var i = 1; i <= 12; i++){
			charValue.push(i);
		}
		shuffle(charValue);
		assignCharValues();
		matchNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
		//Change HTML to reflect round conditions
		document.getElementById("matchNumber").innerHTML = matchNumber;
		document.getElementById("winCounter").innerHTML = winCounter;
		document.getElementById("lossCounter").innerHTML = lossCounter;
		document.getElementById("totalScore").innerHTML = totalScore;	
	}
	
	// Shuffle array values in random order
	function shuffle(array){
		let currentIndex = charValue.length, tempValue, randIndex;
		while(0 !== currentIndex) {
			randIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			tempValue = charValue[currentIndex];
			charValue[currentIndex] = charValue[randIndex];
			charValue[randIndex] = tempValue;
		}
		return charValue;
	}

	// Assign each character a random value from the array
	function assignCharValues(){
		reyValue = charValue[0];
		finnValue = charValue[1];
		poeValue = charValue[2];
		bbValue = charValue[3];
	}

	// Reset counters and values
	function resetGame(){
		totalScore = 0;
		document.getElementById("totalScore").innerHTML = totalScore;
		matchNumber=Math.floor(Math.random()*(120-19+1) + 19);
		document.getElementById("matchNumber").innerHTML = matchNumber;
		shuffle(charValue);
		assignCharValues();
	}

	// conditional for matching or exceeding matchNumber
	function roundClear(){
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!")
			winCounter = winCounter + 1;
			document.getElementById("winCounter").innerHTML = winCounter;
			resetGame();
		} else if(totalScore  > matchNumber){
			alert("The force is too strong. You've lost...")
			lossCounter = lossCounter + 1; 
			document.getElementById("lossCounter").innerHTML = lossCounter;
			resetGame();
		}
	}

	// --------------------------------
	// Character Button Event Listeners
	// --------------------------------

	$('#rey').click (function(){
		totalScore = totalScore + reyValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		roundClear();
	});	
	
	$('#finn').click (function(){
		totalScore = totalScore + finnValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		roundClear();
	});	
	
	$('#poe').click (function(){
		totalScore = totalScore + poeValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		roundClear();
	});	
	
	$('#bb8').click (function(){
		totalScore = totalScore + bbValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		roundClear();
	});	

});

