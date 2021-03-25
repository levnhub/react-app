import React, { useState } from 'react'
import MyChild from './MyChild';

const Hierarchical = () => {

	const [ showItem, setShowItem ] = useState( false );

	// Moved to child component 
	// useEffect( () => {
	// 	console.log( 'useEffect Called' );
	// 	// document.body.addEventListener( 'click', somefunc );
	// 	// return () => {
	// 	// 	document.body.removeEventListener( 'click', somefunc );
	// 	// }
	// } )

	// useEffect( () => {
	// 	console.log( 'useEffect 2 Called' );
	// } )

	// console.log( showItem );

	// With useEffect we don't need something like this:
	// componentDidMount() {
	// 	document.body.addEventListener( 'click', somefunc );
	// }
	// componentDidUnmount() {
	// 	document.body.removeEventListener( 'click', somefunc );
	// }

	return (
		<div>
			Hello
			<button className="" onClick={ () => setShowItem( ! showItem ) }>Toggle</button>
			{ showItem ? <MyChild /> : '' }
		</div>
	)
}

export default Hierarchical
