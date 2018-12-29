var container_all;
var landing = document.getElementById('landing');
var btn = document.getElementById('btn');
var ribbon = document.getElementById('netflix-wipe');
var vid_lastframe = document.getElementById('vid_lastframe');
var vid_lastframe_right = document.getElementById('vid_lastframe_right');
var introholder = document.getElementById('intro-holder');
var leftholder = document.getElementById('left-vid-holder');
var rightholder = document.getElementById('right-vid-holder');
var endcard = document.getElementById('endcard');
var clickthrough = document.getElementById('clickthrough');
var soundbtn = document.getElementById('soundbtn');
var closebtn = document.getElementById('closebtn');
var soundOn;
var videoPlaying = false;
var clicktag = "https://ad.doubleclick.net/ddm/trackclk/N186801.138364CRICBUZZ/B21325405.224537092;dc_trk_aid=422638139;dc_trk_cid=64495806;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=";
var videoPlayingNetflixWipeRight;
var videoPlayingNetflixWipeLeft;

//MOWGLI
var fg = document.getElementById('fg');
var bushes_right = document.getElementById('bushes_right');
var bushes_left = document.getElementById('bushes_left');
var loadingVid = document.getElementById('loading');

clickthrough.href = clicktag;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_left, player_right;
function onYouTubeIframeAPIReady() {
	player_left = new YT.Player('left-vid', {
		height: '480',
		width: '320',
		videoId: 'Cam2h4bFRCg',
		playerVars: {
			'controls':0,
			'showinfo': 0,
			'autoplay': 0,
			'playsinline':1,
			'rel':0,
			'mute':1
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange_Right
		}
	});
	player_right = new YT.Player('right-vid', {
		height: '480',
		width: '320',
		videoId: 'noX1QfN-wDU',
		playerVars: {
			'controls':0,
			'showinfo': 0,
			'autoplay': 0,
			'playsinline':1,
			'rel':0,
			'mute':1
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange_Left
		}
	});
};

// autoplay video
function onPlayerReady(event) {
    //event.target.playVideo();
};

function onPlayerStateChange_Right(event) {        
    if(event.data === 0) { 
    	// when video ends
		leftholder.style.opacity = "0";
		leftholder.style.display = "none";
		TweenMax.set([soundbtn, closebtn], {autoAlpha:0});
		setTimeout(function(){
			videoPlaying = false;
		}, 800);
		loadingVid.style.display = "none";
		
    } else if(event.data === 1){
    	soundOn = true;
		TweenMax.fromTo(leftholder, 0.6, {opacity: 0}, {opacity: 1})
    	TweenMax.to([soundbtn, closebtn], 0.6, {autoAlpha:1});
    	videoPlayingNetflixWipeRight = setTimeout(function(){
			vid_lastframe.style.display = "block";
			setTimeout(function(){
				TweenMax.set(ribbon, {className:"+=wipe"});
				setTimeout(function(){
					vid_lastframe.style.display = "none";
				},900);
				setTimeout(function(){
					TweenMax.set(ribbon, {className:" "});
				},1800);
			},800);
			
			
		}, 25750);
		
    }
};

function onPlayerStateChange_Left(event) {        
    if(event.data === 0) { 
		rightholder.style.opacity = "0";
			rightholder.style.display = "none";
		setTimeout(function(){
			videoPlaying = false;
			
		}, 800);
		TweenMax.set([soundbtn, closebtn], {autoAlpha:0});
		loadingVid.style.display = "none";
		
    }else if(event.data === 1){
    	soundOn = true;
		TweenMax.fromTo(rightholder, 0.6, {opacity: 0}, {opacity: 1})
    	TweenMax.to([soundbtn, closebtn], 0.6, {autoAlpha:1});
		videoPlayingNetflixWipeLeft = setTimeout(function(){
			vid_lastframe_right.style.display = "block";
			setTimeout(function(){
				TweenMax.set(ribbon, {className:"+=wipe"});
				setTimeout(function(){
					vid_lastframe_right.style.display = "none";
				},900);
				setTimeout(function(){
					TweenMax.set(ribbon, {className:" "});
				},1800);
			},800);
			
			
		}, 28450);
    }
};

