import React from 'react'

export default ( props ) => {

	const {
		loading,
		showPrevLink,
		showNextLink,
		handlePrevClick,
		handleNextClick,
	} = props;

	return(
		<div className="page-link-container">
			<a
				href="#" 
				className={ 
					`page-link ${ showPrevLink ? 'show' : 'hide' } ${ loading ? 'greyed-out' : '' }` 
				}
				onClick={ handlePrevClick }
			>
				Prev
			</a>
			<a
				href="#" 
				className={ 
					`page-link ${ showNextLink ? 'show' : 'hide' } ${ loading ? 'greyed-out' : '' }`
				} 
				onClick={ handleNextClick }
			>
				Next
			</a>
		</div>
	)
}