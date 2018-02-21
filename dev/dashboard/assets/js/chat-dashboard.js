// https://pbs.twimg.com/profile_images/506946032421199872/eqF3gv7d.jpeg
// https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/4/000/13a/1a6/077024b.jpg


$('input').val('');

// Create profile

init();

var single_profile, profile_thumb;

single_profile = ('<li><a class="remove-profile" href="javascript:void(0);"><i class="fa fa-times"></i></a><figure><div class="profile-img"><img alt="" src="assets/images/avatar.svg"></div><figcaption><input type="text" name="Profile Name" class="form-control name"  placeholder="Enter profile Name"><input type="text" name="Profile Image" class="form-control url" placeholder="Enter Image Url"></figcaption></figure></li>');

profile_thumb = ('<li><a href="javascript:void(0);"><figure><div class="profile-img"><img alt="" src="assets/images/avatar.svg"></div><figcaption class="profle-des"></figcaption></figure></a></li>');


$('#BtnAddProfile').click(function () {
	"use strict";
	$('#ProfileDetails').append(single_profile);
	$('#ProfileList').append(profile_thumb);
	init();
});

function reset_index() {
	"use strict";
	$('#ProfileDetails li').each(function (i) {

		$(this).attr("data-index", (i + 1));

	});

	$('#ProfileList li').each(function (i) {

		$(this).attr("data-index", (i + 1));

	});
}

// update profile image

function reset_profile_image()


{
	console.log('yes');
	
	$("#MessageBulder li").each(function(index){
		console.log(index+"|" +$(this).find(".profile-img").length)
		// if it is the first chat in the list, then it should have an image
		if(index==0 && $(this).find(".profile-img").length==0 )
			{
				
				$(this).find('figure').prepend('<div class="profile-img"><img src="'+$("#ProfileDetails li").eq($(this).attr("data-index")-1).find(".url").val()+'"</div>');// dynamic image source
			}
		else
			{
				console.log(index+"|" +$(this).find(".profile-img").length)
				//console.log($(this).attr('data-index')+"|"+$("#MessageBulder li").eq(index-1).attr('data-index'))
				//console.log(index+"|"+$(this).find("profile-img").length)
				if($(this).attr('data-index')!=$("#MessageBulder li").eq(index-1).attr('data-index') && $(this).find(".profile-img").length==0 )
					{
						
						$(this).find('figure').prepend('<div class="profile-img"><img src="'+$("#ProfileDetails li").eq($(this).attr("data-index")-1).find(".url").val()+'"</div>');// dynamic image source
					}
				else if($(this).attr('data-index')==$("#MessageBulder li").eq(index-1).attr('data-index') && $(this).find(".profile-img").length!=0)
					{
						$(this).find('figure .profile-img').remove();
					}
			//	console.log($(this).attr('data-index')+"|"+$("#MessageBulder li").eq(index-1).attr('data-index'))
				//
			}
		
		
		
	})
}


function update_profile_images(this_var) {

	if (this_var.val() === '') {

		this_var.closest("li").find('.profile-img img').attr('src', 'assets/images/avatar.svg');


	} else {

		this_var.closest("li").find('.profile-img img').attr('src', this_var.val());
	}


	$("#ProfileList li, #MessageBulder li").each(function (index) {

		if ($(this).attr('data-index') === this_var.closest("li").attr("data-index")) {
			$(this).find("img").attr('src', this_var.closest("li").find('.profile-img img').attr('src'));
			$(this).find('.profile-img img').attr('src', this_var.closest("li").find('.profile-img img').attr('src'));


		}

	});
}


function update_profile_name(this_var) {

	if (this_var.val() === '') {

		this_var.closest("li").find('.profile-img img').attr('alt', '');



	} else {

		this_var.closest("li").find('.profile-img img').attr('alt', this_var.val());
	}


	$("#ProfileList li, #MessageBulder li").each(function (index) {

		if ($(this).attr('data-index') === this_var.closest("li").attr("data-index")) {
			$(this).find(".profle-des").text(this_var.closest("li").find('.name').val());
			$(this).find('.profile-img img').attr('alt', this_var.closest("li").find('.name').val());
		}


	});
}


$('#ProfileDetails li .url').bind("keyup change", function () {

	update_profile_images($(this))
});




$('#ProfileDetails li .name').bind("keyup change", function () {

	update_profile_name($(this))
});






