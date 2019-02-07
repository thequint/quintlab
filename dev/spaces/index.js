/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vrView;
var load_flag=0;

// All the scenes for the experience
var scenes = {
 
  tajMahal: {
	video: 'SAM_100_0994.mp4',  
    image: 'nav.jpg',
	
    preview: 'nav.jpg',
	  hotspots: {
      
      machuPicchu: {
        pitch: 0,
        yaw: 10,
        radius: 0.05,
        distance: 1,
		  audio:'x.mp3',
      },
		  fort1: {
        pitch: 0,
        yaw: -90,
        radius: 0.05,
        distance: 2
      },
		  fort3: {
        pitch: 45,
        yaw: 180,
        radius: 0.05,
        distance: 2
      },  
	fort4: {
        pitch: 0,
        yaw: 180,
        radius: 0.05,
        distance: 1
      }
    }
  },
	machuPicchu: {
    image: 'room_1.jpg',
    preview: 'room_1.jpg',
	  hotspots: {
        tajMahal: {
        pitch: 0,
        yaw: 0,
        radius: 0.05,
        distance: 1,
		  audio:'x.mp3',
      },
     
    }
  },
};

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: 'blank.png',
    is_stereo: false,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('getposition', onGetPosition);
  vrView.on('error', onVRViewError);
  vrView.on('click', onHotspotClick);
  vrView.on('timeupdate', onTimeUpdate);
	
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    video: scenes[id].video,
    preview: scenes[id].preview,
    is_autopan_off: true,
	  default_yaw:60,
	  width:5000,
  });
var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }
	
	
	$(".play_btn").click (function(){
		vrView.play();
	})
	$(".pause_btn").click (function(){
		vrView.pause();
	})
    //vrView.getPosition();
  // Highlight current carousel item
 }

function onHotspotClick(e) {
  vrView.getPosition()
  console.log('onHotspotClick', e.id);
  if (e.id) {
    loadScene(e.id);
  }
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

  loadScene('tajMahal');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

function onGetPosition(e) {
    console.log(e);
	//test();

}
function onTimeUpdate(e) {
  //  console.log("adasd");
	//test();

}

window.addEventListener('load', onLoad);

//console.log("test"+test_var);

function test_render_pos(x,y) 
{
	
	//console.log("load"+load_flag)
	//console.log(x* 180 / Math.PI+"|"+y* 180 / Math.PI);
	
}

