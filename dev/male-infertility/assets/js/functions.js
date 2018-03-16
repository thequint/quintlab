$('.assets a').click(function () {
	$("#" + $(this).attr("data-audio"))[0].play();
});


$('.assets a path,.assets a circle,.assets a polygon,.assets a text,.assets a rect').click(function () {
	$('.dialog-inner').find('h2').html($(this).closest('a').attr('data-headline'));
	$('.dialog-inner').find('p').html($(this).closest('a').attr('data-description'));
	$('.dialog-inner').find('span').html($(this).closest('a').attr('data-source'));

});

$("path,circle,polygon,text,rect").mouseenter(function () {
	console.log("hover");
	$(this).closest("a").addClass("hover_class");
})
$("a").mouseleave(function () {
	console.log("leave");
	$(this).removeClass("hover_class");
});


var support = {
		animations: Modernizr.cssanimations
	},
	animEndEventNames = {
		'WebkitAnimation': 'webkitAnimationEnd',
		'OAnimation': 'oAnimationEnd',
		'msAnimation': 'MSAnimationEnd',
		'animation': 'animationend'
	},
	animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
	onEndAnimation = function (el, callback) {
		var onEndCallbackFn = function (ev) {
			if (support.animations) {
				if (ev.target != this) return;
				this.removeEventListener(animEndEventName, onEndCallbackFn);
			}
			if (callback && typeof callback === 'function') {
				callback.call();
			}
		};
		if (support.animations) {
			el.addEventListener(animEndEventName, onEndCallbackFn);
		} else {
			onEndCallbackFn();
		}
	};

function extend(a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}

function DialogFx(el, options) {
	this.el = el;
	this.options = extend({}, this.options);
	extend(this.options, options);
	this.ctrlClose = this.el.querySelector('[data-dialog-close]');
	this.isOpen = false;
	this._initEvents();
}

DialogFx.prototype.options = {
	onOpenDialog: function () {
		return false;
	},
	onCloseDialog: function () {
		return false;
	}
}

DialogFx.prototype._initEvents = function () {
	var self = this;
	this.ctrlClose.addEventListener('click', this.toggle.bind(this));

	document.addEventListener('keydown', function (ev) {
		var keyCode = ev.keyCode || ev.which;
		if (keyCode === 27 && self.isOpen) {
			self.toggle();
		}
	});

	this.el.querySelector('.dialog__overlay').addEventListener('click', this.toggle.bind(this));
}

DialogFx.prototype.toggle = function () {
	var self = this;
	if (this.isOpen) {
		console.log("close");
		classie.remove(this.el, 'dialog--open');
		classie.add(self.el, 'dialog--close');

		onEndAnimation(this.el.querySelector('.dialog__content'), function () {
			classie.remove(self.el, 'dialog--close');
		});
		this.options.onCloseDialog(this);
	} else {

		classie.add(this.el, 'dialog--open');
		this.options.onOpenDialog(this);
	}
	this.isOpen = !this.isOpen;
};

window.DialogFx = DialogFx;
var dlgtrigger = [];
var somedialog = [];
var dlg;

console.log(document.querySelector('[data-dialog]'));
console.log(document.getElementById("test1"));

for (var i = 1; i <= $('.assets a').length; i++) {
	dlgtrigger[i] = document.getElementById("element" + i),
		somedialog[i] = document.getElementById(dlgtrigger[i].getAttribute('data-dialog'));
	if (i == 1) {
		dlg = new DialogFx(somedialog[i]);

	}
	dlgtrigger[i].addEventListener('click', dlg.toggle.bind(dlg));
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt_2(min, max) {
	return Math.random() * (max - min + 1) + min;
}
$(".sperm-bg li").each(function () {
	var random_no = getRandomInt(0, $(".sperm-bg li").length);
	var random_no_2 = getRandomInt_2(2, 8);
	$(this).css("top", random_no * 100 / $(".sperm-bg li").length + "%")
	$(this).css("animation-duration", random_no_2 + "s")

});


$(window).load(function () {
	$('.inner-container').show();
	$('#preloader').hide();
});
