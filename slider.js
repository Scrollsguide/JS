var slideTimeOut = 8000; // delay between slide changes
var slideTime = 500; // animation time
var slideWidth; // width of a single slide in px
var slideId;

var curSlide = 0;
var numSlides;

var direction = 1; // 1 = right, -1 = left, init direction

var slideTimer;

jQuery(document).ready(function(){
	slideId = jQuery("#slidercontent");
	
	slideWidth = slideId.children().eq(0).width();
	numSlides = slideId.children().length;
	slideId.css("width", (numSlides * slideWidth) + "px");
	slideTimer = setTimeout('nextSlide()', slideTimeOut);
});

function nextSlide(){	
	
	if (curSlide >= numSlides - 1){
		direction = -1; // reverse direction
	}
	if (curSlide <= 0){
		direction = 1; // reverse direction
	}
	
	curSlide+= direction;
	toSlide(curSlide);	
	
	slideTimer = setTimeout('nextSlide()', slideTimeOut);
	
}

function toSlide(nr){
	var newMargin = slideWidth * nr; 
	slideId.animate({ "margin-left":  "-" + newMargin + "px" }, slideTime);
}