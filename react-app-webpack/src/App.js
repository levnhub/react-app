import React from 'react';
import './style.css';
import Raumskaya from './raumskaya.png';
import Moda from './moda.jpg';

class App extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			name: ''
		}
	}
	
	handleButtonClickEvent = ( event ) => {
		this.setState( { name: 'ma4ine' } );
	}

	render() {
		return (
			<div>
				<h1>This is my React Component</h1>
				<button onClick={ this.handleButtonClickEvent }>Click Me!</button>
				{ this.state.name && <p>{ this.state.name }</p> }

				<img src={ Raumskaya } alt="Raumskaya Image" />
				<img src={ Moda } alt="Moda Image" />
			</div>
		)
	}
}

export default App
