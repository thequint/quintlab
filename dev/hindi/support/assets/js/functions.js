
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
var db = firebase.firestore();
// Disable deprecated features
// db.settings({
//     timestampsInSnapshots: true
// });

$("textarea#Message").on('keyup', function() {
    var words = this.value.match(/\S+/g).length;
    if (words > 500) {
        // Split the string on first 200 words and rejoin on spaces
        var trimmed = $(this).val().split(/\s+/, 500).join(" ");
        // Add a space at the end to keep new typing making new words
        $(this).val(trimmed + " ");
    } else {
        //$('#display_count').text(words);
        $('#chars').text(500 - words);
    }
});

$('#Email').keypress(function() {
    $('#ErrorEmail').html('');
});

$('#Mobile').on('keypress', function(e) {
    $('#ErrorMobile').html('');
    var $this = $(this);
    var regex = new RegExp("^[0-9\b]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    // for 10 digit number only
    if ($this.val().length > 9) {
        e.preventDefault();
        return false;
    }
    if (e.charCode < 54 && e.charCode > 47) {
        if ($this.val().length == 0) {
            e.preventDefault();
            return false;
        } else {
            return true;
        }
    }
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-58739020-1');

$('#SubmitForm').click(function(event) {
    event.preventDefault();

    var fld_name = $('#Name').val();
    var fld_email = $('#Email').val();
    var fld_city = $('#City').val();
    var fld_mobile = $('#Mobile').val();
    var fld_pannumber = $('#PanNumber').val();

    if (fld_name.length == 0) {
        $("#Name").focus();
        return false;
    }
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!fld_email.match(email_regex) || fld_email.length == 0) {
        $('#ErrorEmail').html("<span>Please enter a valid email address</span>");
        $("#Email").focus();
        return false;
    }
    if (fld_city.length == 0) {
        $("#City").focus();
        return false;
    }
    if (fld_mobile.length < 10) {
        $('#ErrorMobile').html("<span>Please enter a valid mobile number</span>");
        $("#Mobile").focus();
        return false;
    }
    if (fld_pannumber.length == 0) {
        $("#PanNumber").focus();
        return false;
    }
    // if($("#Add_Amount").val() < 5000 && $("#Add_Amount").attr('disabled')!='disabled'){
    //     alert("Please Enter amount above Rs 5000 or choose from the available options");
    //     $("#Add_Amount").focus();
    //     return false;
    // }

    if ($('#fld_terms').prop("checked") != true) {
        alert("Please accept the Terms and Conditions");
        return false;
    }
    // Payment
    var options = {
        "key": 'rzp_live_tBGcMHFIr1pJox',
        // "amount": "100", // 1000 paise = INR 10
        "amount": $('#Add_Amount').val() * 100,
        "name": "The Quint",
        "description": "*Entry fees includes GST",
        "image": "https://www.thequint.com/quintlab/my-report-debate/assets/images/thequint-logo.png",
        "handler": function(response) {
            update_db(response.razorpay_payment_id)
        },
        "prefill": {
            "name": $("input[name='name']").val(),
            "email": $("input[name='email']").val(),
            "contact": $("input[name='number']").val()
        },
        "notes": {
            "address": "Hello World"
        },
        "theme": {
            "color": "#0F5E90"
        }
    };
    var rzp1 = new Razorpay(options);

    ga("gtag_UA_58739020_1.send", {
        hitType: 'event',
        eventCategory: 'Labs',
        eventAction: 'play',
        eventLabel: 'Contribution Support'
    });

    // End Payment
    rzp1.open();
});

var essay = {}

function update_db(id) {
    $("input").each(function() {
        essay[$(this).attr('name')] = $(this).val();
    });
    $("textarea").each(function() {
        essay[$(this).attr('name')] = $(this).val();
    });

    // check hindi or engish
    // if ($("#Radio_En").is(":checked")) {
    //     essay['lang'] = "eng"
    // } else {
    //     essay['lang'] = "hindi"
    // }
    essay['payment_id'] = id;
    // console.log(essay);
    essay['date'] = new Date();
    db.collection('Contribute_Quint').doc(essay['payment_id']).set(essay).then(function(result) {
        // success screen
        $('body').addClass('is-modal is-payment');
        $('#PaymentId').html(essay['payment_id']);
        //console.log('Data stored in firebase cloud firestore')
        //console.log(result)
    }).catch(function(error) {
        //console.log(error)
    });
}
$(".form-amount .amount").on('click', function(){
    $(".form-amount .amount").removeClass("is-active");
    $(this).addClass("is-active");
    $("#Add_Amount").val($(this).attr("data-amount"));

    $(".form-amount").removeClass("translate-amout");
    $("#formSlide").slideDown();
    $("#Add_Amount").attr('disabled','disabled');
});

$(".amount-large").on('click', function(){
    $(".form-amount").addClass("translate-amout");

    $("#Add_Amount").removeAttr('disabled');
});

$("#Add_Amount").blur(function(){
    if($("#Add_Amount").val() < 5000){
        // alert("Please Enter amount above Rs 5000 or choose from the available options");
        $("#Add_Amount").val("5000");
        // $("#Add_Amount").attr('disabled','disabled');
    }else {
        // $("#Add_Amount").removeAttr('disabled');
    }
});

$(document).ready(function() {
    $('.nav-bar').click(function() {
        "use strict";
        $('body').addClass('is-nav');
        nav_flag = 1;
    });
    $('.top-nav a').click(function() {
        "use strict";
        $('body').removeClass('is-nav');
        nav_flag = 0;
    });
    $('.top-nav ul li a').click(function() {
        "use strict";
        $('.top-nav ul li a').removeClass('is-active');
        $(this).addClass('is-active');
    });
    $(".des").click(function(event) {
        "use strict";
        //event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 1000, 'swing');
    });
});

$("#formScroll").on("click", function() {
    // $(window).scrollTop(0);
    $("html, body").animate({scrollTop : 0},700);
});

$('body').click(function(evt) {
    if (evt.target.className == "is-more")
        return;
    if ($(evt.target).closest('.is-more').length)
        return;
    $(".is-more").removeClass("is-more");
});
var nav_flag = 0;
$('body').click(function(evt) {
    if (evt.target.className == "top-nav")
        return;
    if ($(evt.target).closest('.top-nav').length)
        return;
    if (evt.target.className == "nav-bar")
        return;
    if ($(evt.target).closest('.nav-bar').length)
        return;
    if (nav_flag == 1) {
        $("body").removeClass("is-nav");
        nav_flag = 0;
    }
});
$('.read-profiles').click(function() {
    $('body').addClass('is-modal is-profile');
});
$('.topic').click(function() {
    $('body').addClass('is-modal is-topic');
});

$('.close-modal').click(function() {
    $('body').removeAttr('class');
});