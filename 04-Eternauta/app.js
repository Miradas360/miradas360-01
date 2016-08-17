var firsttrack = document.querySelector('#first');
var firstPlayer = document.querySelector('#firstPlay');
var playFirst = function(){

	firsttrack.emit('play');


};

firstPlayer.el.addEventListener('animationend',playFirst);
firstPlayer.addEventListener('animationend',playFirst);