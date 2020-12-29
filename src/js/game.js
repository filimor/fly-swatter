var height = 0;
var width = 0;
var lives = 1;
var remainingTime = 15;
var spawnInterval = 1500;

var level = window.location.search;
level = level.replace('?level','');

switch (level) {
	case 'normal':
		spawnInterval = 1500;
		break;
	case 'hard':
		spawnInterval = 1000;
		break;
	case 'veryhard':
		spawnInterval = 750;
		break;
}

function fixStageSize() {
	height = window.innerHeight;
	width = window.innerWidth;
}

var timer = setInterval(function() {
	if (--remainingTime < 0){
		clearInterval(timer);
		clearInterval(spawnFly);
		window.location.href = 'victory.html';
	} else {
		document.getElementById('timer').innerHTML = remainingTime;
	}
}, 1000);

function randomPosition(){
	if(document.getElementById('fly')) {
		document.getElementById('fly').remove();
		if(lives > 3) {
			window.location.href = 'endgame.html';
		}
		var test = document.getElementById('l' + lives++).src = 'images/empty_heart.png';
	}

	var posX = Math.floor(Math.random() * width) - 90;
	var posY = Math.floor(Math.random() * height) - 90;

	posX = posX < 0 ? 0 : posX;
	posY = posY < 0 ? 0 : posY;

	var fly = document.createElement('img');
	fly.src = 'images/fly.png';
	fly.className = randomSize() + ' ' + randomSide();
	fly.style.left = posX + 'px';
	fly.style.top = posY + 'px';
	fly.style.position = 'absolute';
	fly.id = 'fly';
	fly.onclick = function() {
		this.remove();
	};

	document.body.appendChild(fly);
}

function randomSize(){
	switch(Math.floor(Math.random() * 3)){
		case 0:
			return 'fly1';
		case 1:
			return 'fly2';
		case 2:
			return 'fly3';
	}
}

function randomSide(){
	switch(Math.floor(Math.random() * 2)){
		case 0:
			return 'sideA';
		case 1:
			return 'sideB';
	}
}

fixStageSize();