/*!
 * jquery-quiz v0.0.1 - A simple jQuery quiz plugin.
 * Copyright (c) 2015 JC Hamill - 
 * License: MIT
 */






! function (a, b, c, d) {
	"use strict";
	a.quiz = function (b, d) {
		var e = this;
		e.$el = a(b), e.$el.data("quiz", e), e.options = a.extend(a.quiz.defaultOptions, d);
		var f = e.options.questions,
			g = f.length,
			h = e.options.startScreen,
			i = e.options.startButton,
			j = e.options.homeButton,
			k = e.options.resultsScreen,
			l = e.options.gameOverScreen,
			m = 1,
			n = 0,
			o = !1;
		e.methods = {
			init: function () {
				e.methods.setup(), a(c).on("click", i, function (a) {
					a.preventDefault(), e.methods.start()
				}), a(c).on("click", j, function (a) {
					a.preventDefault(), e.methods.home()
				}), a(c).on("click", ".answers a", function (a) {
					a.preventDefault(), e.methods.answerQuestion(this)
				}), a(c).on("click", "#quiz-next-btn", function (a) {
					a.preventDefault(), e.methods.nextQuestion()
				}),a(c).on("click", ".btn-next", function (a) {
					a.preventDefault(), e.methods.nextQuestion()
				}), a(c).on("click", "#quiz-finish-btn", function (a) {
					a.preventDefault(), e.methods.finish()
				}),a(c).on("click", "#quiz-restart-btn, #quiz-retry-btn", function (a) {
					a.preventDefault(), e.methods.restart()
				})
			},
			setup: function () {
				
				
				var b = "";

				e.options.counter && (b += '<div id="quiz-counter" ></div>'), b += '<div id="questions">', a.each(f, function (c, d) {
					$(".slider-list ul").append("<li>0</li>");
					b += '<div class="question-container" data-attr="'+d.popupData+'" data-btn-first="'+d.btnFirst+'" data-btn-second="'+d.btnSecond+'">', b += '<div class="que-wrap"><div class="que-media">' + d.img + "</div>", b += '<h2 class="que-headline">' + d.qHead + "</h2>", b += '<p class="question">' + d.q + "</p></div>", b += '<div class="que-hints"><p>' + d.hints + "</p></div>", b += "</div>"


					//b += '<div class="que-btns"><span class="que-btn-first">'+ d.btnFirst +'</span><span class="que-btn-second">' + d.btnSecond + "</span></div>", b += "</div>"

				}), b += "</div>", 0 === a(k).length && (b += '<div id="' + k.substr(1) + '">', b += '<p id="quiz-results"></p>', b += "</div>"), b += '<div id="quiz-controls">', b += '<p id="quiz-response"></p>', b += '<div id="quiz-buttons">', b += '<a href="javascript:void(0);" id="quiz-no-btn">No</a>', b += '<a href="javascript:void(0);" id="quiz-next-btn">Yes</a>', b += '<a href="javascript:void(0);" id="quiz-finish-btn">Finish</a>', b += '<a href="javascript:void(0);" id="quiz-restart-btn">Restart</a>', b += "</div>", b += "</div>", e.$el.append(b).addClass("quiz-container quiz-start-state"), a("#quiz-counter").hide(), a(".question-container").hide(), a(l).hide(), a(k).hide(), a("#quiz-controls").hide()
			},
			start: function () {
				e.$el.removeClass("quiz-start-state").addClass("quiz-questions-state"), a(h).hide(), a("#quiz-controls").show(), a("#quiz-finish-btn").hide(), a("#quiz-restart-btn").hide(), a("#questions").fadeIn(), a("#quiz-counter").fadeIn(), a(".question-container:first-child").fadeIn().addClass("active-question"), e.methods.updateCounter()
			},
			answerQuestion: function (b) {
				if (!o) {
					o = !0;
					var c = a(b),
						d = "",
						g = c.data("index"),
						h = m - 1,
						i = f[h].correctIndex;
					if (g === i) c.addClass("correct"), d = f[h].correctResponse, n++;
					else if (c.addClass("incorrect"), d = f[h].incorrectResponse, !e.options.allowIncorrect) return void e.methods.gameOver(d);
					a("#quiz-response").html(d), a("#quiz-controls").fadeIn(), "function" == typeof e.options.answerCallback && e.options.answerCallback(m, g === i)
				}
			},
			nextQuestion: function () {
				
				o = !1, a(".active-question").hide().removeClass("active-question").next(".question-container").fadeIn().addClass("active-question"), a("#quiz-controls").show(), ++m === g && (a("#quiz-next-btn").hide(), a("#quiz-finish-btn").show()), e.methods.updateCounter(), "function" == typeof e.options.nextCallback && e.options.nextCallback()
				
				$(".slider-list ul li").removeClass("active");
				$(".slider-list ul li").eq($(".active-question").index()).addClass("active");

				for (i = 0; i < $(".active-question").index(); i++) { 
				    $(".slider-list ul li").eq(i).addClass("answered");
				}

				console.log($(".active-question").index());
				$("#quiz-no-btn").html($(".active-question").attr("data-btn-first"));
				$("#quiz-next-btn").html($(".active-question").attr("data-btn-second"));
			},
			// popupShow: function () {
			// 	$(".questions").find(".active-question .quiz-popup").show();
			// },
			gameOver: function (b) {
				if (0 === a(l).length) {
					var c = "";
					c += '<div id="' + l.substr(1) + '">', c += '<p id="quiz-gameover-response"></p>', c += '<p><a href="javascript:void(0);" id="quiz-retry-btn">Retry</a></p>', c += "</div>", e.$el.append(c)
				}
				a("#quiz-gameover-response").html(b), a("#quiz-counter").hide(), a("#questions").hide(), a(l).show()
			},
			
			
			finish: function () {
				

				e.$el.removeClass("quiz-questions-state").addClass("quiz-results-state"), 
					a(".active-question").hide().removeClass("active-question"), 
					a("#quiz-counter").hide(), a("#quiz-response").hide(), 
					a("#quiz-finish-btn").hide(), a("#quiz-next-btn").hide(), 
					a("#quiz-restart-btn").show(), 
					a(k).show(),
					
				    a("#quiz-results").html("<div class='share-tweet-text'><span class='twittershare'> LAW or LOL?</span> You got " + n + " out of " + g + " correct! <span class='twittershare'> Share your scores and challenge your friends https://www.thequint.com/quintlab/law-or-lol-quiz/ </span> </div> <div class='result-text'></div>" + "<div class='social-share'><a target='_blank' class='twitter-share-button' href='javascript:void(0)'><i class='fa fa-twitter'></i></a><a target='_blank' class='facebook-share-button' href='https://www.facebook.com/sharer/sharer.php?u=https%3A//thequint.com/quintlab/law-or-lol-quiz/&amp;t=Can+you+tell+our+actual+laws+from+bogus+ones+we+made+up?'><i class='fa fa-facebook'></i></a></div>"),
					
					a('#showResult').val(n);
					
					"function" == typeof e.options.finishCallback && e.options.finishCallback()

			},
			
			
			
			
			restart: function () {
				
				a('#showResult').val('');
				e.methods.reset(), e.$el.addClass("quiz-questions-state"), a("#questions").show(), a("#quiz-counter").show(), a(".question-container:first-child").show().addClass("active-question"), e.methods.updateCounter()
			},
			reset: function () {
				o = !1, m = 1, n = 0, a(".answers a").removeClass("correct incorrect"), e.$el.removeClass().addClass("quiz-container"), a("#quiz-restart-btn").hide(), a(l).hide(), a(k).hide(), a("#quiz-controls").show(), a("#quiz-response").show(), a("#quiz-next-btn").show(), a("#quiz-counter").hide(), a(".active-question").hide().removeClass("active-question")
			},
			home: function () {
				e.methods.reset(), e.$el.addClass("quiz-start-state"), a(h).show(), "function" == typeof e.options.homeCallback && e.options.homeCallback()
			},
			updateCounter: function () {
				var b = e.options.counterFormat.replace("%current", m).replace("%total", g);
				a("#quiz-counter").html(b)
				
				/*setTimeout(function() {
				$(".counter").html("<span>Question</span>"+m);
				}, 300);
				//console.log(((((m-1)*100)/g)*(400-$(".bg img").width())/100) +"|"+ $(".bg img").width());
				var dist = ((((m-1)*100)/g)*($(".container").width()-$(".bg img").width())/100) 
				$(".bg img").css("transform","translateX("+dist+"px)");*/
				
				
				
			}
		}, e.methods.init()
	}, a.quiz.defaultOptions = {
		allowIncorrect: !0,
		counter: !0,
		counterFormat: "%current/%total",
		startScreen: "#quiz-start-screen",
		startButton: "#quiz-start-btn",
		homeButton: "#quiz-home-btn",
		resultsScreen: "#quiz-results-screen",
		gameOverScreen: "#quiz-gameover-screen"
	}, a.fn.quiz = function (b) {
		return this.each(function () {
			new a.quiz(this, b)
		})
	}
}(jQuery, window, document);
