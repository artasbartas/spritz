// Source: https://github.com/AlexKopen/Speed-Reader/blob/master/reader.js

$(document).ready(function() {

	$('#submit').click(function(){
		var words = $('#input').val().replace( /\n/g, " ").trim().split(" ");
		updateText(words);
	});

});

function updateText(words){

	var paused = false;

	var pauseOrResume = function(){
		if(paused == false){
			paused = true;
			$('#pause').html('Resume');
		}else{
			paused = false;
			$('#pause').html('Pause');
		}

		$('#pause').blur();
	};

	var checkSpace = function(e){
		if(e.keyCode == 32){
			pauseOrResume();
		}
	};

	$('#pause').click(pauseOrResume);
	$(document).bind('keypress.spacebar', checkSpace);

	var i = 0;
	var marginLeft;
	var speed = $('#speed option:selected').val();

	var textLoop = setInterval(function(){
		if(!paused){		
			if(i <= words.length - 1){
				$('#current_text').html(generateRedChar(words[i++]));
				marginLeft = 75 - (($('#left_text').width()) + ($('#red').width()/2));
				$('#left_offset').css({
					'margin-left' : marginLeft + 'px'
				});
			}else{
				clearInterval(textLoop);
			}
		}
	}, speed);
}

function generateRedChar(currentWord){
	var optimalCharPoint;
	var subLeft, subRight;
	var currentWordLength = currentWord.length;
	var result;

	if(currentWordLength == 1){
		optimalCharPoint = 0;
	}else if(currentWordLength >= 2 && currentWordLength <= 5){
		optimalCharPoint = 1;
	}else if(currentWordLength >= 6 && currentWordLength <= 8){
		optimalCharPoint = 2;
	}else if(currentWordLength >= 9 && currentWordLength <= 13){
		optimalCharPoint = 3;
	}else{
		console.log('Word length greater than 13.');
		optimalCharPoint = 4;
	}

	if(optimalCharPoint == 0){
		result = '<p id = "left_offset">' + '<span id = "red">' + currentWord + '</span>' + '</p>';
		return result;

	}else{
		subLeft = '<span id = "left_text">' + currentWord.substring(0,optimalCharPoint) + '</span>';
		subRight = '<span id = "right_text">' + currentWord.substring(optimalCharPoint + 1, currentWordLength + 1) + '</span>';
		result = '<p id = "left_offset">' + subLeft + '<span id = "red">' 
			+ currentWord.charAt(optimalCharPoint) + '</span>' + subRight + '</p>';
		return result;
	}

}