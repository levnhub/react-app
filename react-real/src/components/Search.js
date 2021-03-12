import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 query: '',
			 results: {},
			 loading: false, 
			 message: ''
		}

		this.cancel = '';
	}

	fetchSearchResults = ( updatedPageNo = '', query ) => {
		const pageNumber = updatedPageNo ? `&page=4${updatedPageNo}` : '';
		const searchUrl = `https://pixabay.com/api/?key=699399-f5beeeefea68c4e791581a1e9&q=${query}${pageNumber}`;

		if ( this.cancel ) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		} )
			.then( res => {
				// const resultNotFoundMsg = 
				console.log( res.data );
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState( {
						loading: false,
						message: 'Failed to fetch the data. Please check network.'
					} )
				}
			} );
	}
	
	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		// console.log(query);
		this.setState( { 
			query: query,
			loading: true,
			message: ''
		}, () => { // Callback for setState method
			this.fetchSearchResults( '1', query );
		} );
	}

	render() {

		const { query } = this.state;
		// const query = this.state.query; // it's equal for ES5

		return (
			<React.Fragment>
				<form className="form-inline my-2 my-lg-0">
					<input 
						className="form-control mr-sm-2" 
						name="query" 
						placeholder="Search..." 
						value={query} 
						id="search-input" 
						onChange={ this.handleOnInputChange }
						type="text" 
					/>
					<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
				</form>
			</React.Fragment>
		)
	}
}

export default Search
