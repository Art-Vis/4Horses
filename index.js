document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.participant__btn-next',
			prevEl: '.participant__btn-prev',
		},
		on: {
			init: function () {
				updateCounter(this);
			},
			slideChange: function () {
				updateCounter(this);
			},
		},
		breakpoints: {
			'@0.00': {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			'@0.75': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'@1.00': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
	var swiper = new Swiper('.myTransformationSwiper', {
		spaceBetween: 30,
		pagination: {
			el: '.counter',
			clickable: true,
		},
		navigation: {
			nextEl: '.transformation__btn-next',
			prevEl: '.transformation__btn-prev',
		},
	});

	function updateCounter(swiper) {
		const currentIndex = swiper.realIndex + 3;
		const currentIndexMobile = swiper.realIndex + 1;
		const totalSlides = swiper.slides.length;
		document.querySelector(
			'.control__counter'
		).innerHTML = `<span>${currentIndex}</span> <span class="grey">/ ${totalSlides}</span>`;
		document.querySelector(
			'.control__counter-mobile'
		).innerHTML = `<span>${currentIndexMobile}</span> <span class="grey">/ ${totalSlides}</span>`;
	}
});
