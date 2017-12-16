var difficulty = 6;
var colors = getRandomColor(difficulty);
var pickedColor = randomColor();
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.getElementsByClassName("square");
for(var i=0; i<squares.length; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function()
	{
		var clickedColor = this.style.background;
		if(clickedColor == pickedColor)
		{
			message.textContent = "Correct";
			for(var j=0; j<colors.length; j++)
			{
				squares[j].style.background = pickedColor;
			}
			h1.style.background = pickedColor;
			playAgain.textContent = "PLAY AGAIN";

		}
		else
		{
			message.textContent = "Try Again";
			this.style.background = "#232323";
		}
	});
}

function randomColor()
{
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}
function getRandomColor(num)
{
	var arr = [];
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColorGenerator());
	}
	return arr;
}

function randomColorGenerator()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")" ;
}
var playAgain = document.querySelector("#playAgain");
playAgain.addEventListener("click", function()
{
	//generate new color
	colors = getRandomColor(difficulty);
	//select new picked color
	pickedColor = randomColor();
	//display new random color
	colorDisplay.textContent = pickedColor;
	//give new colors to squraes
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	message.textContent = "";
	playAgain.textContent = "NEW COLORS";
	h1.style.background = "steelblue";

});
var easy = document.querySelector("#easy");
easy.addEventListener("click", function()
{
	difficulty = 3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = getRandomColor(3);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.background = "none";
		}
	}
	h1.style.background = "steelblue";
});
var hard = document.querySelector("#hard");
hard.addEventListener("click", function()
{
	difficulty = 6;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = getRandomColor(6);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
	h1.style.background = "steelblue";
});
