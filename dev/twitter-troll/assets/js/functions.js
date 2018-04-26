var content_array = [{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["Your", "A girl's", "Ladkiyon ki"]
			}, {
				row: ["clothes", "dress", "freedom"]
			}, {
				row: ["are always shorter than", "should never be smaller than", "should always be more restricted than"]
			}, {
				row: ["my", "a man's", "samaaj ki"]
			}, {
				row: ["chhoti soch", "cheap mindset", "parampara"]
			}]
		}]
	},

	{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["Itni der tak", "Ladkon ke saath", "Arey ladkiyon"]
			}, {
				row: ["baahar rehna", "party karna", "laughing loudly"]
			}, {
				row: ["can get you", "almost means you are", "matlab you will be"]
			}, {
				row: ["raped", "drunk", "stared"]
			}, {
				row: ["because people like me roam free", "which is not good for girls", "aur sharm onlookers ko aayegi"]
			}]
		}]
	},

	{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["Your place is", "Ladkiyan should stay", "It's better if girls remain"]
			}, {
				row: ["in the kitchen,", "ghar ke andar", "in confined places"]
			}, {
				row: ["warna bheja-fry", "otherwise creep out", "because stalk"]
			}, {
				row: ["main achhe se kar leta hun", "karne ke liye I'm here", "karne mein I'm an expert"]
			}]
		}]
	},

	{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["Oye Ladki", "Like a sanskari ladki", "Sharam kar aurat"]
			}, {
				row: ["don't wear this", "never wear", "stop wearing"]
			}, {
				row: ["revealing cloth", "tight jeans", "western dresses"]
			}, {
				row: ["This is a temple, Khajuraho temple", "Shorts-wearing men get distracted", "Men get morally corrupt, bade aaram se"]
			}]
		}]
	},

	{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["How dare you", "Himmat kaise hui", "Sharm nahin aayi when you decided"]
			}, {
				row: ["to do religious prayers periods mein?", "to choose your own life partner?"]
			}, {
				row: ["My uncles tell me", "Maa Baap ne bataya nahin"]
			}, {
				row: ["Devi Maa doesn't like it", "You disrespected the holy religion of Radha-Kishan"]
			}]
		}]
	},


	{
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["Wanna fraanship?", "Mere flirty messages ka", "If I am pestering you with calls"]
			}, {
				row: ["Answer karo", "jawaab de na"]
			}, {
				row: ["becoz I am kaafi privileged", "becoz I can't handle rejection"]
			}, {
				row: ["and ye mera ego hai", "and I will wait until I get blocked"]
			}]
		}]
	}, {
		set: [{
			category: "Sexist"
		}, {
			rows: [{
				row: ["You are", "Girls are"]
			}, {
				row: ["a 'sluts'", "untrustworthy"]
			}, {
				row: ["because you're not", "because they are usually not"]
			}, {
				row: ["a virgin wife!", " a gharelu ladki."]
			}, {
				row: ["All my 69 girlfriends were virgin", "Girls should preserve their sanctity"]
			}]
		}]
	},

	{
		set: [{
			category: "Political"
		}, {
			rows: [{
				row: ["Ohho, you don't trust this govt?", "You don't believe in Achhe Din?"]
			}, {
				row: ["You anti-national!", "Go to Pakistan!"]
			}, {
				row: ["I voted for change,", "I wanted a better govt,"]
			}, {
				row: ["because I didn't trust", "because I didn't believe in"]
			}, {
				row: ["the last sarkaar", "the beetey din"]
			}]
		}]
	},

	{
		set: [{
			category: "Political"
		}, {
			rows: [{
				row: ["Hey you bhakt,", "Sanghi ho kya?", "Right winger ho?"]
			}, {
				row: ["hamesha blame shift karte rehte ho!", "Always talking about your great leader!"]
			}, {
				row: ["I think you sanghi types are responsible for", "You should meet our leader, then you'd know you create"]
			}, {
				row: ["the problems, not us", "incapable politicians"]
			}]
		}]
	},

	{
		set: [{
			category: "Political"
		}, {
			rows: [{
				row: ["Abey sickular hai kya,", "Libtard ho kya?", "Left wale ho?"]
			}, {
				row: ["why so abusive and violent?", "Always so pessimist about everything!"]
			}, {
				row: ["I'll handle you all,", " I'll give you proper lessons"]
			}, {
				row: ["tu mil baahar, got it?", "for the historic mess you all have created."]
			}]
		}]
	}, {
		set: [{
			category: "Political"
		}, {
			rows: [{
				row: ["Teri party ke saare neta", "Opposition is cheating you,"]
			}, {
				row: ["criminals hain", "chor hain sab."]
			}, {
				row: ["vote for my candidate", "meet my party neta"]
			}, {
				row: ["as soon as he's out of jail", "after she has completed her life sentence."]
			}]
		}]
	}, {
		set: [{
			category: "Political"
		}, {
			rows: [{
				row: ["EVM hacked"]
			}, {
				row: ["is fake news"]
			}, {
				row: ["My vote went to the party I wanted,"]
			}, {
				row: ["even when galat button press hogaya tha."]
			}]
		}]
	},

];
var data_filter;

