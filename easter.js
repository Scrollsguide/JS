// settings for easter popup
var easterUrl = "http://example.org/random-page";
var easterTime = 180; // time in seconds before popup shows

var easter; 	// easter popup div
var visible = false; // is easter popup visible?

/**
 * Adds easter div to end of the body and initializes countdown
 * Overrides default css for .popupInner because of image content
 */
jQuery(document).ready(function(){
	// only show popup on easter page
	if (window.location.href != easterUrl){
		return;
	}
	
	jQuery("body").append("<div class='popupWrapper' id='easterPopup' style='position: absolute; z-index: 10001; display: none; height: 500px; width: 410px;'><div class='popupInner' style='width: 100%; height: 100%;'><div class='ipsPad'><img src='http://cubeworldforum.org/c2RhZg/Y3ViZXdvcmxkZm9ydW0ub3Jn.png' /></div></div></div>");
	
	// load easter div object
	easter = jQuery("#easterPopup");
	
	easter.click(function(){
		// hide popup on click and set visibility = false;
		easter.fadeOut(400, function(){
			visible = false;
		});
	});
	
	// start counting down for popup
	easterTime = easterTime * 1000;
	window.setTimeout("easterPopup()", easterTime);
});

/**
 * Moves the easter egg popup on scroll
 */
jQuery(window).scroll(function(){
	// only change position if popup is visible
	if (visible){
		easter.css({
			top: getPopupTop() + "px"
		});
	}
});

/**
 * Shows easter popup after calculating position based on screen size and scroll top
 */
function easterPopup(){
	var screenWidth = jQuery(window).width();
	
	var popupLeft = (screenWidth / 2) - (easter.width() / 2);
	var popupTop = getPopupTop();
	
	easter.css({
		"top": 	popupTop + "px",
		"left":	popupLeft + "px"
	});
	
	// fades in the popup and sets visible = true;
	easter.fadeIn(400, function(){
		visible = true;
	});
}

/**
 * Returns the absolute position for the popup
 */
function getPopupTop(){
	var screenHeight = jQuery(window).height();
	var screenTop = jQuery(window).scrollTop();
	
	var popupTop = screenTop + (screenHeight / 2) - (easter.height()  / 2);
	
	return popupTop;
}