// Remove Only Message

function remove_message() {
	
	$('#MessageBulder li:last-child .remove-profile').click(function () {
		$(this).closest("li").remove();
		reset_profile_image();
		
	});
}



$('#ProfileList li:first-child').click(function () {
	message_bulder($(this).attr('data-index'));
	remove_message();
	
});




// message bulder

function message_bulder(index) {
	"use strict";
	$('.message-bulder-section').show();


	var profile_msz;
	var profile_img = '';
	var profile_img_src = $("#ProfileList li:nth-child(" + index + ")").find("img").attr('src');
	//console.log($("#ProfileList li:nth-child(" + index + ")").find("img").attr('src'));
	// if li length is zero assign left
	if ($('#MessageBulder li').length === 0) {
		profile_msz = '<li data-index="' + index + '" class="message-left">';
		profile_img = ' <div class="profile-img"><img alt="avatar" src="' + profile_img_src + '"></div>';
	} else {
		// if li last child data-index is same as index then assign same class as last child
		if ($('#MessageBulder li:last-child').attr('data-index') === index) {
			// if last child has class left assign left

			if ($('#MessageBulder li:last-child').hasClass('message-left')) {
				profile_msz = '<li data-index="' + index + '" class="message-left">';
			}

			// else assign right
			else {
				profile_msz = '<li data-index="' + index + '" class="message-right">';
			}


		} else {

			if ($('#MessageBulder li:last-child').hasClass('message-left'))
			// if last child has class left assign right
			{
				profile_msz = '<li data-index="' + index + '" class="message-right">';
				profile_img = ' <div class="profile-img"><img alt="avatar" src="' + profile_img_src + '"></div>';
			}

			// else assign left
			else {
				profile_msz = '<li data-index="' + index + '" class="message-left">';
				profile_img = ' <div class="profile-img"><img alt="avatar" src="' + profile_img_src + '"></div>';
			}

		}
	}


	profile_msz += '<a class="remove-profile" href="javascript:void(0);"><i class="fa fa-times"></i></a><figure>' + profile_img + '<figcaption><textarea placeholder="Paste the embed code here" class="form-control"></textarea></figcaption></figure></li>';

	$('#MessageBulder').append(profile_msz);

}


// All init

function init() {
	"use strict";
	reset_index();

	$("#ProfileDetails li:last-child").find('.remove-profile').click(function () {

		var this_data_index = $(this).closest('li').attr('data-index');
		//alert(this_data_index);

		$(this).closest("li").remove();

		$("#ProfileList li").each(function () {

			if ($(this).closest('li').attr('data-index') === this_data_index) {
				$(this).remove();
			}
		});

		reset_index();


	});

	$('#ProfileDetails li:last-child .url').bind("keyup change", function () {

		update_profile_images($(this));

	});


	$('#ProfileDetails li:last-child .name').bind("keyup change", function () {

		update_profile_name($(this));

	});


	$('#ProfileList li:last-child').click(function () {

		message_bulder($(this).attr('data-index'));

		remove_message();
	});

	$('#ProfileDetails li .remove-profile').click(function () {

		//console.log("yes");

		var profile_data_index = $(this).closest('li').attr('data-index');

		$('#MessageBulder li').each(function () {

			var this_data_index = $(this).attr('data-index');

			//console.log(profile_data_index +"|"+ this_data_index)
			if (profile_data_index === this_data_index) {

				$(this).remove();

			}


		});



	});


}


chat_data = {};

function build_array() {


	chat_data['profiles'] = [];
	chat_data['discussion'] = [];

	$("#ProfileDetails li").each(function (index) {
		chat_data['profiles'].push({});

		chat_data['profiles'][index]['profile_name'] = $(this).find(".name").val();

		if($(this).find(".url").val() === '')
		{
			chat_data['profiles'][index]['img_url'] = 'assets/images/avatar.svg';
		}
		else
		{
			chat_data['profiles'][index]['img_url'] = $(this).find(".url").val();
		}
	});

	$("#MessageBulder li").each(function (index) {

		chat_data['discussion'].push({});

		chat_data['discussion'][index]['text'] = $(this).find("textarea").val();

		chat_data['discussion'][index]['profile'] = $(this).attr('data-index');

	});

	preview_data();

}


$('#BtnPreview').click(function () {
	"use strict";
	build_array();
	console.log(chat_data);
});
