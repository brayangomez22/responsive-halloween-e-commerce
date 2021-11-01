let searchForm = document.querySelector('#search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
};

let navbar = document.querySelector('#nav-menu');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
};

// scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .nav__menu .nav__link');

window.onscroll = () => {
	searchForm.classList.remove('active');
	navbar.classList.remove('active');

	if (window.scrollY > 0) {
		document.querySelector('.header').classList.add('active');
	} else {
		document.querySelector('.header').classList.remove('active');
	}

	section.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 200;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach((link) => {
				link.classList.remove('active');
				document.querySelector('.header .nav__menu a[href*=' + id + ']').classList.add('active');
			});
		}
	});
};

window.onload = () => {
	if (window.scrollY > 0) {
		document.querySelector('.header').classList.add('active');
	} else {
		document.querySelector('.header').classList.remove('active');
	}
};

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SWIPER ANIMATION ===============*/
var swiper = new Swiper('.home-slider', {
	spaceBetween: 20,
	effect: 'fade',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
});

var swiper = new Swiper('.products-slider', {
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true
});

sr.reveal(`.home-slider, .products-slider`);
sr.reveal(`.about__content, .arrivals__box, .footer__box, .blogs__box`, { interval: 100 });
sr.reveal(`.contact__map`, { origin: 'left' });
sr.reveal(`.contact__form`, { origin: 'right' });
