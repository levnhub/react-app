import React, { useEffect } from 'react'

const MyChild = () => {

	useEffect(() => {
		console.log( 'Child component mounted' );
		return () => {
			console.log( 'Child component unmounted' );
		}
	}, [] ) // array for run effect only once (preserve infinite loops)

	return (
		<div>
			Child component
		</div>
	)
}

export default MyChild
