document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeTime()
} )

const changeTime = () => {
	const startHour = document.querySelector( '.start' )
	const endHour   = document.querySelector( '.end' )
	const date      = new Date
	let hours     = date.getHours()
	const start     = hours - 1
	let end       = hours + 2

	if( ! startHour && ! endHour ) return

	if( hours = 0 ) start = 23
	if( hours = 24 ) end = 0
	if( hours > 24 ) end = -24


	startHour.innerHTML = start

	endHour.innerHTML = end
}