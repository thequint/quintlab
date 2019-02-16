/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vrView;
var playButton;
var muteButton;

var scenes = {
 
  tajMahal: {
	//video: 'SAM_100_0994.mp4',  
    image: 'nav.jpg',
	
    preview: 'nav.jpg',
	  hotspots: {
      
    }
  },
	
	
};


function onLoad() {
  // Load VR View.
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: 'blank.png',
    is_stereo: true,
    loop: false,
    //hide_fullscreen_button: true,
    //volume: 0.4,
    //muted: true,
    //is_debug: true,
    //default_heading: 90,
    //is_yaw_only: true,
    //is_vr_off: true,
  });

  playButton = document.querySelector('#toggleplay');
  muteButton = document.querySelector('#togglemute');
  volumeRange = document.querySelector('#volumerange');
  timeContainer = document.querySelector('#time');

  //playButton.addEventListener('click', onTogglePlay);
  //muteButton.addEventListener('click', onToggleMute);
  //volumeRange.addEventListener('change', onVolumeChange);
  //volumeRange.addEventListener('input', onVolumeChange);

  // If you set mute: true, uncomment the line bellow.
  // muteButton.classList.add('muted');

  vrView.on('ready', onVRViewReady);

  vrView.on('play', function() {
    console.log('media play');
    console.log(vrView.getDuration());
  });
  vrView.on('pause', function() {
    console.log('media paused');
  });
  vrView.on('timeupdate', function(e) {
    var current = formatTime(e.currentTime);
    var duration = formatTime(e.duration);
//    timeContainer.innerText = current + ' | ' + duration;
    // console.log('currently playing ' + current + ' secs.');
  });
  vrView.on('ended', function() {
    console.log('media ended');
    playButton.classList.add('paused');
  });
}

function loadScene(id) {
  console.log('loadScene', data_array[0].video);

  // Set the image
  vrView.setContent({
   video: data_array[id].video,
    preview: data_array[id].preview,
    is_autopan_off: true,
	  default_yaw:60,
	  width:5000,
  });
var newScene = data_array[id];
  /*var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }*/
	
	
	$(".play_btn").click (function(){
		vrView.play();
	})
	$(".pause_btn").click (function(){
		vrView.pause();
	})
    //vrView.getPosition();
  // Highlight current carousel item
 }


function loadImage(image) {
  //console.log('loadScene', data_array[0].video);

  // Set the image
  vrView.setContent({
   image: data_array[0].image,
    preview: image,
    is_autopan_off: true,
	  default_yaw:60,
	  width:5000,
  });
var newScene = data_array[0];
  
 }






function onVRViewReady(e) {
  console.log('onVRViewReady');

  // Create the carousel links
  var carouselItems = document.querySelectorAll('ul.carousel li a');
  for (var i = 0; i < carouselItems.length; i++) {
    var item = carouselItems[i];
    item.disabled = false;

    item.addEventListener('click', function(event) {
      event.preventDefault();
      loadScene(event.target.parentNode.getAttribute('href').substring(1));
    });
  }
    $(".intro-text, .drag-wrap").css("opacity","1");
  //
}
function onTogglePlay() {
  if (vrView.isPaused) {
    vrView.play();
    playButton.classList.remove('paused');
  } else {
    vrView.pause();
    playButton.classList.add('paused');
  }
}

function onToggleMute() {
  var isMuted = muteButton.classList.contains('muted');
  vrView.mute(!isMuted);
  muteButton.classList.toggle('muted');
}

function onVolumeChange(e) {
  vrView.setVolume(volumeRange.value / 100);
}

function formatTime(time) {
  time = !time || typeof time !== 'number' || time < 0 ? 0 : time;

  var minutes = Math.floor(time / 60) % 60;
  var seconds = Math.floor(time % 60);

  minutes = minutes <= 0 ? 0 : minutes;
  seconds = seconds <= 0 ? 0 : seconds;

  var result = (minutes < 10 ? '0' + minutes : minutes) + ':';
  result += seconds < 10 ? '0' + seconds : seconds;
  return result;
}
window.addEventListener('load', onLoad);