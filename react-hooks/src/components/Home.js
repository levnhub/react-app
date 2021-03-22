import React, { useState } from 'react'

const Home = () => { 

	// 

	const initialState = 0;

	const [ count, setCounter  ] = useState( initialState );

	const handleOnClick = () => {
		setCounter( count + 1 );
	}

	return (
		<div className="container">
			<button onClick={ handleOnClick }>Increment Counter</button>
			<p>{ count }</p>
			This is home
		</div>
	)
}

export default Home
