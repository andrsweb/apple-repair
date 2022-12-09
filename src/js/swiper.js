import Swiper, { Navigation } from "swiper";

document.addEventListener("DOMContentLoaded", () => {
	'use strict'

	initializeSwiper()
})

const initializeSwiper = () => {
	const commandSwiper = document.querySelector('.command-wrapper')

	if (!commandSwiper) return

	const swiper = new Swiper( '.command-wrapper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 100,

		modules: [Navigation],
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev'
		},

		breakpoints: {
			768: {
			}
		}
	})
}

