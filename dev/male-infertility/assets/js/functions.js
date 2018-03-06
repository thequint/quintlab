$(document).ready(function () {
	$('.assets a path,.assets a circle,.assets a polygon,.assets a text,.assets a rect').click(function () {
		//$('.modal-outer').show();
	
		
		$('.dialog-inner').find('h2').html($(this).closest('a').attr('data-headline'));
		$('.dialog-inner').find('p').html($(this).closest('a').attr('data-description'));
		
	});

	$('.modal-close').click(function () {
		//$('.modal-outer').hide();
		
		
	});

	$("path,circle,polygon,text,rect").mouseenter(function () {
		console.log("hover");
		$(this).closest("a").addClass("hover_class");
	})
	$("a").mouseleave(function () {
		console.log("leave");
		$(this).removeClass("hover_class");
	})
});



/**
 * dialog box v0.1
 * Ashwin Saxena
 */
;
(function (window) {

	'use strict';

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
		// callbacks
		onOpenDialog: function () {
			return false;
		},
		onCloseDialog: function () {
			return false;
		}
	}

	DialogFx.prototype._initEvents = function () {
		var self = this;

		// close action
		this.ctrlClose.addEventListener('click', this.toggle.bind(this));

		// esc key closes dialog
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

			// callback on close
			this.options.onCloseDialog(this);
		} else {
			
			classie.add(this.el, 'dialog--open');

			// callback on open
			this.options.onOpenDialog(this);
		}
		this.isOpen = !this.isOpen;
	};

	// add to global namespace
	window.DialogFx = DialogFx;

})(window);

/* call */


(function () {
	
	var  dlgtrigger=[];
	var  somedialog=[];
	var  dlg;
	
	console.log(document.querySelector('[data-dialog]'));
	console.log( document.getElementById("test1"));
	 
	for ( var i=1;i<=$('.assets a').length;i++)
		{
	dlgtrigger[i] = document.getElementById("element"+i),
	somedialog[i] = document.getElementById(dlgtrigger[i].getAttribute('data-dialog'));
	if(i==1)
			{
		dlg = new DialogFx(somedialog[i]);
		
		}
		dlgtrigger[i].addEventListener('click', dlg.toggle.bind(dlg));		
		}
	/*
	dlgtrigger[1] = document.getElementById("test2"),
	somedialog[1] = document.getElementById(dlgtrigger[1].getAttribute('data-dialog')),
	dlg[1] = new DialogFx(somedialog[1]);
	dlgtrigger[1].addEventListener('click', dlg[1].toggle.bind(dlg[1]));*/
	
	
	

})();
