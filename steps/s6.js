var totalSeconds = 0
var timer
$(function () {
	$('button').click(play)
})
function play() {
	timer = setInterval(setTime, 1000)
	$('.bg').hover(function() {
		$('rect').off()
		alert('You Died!')
		clearInterval(timer)
		totalSeconds = 0
		$('#timer span').html(totalSeconds)
	})
	
	$('.finish').hover(function() {
		$('rect').off()
		alert('Congratulations, you win!')
		clearInterval(timer)
		totalSeconds = 0
		$('#timer span').html(totalSeconds)
	})
}
function setTime() {
	++totalSeconds
	$('#timer span').html(totalSeconds)
}