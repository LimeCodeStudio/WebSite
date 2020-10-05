const imgslide = document.querySelector('.img-slide');
const images = document.querySelectorAll('.img-slide img');


const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = images[0].clientWidth;

imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', ()=>{
	if (counter >= images.length - 1) return;
	imgslide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', ()=>{
	if (counter <= 0) return;
	imgslide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imgslide.addEventListener('transitionend', ()=> {
	if (images[counter].id === 'lastClone'){
		imgslide.style.transition = "none";
		counter = images.length - 2;
		imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}

	if (images[counter].id === 'firstClone'){
		imgslide.style.transition = "none";
		counter = images.length - counter;
		imgslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})