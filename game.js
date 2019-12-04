var totalSeconds = 0
var timer
var box

function setTime() {
	++totalSeconds;
	$('#timer span').html(padLeft(Math.floor(totalSeconds/60), "00") + ':' + padLeft(totalSeconds%60, "00"))
}

function play() {	
	$('.bg').hover(function() {
		resetPlay('You Died!')
	})
	
	$('.box').hover(function() {
		clearInterval(timer)
		clearInterval(box)
		totalSeconds = 0
		$('rect').off()
		alert('You hit the flashing box!')
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
	clearInterval(box)
	totalSeconds = 0
	$('rect').off()
	alert(output)
}

$(function() {
    $('button').click(play)
})