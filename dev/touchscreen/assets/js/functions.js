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


// Data Rohit
db.collection("TouchscreenWidget").doc('rohit').get().then((doc) => {
    $(".box-first .headline").html(doc.data().heading);
    $(".box-first .sub-headline").html(doc.data().sub_heading);
    for (var i = 0; i < doc.data().list.length; i++) {
        $(".box-first .data_display").append('<li>' + doc.data().list[i] + '</li>')
    }
});

// Data Arre Bhai
db.collection("TouchscreenWidget").doc('arre_bhai').get().then((doc) => {
    $(".box-second .headline").html(doc.data().heading);
    $(".box-second .sub-headline").html(doc.data().sub_heading);

    for (var i = 0; i < doc.data().list.length; i++) {
        $(".box-second .data_display").append('<li>' + doc.data().list[i] + '</li>')
    }
});

// Data Tweetdeck
db.collection("TouchscreenWidget").doc('tweetdeck').get().then((doc) => {
    for (var i = 0; i < doc.data().tweets.length; i++) {
        if (i % 2 == 0) {
            $(".tweet_display_left").append('<li>' + doc.data().tweets[i] + '</li>')
        } else {
            console.log(doc.data().tweets[i]);
            $(".tweet_display_right").append('<li>' + doc.data().tweets[i] + '</li>')
        }
    }
    $(".tweet_display_right").show();
});

// Data Meme
db.collection("TouchscreenWidget").doc('memes').get().then((doc) => {

    // console.log(doc.data());
    for (var i = 0; i < doc.data().slider.length; i++) {
        $(".box-forth .data_caption").append('<div class="swiper-slide">' + doc.data().slider[i].caption + '</div>');
    }
});

// Slider
function functionSlider() {

    var galleryTop = new Swiper('.Gallery', {
        direction: 'vertical',
        spaceBetween: 0,
        slidesPerView: 1,
        // loop: true,

        // pagination: '.swiper-pagination',
        // paginationClickable: true,

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })
    var galleryThumbs = new Swiper('.Thumbs', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 1,
        // loop: true,
    })
    galleryTop.params.control = galleryThumbs
    galleryThumbs.params.control = galleryTop
}

// On Load Data
$(window).on("load", function() {

    $(".zoom-animation").addClass("transition-box");
    var pop_flag = 0;

    $(".img-thumb").on("click touchstart", function() {

        if (pop_flag == 0) {
            pop_flag = 1;
            // console.log(pop_flag);
            $(".popup-box").hide();

            $(this).closest(".zoom-animation").addClass("zoom");
            $(this).closest(".zoom-animation").addClass("zoom-index");
            $(this).closest(".zoom-animation").find(".close-icon").addClass("is-show");
            $(this).closest(".zoom-animation").find(".popup-box").show();
            $(this).closest(".zoom-animation").find(".thumb-tweet").addClass("half-width");

            $(this).closest(".zoom-animation").find(".img-placeholder").removeClass("is-show");
            $(this).closest(".zoom-animation").find(".img-placeholder").addClass("is-hide");

            var _this = $(this)
            setTimeout(function() {
                $(_this).closest(".zoom-animation").find(".text-animation").addClass("is-show");
                functionSlider();
            }, 1000);

        } else {
            pop_flag = 0;
            // console.log(pop_flag);
            $(".zoom-animation").removeClass("zoom");
            $(".close-icon").removeClass("is-show");
            $(".popup-box").hide();

            $(".text-animation").removeClass("is-show");
            $(".img-thumb").removeClass("test-close");
            $(".thumb-tweet").removeClass("half-width");
            $(".img-placeholder").removeClass("is-hide");
            $(".img-placeholder").addClass("is-show");

            setTimeout(function() {
                $(".zoom-animation").removeClass("zoom-index");

                $(".is-ani-left").removeClass("ani-left-visible");

            }, 800);
        }
        // $(".close-icon").addClass("is-show");
    });
});

// $(".close-icon").on("click touchstart", function(){
//     $(".zoom-animation").removeClass("zoom");
//     $(".close-icon").removeClass("is-show");

//     $(".popup-box").hide();

//     $(".text-animation").removeClass("is-show");
//     $(".img-thumb").removeClass("test-close");

//     setTimeout(function() {
//         $(".zoom-animation").removeClass("zoom-index");

//         $(".is-ani-left").removeClass("ani-left-visible");

//     }, 800);
// });

$(".is-ani-btm .ani-btm-visible").addClass("text-ani");

// $(".is-ani-left").addClass("ani-left-visible");
$(".is-ani-right").addClass("ani-right-visible");