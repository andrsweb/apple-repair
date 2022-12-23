document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeTime()
} )

const changeTime = () => {
	const startHour = document.querySelector( '.start' )
	const endHour   = document.querySelector( '.end' )
	const date      = new Date
	let hours       = date.getHours()
	let start       = hours - 1
	let end         = hours + 2

	if( ! startHour && ! endHour ) return

	start = start < 0 ? 23 : start
	end   = end > 23 ? ( end - 23 ) : end

	startHour.innerHTML = start
	endHour.innerHTML   = end
}