function random(filter) {
	$(".str").html("");
	var choose_setup = Math.floor(Math.random() * content_array.length);
	if (filter != null) {
		//console.log(content_array[choose_setup].set[0].category +"|"+ filter);
		if (content_array[choose_setup].set[0].category != filter) {
			random(filter);
			return;
		} else {
			// do nothing  
		}
		//$(".str").html(filter+"|"+content_array[choose_setup].set['category']);

	}

	//$(".str").html( content_array.length+"|"+choose_setup+"|"+content_array[0].set[0].row[0]);

	for (var i = 0; i < content_array[choose_setup].set[1].rows.length; i++) {
		//console.log(content_array[choose_setup].set[1].rows[i]);

		var choose_word = Math.floor(
			Math.random() * content_array[choose_setup].set[1].rows[i].row.length
		);
		if (i == 0) {
			$(".str").append(
				content_array[choose_setup].set[1].rows[i].row[choose_word]
			);
		} else {
			$(".str").append(
				"&nbsp;" + content_array[choose_setup].set[1].rows[i].row[choose_word]
			);
		}
	}
	
	$('.str').append($(this).text() + ' #TrollMagarPyaarSe')
	
	//$('.str').text() + '#');
}


$(".btn-generator").click(function () {
	if (data_filter == "null") {
		random();
	} else {
		random(data_filter);
	}
});
$(".btn-filter").click(function () {
	data_filter = $(this).attr("data-filter");
});




// Copy text

document.getElementById("btnCopy").addEventListener("click", function () {
	copyToClipboardMsg(document.getElementById("copyShare"), "msg");
});

function copyToClipboardMsg(elem, msgElem) {
	var succeed = copyToClipboard(elem);
	var msg;
	if (!succeed) {
		msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
	} else {
		//msg = "Text copied to the clipboard."
		msg = "copied"
	}
	if (typeof msgElem === "string") {
		msgElem = document.getElementById(msgElem);
	}
	msgElem.innerHTML = msg;
	setTimeout(function () {
		//msgElem.innerHTML = "Copy";
		msgElem.innerHTML = "";
	}, 2000);
}

function copyToClipboard(elem) {
	// create hidden text element, if it doesn't already exist
	var targetId = "_hiddenCopyText_";
	var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	var origSelectionStart, origSelectionEnd;
	if (isInput) {
		// can just use the original source element for the selection and copy
		target = elem;
		origSelectionStart = elem.selectionStart;
		origSelectionEnd = elem.selectionEnd;
	} else {
		// must use a temporary form element for the selection and copy
		target = document.getElementById(targetId);
		if (!target) {
			var target = document.createElement("textarea");
			target.style.position = "absolute";
			target.style.left = "-9999px";
			target.style.top = "0";
			target.id = targetId;
			document.body.appendChild(target);
		}
		target.textContent = elem.textContent;
	}
	// select the content
	var currentFocus = document.activeElement;
	target.focus();
	target.setSelectionRange(0, target.value.length);

	// copy the selection
	var succeed;
	try {
		succeed = document.execCommand("copy");
	} catch (e) {
		succeed = false;
	}
	// restore original focus
	if (currentFocus && typeof currentFocus.focus === "function") {
		currentFocus.focus();
	}

	if (isInput) {
		// restore prior selection
		elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	} else {
		// clear temporary content
		target.textContent = "";
	}
	return succeed;
}


// Toltip

$('.btn-circle').darkTooltip({
	animation: 'fadeIn'
});


$('.filter-men').click(function () {
	$('.filter-women').parent().removeClass('is-active');
	$(this).parent().addClass('is-active');
	$('.clear-all').show();
});

$('.filter-women').click(function () {
	$('.filter-men').parent().removeClass('is-active');
	$(this).parent().addClass('is-active');
	$('.clear-all').show();
});

$('.clear-all').click(function () {
	$('.filter-men').parent().removeClass('is-active');
	$('.filter-women').parent().removeClass('is-active');
	$(this).hide();
});
