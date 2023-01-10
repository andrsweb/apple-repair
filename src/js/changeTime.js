document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeTime()
} )

const changeTime = () => {
	const startHour = document.querySelectorAll( '.start' )
	const endHour   = document.querySelectorAll( '.end' )
	const date      = new Date
	let hours       = date.getHours()
	let start       = hours - 1
	let end         = hours + 2

	if( ! startHour && ! endHour ) return

	start = start < 0 ? 23 : start
	end   = end > 23 ? ( end - 23 ) : end

	startHour.forEach( hour => {
		hour.innerHTML = start
	} )

	endHour.forEach( hour => {
		hour.innerHTML   = end
	} )

}