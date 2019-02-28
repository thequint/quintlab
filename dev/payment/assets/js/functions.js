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
db.settings({
    timestampsInSnapshots: true
});
init();

function init() {
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();

    function repeatOften() {
        // Do whatever
        hasScrolled();
        requestAnimationFrame(repeatOften);
    }
    requestAnimationFrame(repeatOften);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('#header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('#header').removeClass('header-up').addClass('header-down');
            }
        }
        if (st === 0) {
            $('#header').removeClass('header-down');
        }
        lastScrollTop = st;
    }
}
/*var maxLength = 500;
$('textarea#Message').keyup(function() {
var length = $(this).val().length;
var length = maxLength-length;
$('#chars').text(length);
});*/

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

$('#SubmitForm').click(function(event) {
    event.preventDefault();
    //console.log(error);
    // Initializing Variables With Form Element Values
    var fld_title = $('#Title').val();
    var fld_message = $('#Message').val();
    var fld_name = $('#Name').val();
    var fld_email = $('#Email').val();
    var fld_mobile = $('#Mobile').val();
    var fld_address = $('#Address').val();
    var fld_about = $('#About').val();
    if (fld_title.length == 0) {
        $('#head').text("All fields are mandatory");
        $("#Title").focus();
        return false;
    }
    if (fld_message.length == 0) {
        $('#head').text("All fields are mandatory");
        $("#Message").focus();
        return false;
    }
    if (fld_name.length == 0) {
        $('#head').text("All fields are mandatory");
        $("#Name").focus();
        return false;
    }
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!fld_email.match(email_regex) || fld_email.length == 0) {
        $('#ErrorEmail').html("<span>Please enter a valid email address</span>");
        $("#Email").focus();
        return false;
    }
    if (fld_mobile.length < 10) {
        $('#head').text("All fields are mandatory");
        $('#ErrorMobile').html("<span>Please enter a valid mobile number</span>");
        $("#Mobile").focus();
        return false;
    }
    /*if (fld_address.length == 0) {
    $('#head').text("All fields are mandatory");
    $("#Address").focus();
    return false;
    }
    if (fld_about.length == 0) {
    $('#head').text("All fields are mandatory");
    $("#About").focus();
    return false;
    }*/
    if ($('#fld_terms').prop("checked") != true) {
        alert("Please accept the Terms and Conditions");
        //fld_terms.terms.focus();
        return false;
    }
    // Payment
    var options = {
        "key": 'rzp_live_SWoEhVKfBqYonT',
        "amount": "10000", // 2000 paise = INR 20
        "name": "The Quint111",
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
    if ($("#Radio_En").is(":checked")) {
        //console.log('checked en')
        essay['lang'] = "eng"
    } else {
        essay['lang'] = "hindi"
    }
    essay['payment_id'] = id;
    essay['date'] = new Date();
    db.collection('MyReport_Debate').doc(essay['email']).set(essay).then(function(result) {
        // success screen
        $('body').addClass('is-modal is-payment');
        $('#PaymentId').html(essay['payment_id']);
        //console.log('Data stored in firebase cloud firestore')
        //console.log(result)
    }).catch(function(error) {
        //console.log(error)
    });
}
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