import Swiper, { Navigation } from "swiper"
import { getWindowWidth, WINDOW_WIDTH_MD } from "./common/global"

document.addEventListener("DOMContentLoaded", () => {
	'use strict'

})

const sliders = []

window.addEventListener('resize', () => {
	slidersInit('.command-wrapper')
})

export const slidersInit = selector => {

	const slider = document.querySelector(selector)

	if (! slider) return

	if (getWindowWidth() <= WINDOW_WIDTH_MD) initSlider(slider)
	else destroySlider( slider.id )
}

const initSlider = slider => {
	if (!slider || slider.classList.contains('swiper-initialized')) return

	const id = slider.id ? slider.id.trim() : ''
	let swiper

	if (!id) return

	const prevEl = slider.querySelector( '.swiper-prev' )
	const nextEl = slider.querySelector( '.swiper-next' )

	swiper = new Swiper(`#${id}`, {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 100,

		modules: [Navigation],
		navigation: {
			nextEl: nextEl,
			prevEl: prevEl
		}
	})

	sliders.push({
		id,
		slider: swiper
	})
}

const destroySlider = ( sliderId ) => {
	sliders.forEach( ( slider, i ) => {
		if( slider.id === slider.id ) {
			slider.slider.destroy()
			sliders.splice( i, 1 )
		}
	} )
}


