let sliders = document.querySelector('.sliders');
let p = sliders.parentNode;
let right = document.querySelector('.moveLeft');
let left = document.querySelector('.moveRight');
let nbre = sliders.children.length;
let slideWidth = sliders.children[0].offsetWidth;
let slidesWidth = sliders.offsetWidth;
let pWidth = p.offsetWidth;
let pos = -15;
let div = document.querySelectorAll('.div .slidesBox');

left.addEventListener('click', function(){
	if( (slidesWidth + pos -100) >= pWidth ){
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
	if( pos < -15 ){
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

for(var i=0; i<div.length; i++){
	(function(x){
		div[x].addEventListener('mouseover', function(){
			if(div[x].nextElementSibling.classList.contains('msgBoxOuted')){
				div[x].nextElementSibling.classList.remove('msgBoxOuted');
			};
			if(div[x].children[0].children[0].children[0].children[0].classList.contains('imgNoScale')){
				div[x].children[0].children[0].children[0].children[0].classList.remove('imgNoScale');
			};
			div[x].nextElementSibling.classList.add('msgBoxHovered');
			div[x].children[0].children[0].children[0].children[0].classList.add('imgScale');
		});
		div[x].addEventListener('mouseout', function(){
			div[x].nextElementSibling.classList.remove('msgBoxHovered');
			div[x].children[0].children[0].children[0].children[0].classList.remove('imgScale');
			div[x].nextElementSibling.classList.add('msgBoxOuted');
			div[x].children[0].children[0].children[0].children[0].classList.add('imgNoScale');
		});
	})(i);
	(function(x){
		div[x].nextElementSibling.addEventListener('mouseover', function(){
			if(div[x].nextElementSibling.classList.contains('msgBoxOuted')){
				div[x].nextElementSibling.classList.remove('msgBoxOuted');
			};
			if(div[x].children[0].children[0].children[0].children[0].classList.contains('imgNoScale')){
				div[x].children[0].children[0].children[0].children[0].classList.remove('imgNoScale');
			};
			div[x].nextElementSibling.classList.add('msgBoxHovered');
			div[x].children[0].children[0].children[0].children[0].classList.add('imgScale');
		});
		div[x].nextElementSibling.addEventListener('mouseout', function(){
			div[x].nextElementSibling.classList.remove('msgBoxHovered');
			div[x].children[0].children[0].children[0].children[0].classList.remove('imgScale');
			div[x].nextElementSibling.classList.add('msgBoxOuted');
			div[x].children[0].children[0].children[0].children[0].classList.add('imgNoScale');
		});
	})(i);
};