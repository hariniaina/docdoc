let sliders = document.querySelector('.sliders');
let p = sliders.parentNode;
let left = document.querySelector('.moveLeft');
let right = document.querySelector('.moveRight');
let nbre = sliders.children.length;
let slideWidth = sliders.children[0].offsetWidth;
let slidesWidth = sliders.offsetWidth;
let pWidth = p.offsetWidth;
let pos = 0;

left.addEventListener('click', function(){
	if( (slidesWidth + pos) >= pWidth ){
		pos = pos - slideWidth - 20;
		$(sliders).animate({
		    marginLeft: pos + 'px'
		}, 500);
	}else{
		$(sliders).animate({
		    marginLeft: pos - 15 + 'px'
		}, 400);
		$(sliders).animate({
		    marginLeft: pos + 'px'
		}, 100);
	};
});

right.addEventListener('click', function(){
	if( pos ){
		pos = pos + slideWidth + 20;
		$(sliders).animate({
		    marginLeft: pos + 'px'
		}, 500);
	}else{
		$(sliders).animate({
		    marginLeft: pos + 15 + 'px'
		}, 400);
		$(sliders).animate({
		    marginLeft: pos + 'px'
		}, 100);
	};	
});