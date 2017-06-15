var totalSeconds = 0
var timer

function setTime() {
	++totalSeconds;
	$('#timer span').html(padLeft(Math.floor(totalSeconds/60), "00") + ':' + padLeft(totalSeconds%60, "00"))
}

function play() {
	$('.bg').hover(function() {
		resetPlay('You Died!')
	})
	
	$('.finish').hover(function() {
		resetPlay('Congratulations, you win! Time: ' + $('#timer span').html())
	})
	
	timer = setInterval(setTime, 1000)
}

function padLeft(str, pad) {
	str = str + ''
	return pad.substring(0, pad.length - str.length) + str
}

function resetPlay(output) {
	clearInterval(timer)
	totalSeconds = 0
	$('rect').off()
	alert(output)
}



$(function() {
    $('button').click(play)
})