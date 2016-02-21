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
	
	//Character Buttons
	
	console.log("This is the current score: " + totalScore);
	console.log("Match this number: " + matchNumber);
	
	$('#rey').click (function(){
		totalScore = totalScore + reyValue;
		console.log("Rey makes it: " + totalScore);
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!");
			winCounter = winCounter + 1;
			console.log("Wins: " + winCounter);
		}
	});	
	
	$('#finn').click (function(){
		totalScore = totalScore + finnValue;
		console.log("Finn makes it: " + totalScore);
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!");
			winCounter = winCounter + 1;
			console.log("Wins: " + winCounter);
		}
	});	
	
	$('#poe').click (function(){
		totalScore = totalScore + poeValue;
		console.log("Poe makes it: " + totalScore);
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!");
			winCounter = winCounter + 1;
			console.log("Wins: " + winCounter);
		}
	});	
	
	$('#kylo').click (function(){
		totalScore = totalScore + kyloValue;
		console.log("Kylo makes it: " + totalScore);
		if(totalScore == matchNumber){
			alert("The force is strong with you. You've won!");
			winCounter = winCounter + 1;
			console.log("Wins: " + winCounter);
		}
	});	
	

		

//MAIN PROCESS
//====================================================================================================================================	
		
	});

