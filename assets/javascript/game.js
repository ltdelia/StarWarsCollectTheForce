//GLOBAL VARIABLES
//====================================================================================================================================

//Character Values at start -- these are placeholders
var charValue = [];
var reyValue = 0;
var finnValue = 0;
var poeValue = 0;
var kyloValue = 0;

//Game Counters
var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;

//FUNCTIONS
//====================================================================================================================================

//jQuery function, wrapping the entire script
	$(document).ready (function(){
	
	//Loop populates charValue array with values from 1 to 12
	for (var i = 1; i <= 12; i++){
		charValue.push(i);
	}

	//Shuffle function shuffles the array so values are in random order
	function shuffle(array){
		var currentIndex = charValue.length, tempValue, randIndex;
		while(0 !== currentIndex) {
			randIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			tempValue = charValue[currentIndex];
			charValue[currentIndex] = charValue[randIndex];
			charValue[randIndex] = tempValue;
		}
		return charValue;
	}

	shuffle(charValue);
	console.log(charValue);

	//Assign each character a random value from the array
	var reyValue = charValue[0];
	var finnValue = charValue[1];
	var poeValue = charValue[2];
	var kyloValue = charValue[3];

	//Generates a random number to match
	var matchNumber=Math.floor(Math.random()*(120-19+1) + 19);
	console.log("Match this number: " + matchNumber);

	//Reset Function
	function resetGame(){
		totalScore = 0;
		document.getElementById("totalScore").innerHTML = totalScore;
		matchNumber=Math.floor(Math.random()*(120-19+1) + 19);
		document.getElementById("matchNumber").innerHTML = matchNumber;
		shuffle(charValue);
		console.log(charValue);
		reyValue = charValue[0];
		finnValue = charValue[1];
		poeValue = charValue[2];
		kyloValue = charValue[3];
	}

	//Round Complete Function
	function roundClear(){
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!")
			winCounter = winCounter + 1;
			document.getElementById("winCounter").innerHTML = winCounter;
			console.log("Wins: " + winCounter);
			resetGame();
		} else if(totalScore  > matchNumber){
			alert("The force is too strong. You've lost...")
			lossCounter = lossCounter + 1; 
			document.getElementById("lossCounter").innerHTML = lossCounter;
			console.log("Losses: " + lossCounter);
			resetGame();
		}
	}

	//Character Buttons

	$('#rey').click (function(){
		totalScore = totalScore + reyValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		console.log("Rey makes it: " + totalScore);	
		roundClear();
	});	
	
	$('#finn').click (function(){
		totalScore = totalScore + finnValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		console.log("Finn makes it: " + totalScore);
		roundClear();
	});	
	
	$('#poe').click (function(){
		totalScore = totalScore + poeValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		console.log("Poe makes it: " + totalScore);
		roundClear();
	});	
	
	$('#kylo').click (function(){
		totalScore = totalScore + kyloValue;
		document.getElementById("totalScore").innerHTML = totalScore;
		console.log("Kylo makes it: " + totalScore);
		roundClear();
	});	


	
	//Change HTML to reflect round conditions
	document.getElementById("matchNumber").innerHTML = matchNumber;
	document.getElementById("winCounter").innerHTML = winCounter;
	document.getElementById("lossCounter").innerHTML = lossCounter;
	document.getElementById("totalScore").innerHTML = totalScore;	

//MAIN PROCESS
//====================================================================================================================================	

	});

