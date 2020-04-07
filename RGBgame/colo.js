var numSquare =6;
var colors =generateRandomColors(6);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
		hard.classList.remove("selected");
        easy.classList.add("selected");
        numSquare=3;
        colors=generateRandomColors(numSquare);
        pickedColor = pickColor();
        messageDisplay.textContent="";
        h1.style.background = "steelblue";

        colordisplay.textContent = pickedColor;
        for(var i=0; i<square.length; i++){
        	if(colors[i]){
        		square[i].style.background = colors[i];
        	}
        	else{
        		square[i].style.display ="none";
        	}
        }
});
hard.addEventListener("click", function(){
	easy.classList.remove("selected");
     hard.classList.add("selected");
     numSquare= 6;
     colors=generateRandomColors(numSquare);
        pickedColor = pickColor();
        messageDisplay.textContent="";
        h1.style.background = "steelblue";

        colordisplay.textContent = pickedColor;
        for(var i=0; i<square.length; i++){
        	
        		square[i].style.background = colors[i];
        	
        		square[i].style.display ="block";
        	
        }
	
});

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent= pickedColor;
	this.textContent ="New color"
	messageDisplay.textContent="";
	for(var i =0; i < square.length; i++){
	square[i].style.background =colors[i];
 }
 h1.style.background = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i =0; i < square.length; i++){
	square[i].style.background =colors[i];
 }
	for(var i =0; i < square.length; i++){
	square[i].addEventListener("click", function(){		
		  var clc=this.style.background; 
		 if(clc===pickedColor) {
			messageDisplay.textContent ="Correct!";
			changeColors(clc);
			h1.style.background = clc;
			reset.textContent="Play Again";

		     }
		else {
             this.style.background ="#232323";
             messageDisplay.textContent ="Try Again";
			}

		
	});
 }
 
 function changeColors(color){
 	for(var i =0; i<square.length; i++){
 		square[i].style.background = color;
 	}

 }

 function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
 }
 function generateRandomColors(num){
 	var arr=[]
 	for(var i=0; i<num; i++){
 		arr.push(randomColor())

 	}
 	return arr;
 }

 function randomColor(){
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  	return "rgb(" + r + ", " + g + ", " + b + ")";


 }