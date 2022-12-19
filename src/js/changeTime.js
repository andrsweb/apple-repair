document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeTime()
} )

const changeTime = () => {
	const startHour = document.querySelector( '.start' )
	const endHour   = document.querySelector( '.end' )
	const date      = new Date
	const hours     = date.getHours()
	const start     = hours - 1
	const end       = hours + 2

	if( ! startHour && ! endHour ) return

	startHour.innerHTML = start

	endHour.innerHTML = end
}