import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	goBack()
	toogleBurgerMenu()
	scrollToTop()
} )

const toogleBurgerMenu = () => {
	const burgerButton  = document.querySelector( '.burger-button' )
	const headerWrapper = document.querySelector( '.header-inner' )

	burgerButton.addEventListener( 'click', () => {
		setTargetElement( document.querySelector( '#body-lock' ) )

		if( ! burgerButton && ! headerWrapper ) return

		if( ! headerWrapper.classList.contains( 'opened' ) ) {
			headerWrapper.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
			disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
		} else {
			headerWrapper.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
	} )

	window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD &&  headerWrapper.classList.contains( 'opened' ) ) {
            headerWrapper.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }
    } )
}

const goBack = () => {
	const headerArrow = document.querySelectorAll( '.header-arrow' )

	headerArrow.forEach( arrow => {

		if ( ! headerArrow.length ) return

		arrow.addEventListener( 'click', () => {
			history.back()
		} )
	} )
}

const scrollToTop = () => {

	const scrollArrow = document.querySelector( '.scroll-img' )

	window.addEventListener( 'scroll', () => {
		if( ! scrollArrow ) return

		let scrollTop = window.scrollY

		if ( scrollTop > 100 ) {
			scrollArrow.classList.add( 'scrolled' )
		} else {
			if ( scrollTop < 100 ) {
				scrollArrow.classList.remove( 'scrolled' )
			}
		}
	})

	scrollArrow.addEventListener( 'click', () => {
		window.scrollTo( {
			top: 0,
			behavior: 'smooth'
		} )
	} )
}