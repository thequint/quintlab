$('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['white', '#e8cea3', '#2C3E50', '#39C'],
    dragAndMove: false,
    keyboardScrolling: false,
    navigation: false,
    // navigation: {
    //  'position': 'right',
    //  'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
    // },
    afterRender: function() {
        $('#pp-nav').addClass('custom');
    },
    afterLoad: function(anchorLink, index) {
        // $(".section-first").addClass('freeze');
        if (index > 1) {
            $('#pp-nav').removeClass('custom');
            $(".section-first").addClass('freeze');
        } else {
            $('#pp-nav').addClass('custom');
        }
    }
});
$(".home").on("click", function(){
     $(".section-first").removeClass('freeze');
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2loaJl1Hn9SjjCan6CaV9sXDFvopA1k4",
    authDomain: "dashboard-51ea4.firebaseapp.com",
    databaseURL: "https://dashboard-51ea4.firebaseio.com",
    projectId: "dashboard-51ea4",
    storageBucket: "dashboard-51ea4.appspot.com",
    messagingSenderId: "1062965330854"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

db.collection("letter-to-india-letters").orderBy('date', 'desc').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log("loaded");

        var btn_str="";

        if (doc.data().video==true) {
           btn_str= '<div class="cta-wrap"><span class="cta-btn"><a class="read-more" href="' + doc.data().link + '" target="_blank">Watch The Video</a></span><span class="video-icon"><a href="' + doc.data().link + '" target="_blank"></a></span></div>'
        } else{
         btn_str= '<div class="cta-wrap"><span class="cta-btn"><a class="read-more" href="' + doc.data().link + '" target="_blank">Read The Letter</a></span></div>'
        }

        var img_str='';

        if (doc.data().slug=='' || doc.data().slug==undefined) {
            img_str= '<img src="assets/images/profile/default.jpg">'
        } else {
            img_str= '<img src="assets/images/profile/' + doc.data().slug + '.jpg">'
        }

        $(".swiper-wrapper").append('<li class="swiper-slide" data-swiper-parallax="-100"> <div class="card-header"><span class="profile">'+ img_str +'</span><span class="profile-name">' + doc.data().name + '<span class="profile-location">' + doc.data().location + '</span></span></div><p class="card-content">' + doc.data().letter + '</p>'+btn_str+' </li>')
        // console.log(doc.data());
    });

    slider_init();
});

function slider_init() {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        parallax: true,
        // slidesPerView: 4,
        // spaceBetween: 40,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
    });

    $(".swiper-wrapper").css('margin-top', -1 * $(".swiper-wrapper").height() / 2)

    $(".nav-icon").on("click", function() {
        $(".side-bar").css("width", "320px");
        $("#pagepiling").addClass("animate-left");
        $("body").addClass("is-overlay");
    });

    $(".btn-close").on("click", function() {
        $(".side-bar").css("width", "0");
        $("#pagepiling").removeClass("animate-left");
        $("body").removeClass("is-overlay");
    });
    $(".side-bar a").on("click", function() {
        $(".side-bar").css("width", "0");
        $("#pagepiling").removeClass("animate-left");
        $("body").removeClass("is-overlay");
    });

    // Promo Popup
    $(".media-play-icon").on("click", function() {
        $("#promo_popup").show();
        $("#promo_popup .popup-box .popup-box-content").html('<div class="popup-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/oXtdLEYeFDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    });
    // Promo Popup Close
    $("#promo_popup .popup-close").on("click", function() {
        $("#promo_popup").hide();
        $("#promo_popup .popup-box .popup-box-content").html('');
    });

    // Form Popup
    $(".form-popup").on("click", function() {
        $("#form_popup").show();
    });
    // Form Popup Close
    $("#form_popup .popup-close").on("click", function() {
        $("#form_popup").hide();
    });
    
    $(".write-letter").on("click", function(){
        $("#form_popup").show();
    });
}

$(document).ready(function() {

    $(".share-btn span").click(function(e) {
        $(".social-icon").toggleClass("is-show");
        return false;
    });
    $("body").click(function() {
        $(".social-icon").removeClass("is-show");
    });


    $(".share-ico").click(function(e) {
        $(".social-ico").slideToggle(400);
        return false;
    });
    $("body").click(function() {
        $(".social-ico").slideUp();
    });
});