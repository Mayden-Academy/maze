$(function() {
	$('button').click(play)
})

function play() {
	$('.bg').hover(function() {
		$('rect').off()
		alert('You Died!')
	})
	
	$('.finish').hover(function() {
		$('rect').off()
		alert('Congratulations, you win!')
	})
}