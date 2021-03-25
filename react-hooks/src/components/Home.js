import React, { useState } from 'react'
import Hierarchical from './Hierarchical';
import Todo from './Todo';

const Home = () => { 

	// 

	const initialState = 0;

	const [ count, setCounter  ] = useState( initialState );

	const handleOnClick = () => {
		setCounter( count + 1 );
	}

	return (
		<div className="container">
			<div className="container-side">
				<h2 className="main-heading">Counter</h2>
				<button onClick={ handleOnClick }>Increment Counter</button>
				<p>{ count }</p>
			</div>
			<div className="container-side">
				<Todo/>
			</div>
			<div className="container-side">
				<Hierarchical/>
			</div>
		</div>
	)
}

export default Home
