import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import '../Form.css'

export class AddPost extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 title: '',
			 body: ''
		}
	}

	handleOnInputChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } ); // equal operator
	}

	onFormSubmit = ( event ) => {
		event.preventDefault();
		console.log( this.state );

		const formData = {
			title: this.state.title,
			body: this.state.body
		}

		fetch( 'https://jsonplaceholder.typicode.com/posts', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, *cors, same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			// redirect: 'follow', // manual, *follow, error
			// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(formData) // body data type must match "Content-Type" header
		} )
			.then( response => console.log( 'Form submitted', response.json() ) ); // parses JSON response into native JavaScript objects
	}

	render() {
		console.log( this.state );
		return (
			<React.Fragment>
				<Nav/>
				<form className="my-form" onSubmit={ this.onFormSubmit }>
					<fieldset>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input onChange={ this.handleOnInputChange } type="text" name="title" className="form-control" id="title"/>
						</div>
						<div className="form-group">
							<label htmlFor="body">Example textarea</label>
							<textarea onChange={ this.handleOnInputChange } name="body" className="form-control" id="body" rows="3"/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</fieldset>
				</form>
				<Footer/>
			</React.Fragment>
		)
	}
}

export default AddPost
