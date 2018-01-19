var chatArray = [], messageArray = [], errorArray = [];

$(function(){
	$('.player-buttons').hide();
	$('.message-bulder-section').hide();
	$('.player-left #colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('.player-left #colorSelector div').css('backgroundColor', '#' + hex);
			// $('#player-name-input').css('backgroundColor', '#' + hex);
			// $('.player-name').css('backgroundColor', '#' + hex);
		}
	});

	$('.player-right #colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('.player-right #colorSelector div').css('backgroundColor', '#' + hex);
		}
	});
	$('.message-left #colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('.message-left #colorSelector div').css('backgroundColor', '#' + hex);
		}
	});

	$('.message-right #colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('.message-right #colorSelector div').css('backgroundColor', '#' + hex);
		}
	});
});

var playerLeft = '<div class="player-left clearfix"><div class="player-image"><form><input type="text" name="playerImage" class="player-image-input" id="player-image-input" placeholder="Enter image Url....."><label for="player-image-input"><i class="fas fa-user-plus"></i></label></form></div><div class="player-name"><div class="row"><div class="col-lg-10"><form><input type="text" name="playerName" class="player-name-input" id="player-name-input" placeholder="Enter name of the player"></form></div><div class="col-lg-2"><div id="colorSelector"><div style="background-color: purple"></div></div></div></div></div></div>';

var playerRight = '<div class="player-right clearfix"><div class="player-name"><div class="row"><div class="col-lg-2"><div id="colorSelector"><div style="background-color: yellow"></div></div></div><div class="col-lg-10"><form><input type="text" name="playerName" class="player-name-input" id="player-name-input" placeholder="Enter name of the player"></form></div></div></div><div class="player-image"><form><input type="text" name="playerImage" class="player-image-input" id="player-image-input" placeholder="Enter image Url....."><label for="player-image-input"><i class="fas fa-user-plus"></i></label></form></div></div>';

var messageLeft = '<div class="message-left clearfix"><div class="player-image"><img alt="" src="assets/images/userIcon.png"></div><div class="message-text"><div class="row"><div class="col-lg-12"><form><input type="text" name="messageText" class="message-text-input" id="message-text-input" placeholder="Paste the embed code here..."></form></div></div></div></div>';

var messageRight = '<div class="message-right clearfix"><div class="message-text"><div class="row"><div class="col-lg-12"><form><input type="text" name="messageText" class="message-text-input" id="message-text-input" placeholder="Paste the embed code here..."></form></div></div></div><div class="player-image"><img alt="" src="assets/images/userIcon.png"></div></div>';

var messageLeftWithoutImage = '<div class="message-left clearfix"><div class="message-text"><div class="row"><div class="col-lg-12"><form><input type="text" name="messageText" class="message-text-input" id="message-text-input" placeholder="Paste the embed code here..."></form></div></div></div></div>';

var messageRightWithoutImage = '<div class="message-right clearfix"><div class="message-text"><div class="row"><div class="col-lg-12"><form><input type="text" name="messageText" class="message-text-input" id="message-text-input" placeholder="Paste the embed code here..."></form></div></div></div></div>';

$('.start-btn').click(function(){
	$('.player-buttons').show();
	$('.message-bulder-section').show();
});

$('.player1').click(function(){
	$('.message-bulder-section').append(messageLeft);
});

$('.player2').click(function(){
	$('.message-bulder-section').append(messageRight);
});

function addPlayersToArray(){
	var i = 0;
	$('.player-left, .player-right').each(function(){
		chatArray.push({});
		chatArray[i]['name'] = $(this).find('.player-name-input').val();
		chatArray[i]['imageUrl'] = $(this).find('.layer-image-input').val();
		chatArray[i]['color'] = $(this).find('#colorSelector div').css('background-color');
		i++;
	});
}


function addMessagesToArray(){
	var i = 0;
	$('.message-left, .message-right').each(function(){
		chatArray.push({});
		messageArray.push({});
		messageArray[i]['name'] = $(this).find('.player-name-input').val();
		messageArray[i]['imageUrl'] = $(this).find('.layer-image-input').val();
		messageArray[i]['color'] = $(this).find('#colorSelector div').css('background-color');
		i++;
	});
	chatArray[chatArray.length - 1]['messages'] = messageArray;
	messageArray = [];
}

function buildArray(){
	var errorNum = validates();
	if(errorNum == 0){
		chatArray = [];
		addPlayersToArray();
		addMessagesToArray();
	}
	else{
		alert(errorArray[errorNum]);
		return;
	}
}

function validates(){

}

$('.refresh-icon').click(function(){
	if(chatArray == []){
		buildArray();
		buildPreview();
	}
	else{
		buildPreview();
	}
});

function buildPreview(){
	var prevPlayer = '';
	$('#preview').html('');
	for(var i = 0; i < chatArray[chatArray.length].length; i++){

		$('#preview').append('');
	}
}