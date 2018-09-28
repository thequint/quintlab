(function($) {
    $.fn.scrollCSS = function(additionalOptions) {
        var options = {
            cssProperty: "paddingLeft",
            cssStartVal: "0px",
            cssStopVal: "100px",
            scrollStartVal: 100,
            scrollStopVal: 800
        }
        options = $.extend(options, additionalOptions);
        $(this).each(function() {
            var $this = $(this);
            var cssStartVal = parseInt(options.cssStartVal);
            var cssUnit = options.cssStartVal.replace(cssStartVal, "");
            var cssStopVal = parseInt(options.cssStopVal);
            if (cssUnit == "") {
                cssUnit = options.cssStopVal.replace(cssStopVal, "");
            }
            var scrollStartVal;
            var scrollStopVal;
            $(window).on("ready load scroll resize", function() {
                if (!$("html").hasClass("touch")) {
                    if (options.scrollStartVal != parseInt(options.scrollStartVal)) {
                        if (options.scrollStartVal.indexOf("+") > -1) {
                            var scrollStartValArray = options.scrollStartVal.split("+");
                            scrollStartValAnchorOffset = $(scrollStartValArray[0]).offset().top;
                            scrollStartVal = parseInt(scrollStartValAnchorOffset) + parseInt(scrollStartValArray[1]);
                        } else if (options.scrollStartVal.indexOf("-") > -1) {
                            var scrollStartValArray = options.scrollStartVal.split("-");
                            scrollStartValAnchorOffset = $(scrollStartValArray[0]).offset().top;
                            scrollStartVal = parseInt(scrollStartValAnchorOffset) - parseInt(scrollStartValArray[1]);
                        } else {
                            scrollStartVal = $(options.scrollStartVal).offset().top;
                        }
                    } else {
                        scrollStartVal = options.scrollStartVal;
                    }
                    if (options.scrollStopVal != parseInt(options.scrollStopVal)) {
                        if (options.scrollStopVal.indexOf("+") > -1) {
                            var scrollStopValArray = options.scrollStopVal.split("+");
                            scrollStopValAnchorOffset = $(scrollStopValArray[0]).offset().top;
                            scrollStopVal = parseInt(scrollStopValAnchorOffset) + parseInt(scrollStopValArray[1]);
                        } else if (options.scrollStopVal.indexOf("-") > -1) {
                            var scrollStopValArray = options.scrollStopVal.split("-");
                            scrollStopValAnchorOffset = $(scrollStopValArray[0]).offset().top;
                            scrollStopVal = parseInt(scrollStopValAnchorOffset) - parseInt(scrollStopValArray[1]);
                        } else {
                            scrollStopVal = $(options.scrollStopVal).offset().top;
                        }
                    } else {
                        scrollStopVal = options.scrollStopVal;
                    }
                    var scrollVal = $(window).scrollTop();
                    var thisCss = {};
                    if (scrollVal < scrollStartVal) {
                        thisCss[options.cssProperty] = options.cssStartVal;
                        $this.css(thisCss);
                    } else if (scrollVal >= scrollStartVal && scrollVal <= scrollStopVal) {
                        var percentageDecimal = (scrollVal - scrollStartVal) / (scrollStopVal - scrollStartVal);
                        var cssVal = (cssStopVal - cssStartVal) * percentageDecimal + cssStartVal;
                        thisCss[options.cssProperty] = cssVal + cssUnit;
                        $this.css(thisCss);
                    } else if (scrollVal > scrollStopVal) {
                        thisCss[options.cssProperty] = options.cssStopVal;
                        $this.css(thisCss);
                    }
                }
            });
        });
        return this;
    };
})(jQuery);