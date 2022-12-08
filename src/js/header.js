document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toogleBurgerMenu()
} )

const toogleBurgerMenu = () => {
	const burgerButton  = document.querySelector( '.burger-button' )
	const headerWrapper = document.querySelector( '.header-wrapper' )

	burgerButton.addEventListener( 'click', () => {

		if( ! burgerButton && ! headerWrapper ) return

		if( ! headerWrapper.classList.contains( 'opened' ) ) {
			headerWrapper.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
		} else {
			headerWrapper.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
		}
	} )

}