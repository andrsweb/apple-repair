import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toogleBurgerMenu()
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
			disableBodyScroll( getTargetElement() )
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