btn.addEventListener("click", function(){
	TweenMax.to(landing, 0.6, {autoAlpha:0});
	TweenMax.fromTo(lockup, 0.6, {opacity:0, y:20},{opacity:1, y:0, ease:Power4.EaseOut});
	TweenMax.fromTo(tilt, 0.6, {opacity:0, y:8},{opacity:1, y:0, ease:Power4.EaseOut, onComplete:function(){
		window.addEventListener('deviceorientation', handleOrientation);
	}});
	//Initiate the videos at the background
	leftholder.style.display = "block";
	rightholder.style.display = "block";
	leftholder.style.opacity = "0";
	rightholder.style.opacity = "0";
	player_left.playVideo();
	player_right.playVideo();
	player_left.stopVideo();
	player_right.stopVideo();
})

soundbtn.addEventListener("click", function(){
	if(soundOn){
		player_right.mute();
		player_left.mute();
		soundOn = false;
		document.getElementById('soundoff').style.display = "block";
		document.getElementById('soundon').style.display = "none";
	} else if(!soundOn){
		player_right.unMute();
		player_left.unMute();
		soundOn = true;
		document.getElementById('soundoff').style.display = "none";
		document.getElementById('soundon').style.display = "block";
	}
});

closebtn.addEventListener("click", function(){
	
	TweenMax.set([soundbtn, closebtn], {autoAlpha:0});
	document.getElementById('soundoff').style.display = "none";
	document.getElementById('soundon').style.display = "block";
	loadingVid.style.display = "none";

	setTimeout(function(){
		videoPlaying = false;
	}, 800);

	clearTimeout(videoPlayingNetflixWipeLeft);
	clearTimeout(videoPlayingNetflixWipeRight)
	TweenMax.set(ribbon, {className:"+=wipe"});
	setTimeout(function(){
		TweenMax.set(ribbon, {className:" "});
	},1800);
	setTimeout(function(){
		player_right.stopVideo();
		player_left.stopVideo();
		leftholder.style.opacity = "0";
		rightholder.style.opacity = "0";
		leftholder.style.display = "none";
		rightholder.style.display = "none";
		vid_lastframe.style.display = "none";
		vid_lastframe_right.style.display = "none";
	},900);
});

//Tilt
var container_all = document.getElementById('container_all');
	left = document.getElementById('left');
	right = document.getElementById('right');
	bg = document.getElementById('bg');
	tilt = document.getElementById('tilt');

function handleOrientation(event) {
	if(videoPlaying){
		return false;
	}
	var leftright = event.gamma; //y-axis

	if((leftright > -19)&&(leftright < 19)){
	 	fg.style.left = (-142 + leftright*4) + "px";
	 	bg.style.left = (-49 + leftright) + "px";
	 	bushes_right.style.left = (320 + leftright*43) + "px";
	 	bushes_left.style.left = (-914 + leftright*43) + "px";
	 	tilt.style.left = leftright*2 + "px";
		
		if(leftright < -18){
			//Left
			leftholder.style.display = "block";
			loadingVid.style.display = "block";
			player_left.unMute();
			player_left.playVideo();
			bushes_right.style.left= -450;

			videoPlaying = true;
			
		} else if(leftright > 18){
			//Right
			rightholder.style.display = "block";
			loadingVid.style.display = "block";
			player_right.unMute();
			player_right.playVideo();
			bushes_left.style.left= 144;
			videoPlaying = true;
		}
	}
};

window.addEventListener('load', function(){
	TweenMax.to(document.getElementById('preload'), 0.6, {autoAlpha:0, delay:0.5});
})