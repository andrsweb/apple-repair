import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    callForm()
    submitForm( '.form', '.form-response', 'send-form.php')
} )

const callForm = () => {
    const formWrapper = document.querySelector( '.form-wrapper')
    const formButton  = document.querySelectorAll( '.open-form' )
    setTargetElement( document.querySelector( '#form-lock' ) )

    formButton.forEach( button => {
        button.addEventListener( 'click', () => {
            if( ! formWrapper && ! formButton ) return

            if( ! formWrapper.classList.contains( 'opened' ) ) {
                formWrapper.classList.add( 'opened' )
                disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
            }
        } )
    } )

    formWrapper.addEventListener( 'click', e => {
        e.stopPropagation()

        const target = e.target

        if ( target.className && target.classList.contains( 'form-wrapper' ) ) {
			formWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
    } )

}

const submitForm = ( selector, response, php ) => {
	const forms	= document.querySelectorAll( selector )

	if( ! forms.length ) return

	forms.forEach( form => {
		form.addEventListener( 'submit', e => {
			e.preventDefault()

			const formResponse	= form.querySelector( response ),
					request		= new XMLHttpRequest(),
					formData		= new FormData( form )

			request.open( 'post', php, true )
			request.responseType = 'json'

			formResponse.classList.remove( ['success', 'error'] )
			formResponse.textContent = 'Обработка...'

			request.addEventListener( 'load', () => {
				if( request.status === 200 ){
					// If success.
					if( request.response.success ){
						form.classList.add( 'success' )
						form.classList.remove( 'error' )
						form.innerHTML = request.response.message
					}	else {	// If error.
						formResponse.classList.remove( 'success' )
						formResponse.classList.add( 'error' )
						formResponse.textContent = request.response.message
					}
				}	else {
					formResponse.classList.remove( 'success' )
					formResponse.classList.add( 'error' )
					formResponse.textContent = request.response
				}
			} )
			request.send( formData )
		} )
	} )
}