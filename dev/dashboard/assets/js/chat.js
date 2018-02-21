function preview_data() {
	$('#preview').html('');
	for (var i = 0; i < chat_data.discussion.length; i++) {
		var profile_msz;
	var profile_img = '';
	var profile_img_src = '';
	
		if ($('#preview li').length === 0) {
			//console.log(chat_data.discussion[i].profile - 1);
			profile_msz = '<li data-index="' + chat_data.discussion[i].profile + '" class="message-left">';
			profile_img = ' <div class="profile-img"><img alt="' + chat_data.profiles[chat_data.discussion[i].profile - 1].profile_name
 + '" src="' + chat_data.profiles[chat_data.discussion[i].profile - 1].img_url + '"></div>';
		} else {
			// if li last child data-index is same as index then assign same class as last child
			if ($('#preview li:last-child').attr('data-index') === chat_data.discussion[i].profile) {
				// if last child has class left assign left

				if ($('#preview li:last-child').hasClass('message-left')) {
					profile_msz = '<li data-index="' + chat_data.discussion[i].profile + '" class="message-left">';
				}

				// else assign right
				else {
					profile_msz = '<li data-index="' + chat_data.discussion[i].profile + '" class="message-right">';
				}


			} else {

				if ($('#preview li:last-child').hasClass('message-left'))
				// if last child has class left assign right
				{
					profile_msz = '<li data-index="' + chat_data.discussion[i].profile + '" class="message-right">';
					profile_img = ' <div class="profile-img"><img alt="' + chat_data.profiles[chat_data.discussion[i].profile - 1].profile_name
 + '" src="' + chat_data.profiles[chat_data.discussion[i].profile - 1].img_url + '"></div>';
				}

				// else assign left
				else {
					profile_msz = '<li data-index="' + chat_data.discussion[i].profile + '" class="message-left">';
					profile_img = ' <div class="profile-img"><img alt="' + chat_data.profiles[chat_data.discussion[i].profile - 1].profile_name
 + '" src="' + chat_data.profiles[chat_data.discussion[i].profile - 1].img_url + '"></div>';
				}

			}
		}

		profile_msz += '<figure>' + profile_img + '<figcaption>' + chat_data.discussion[i].text + '</figcaption></figure></li>';

		$('#preview').append(profile_msz);

	}

}
