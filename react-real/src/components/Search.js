import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader.gif';
import '../Search.css';

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
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		const searchUrl = `https://pixabay.com/api/?key=699399-f5beeeefea68c4e791581a1e9&q=${query}${pageNumber}`;

		if ( this.cancel ) { // Cancel token for Live Search opitimizing
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		} )
			.then( res => {
				// console.log( res.data );
				const resultNotFoundMsg = ! res.data.hits.length 
					? 'There are no more search results. Please try a new search.'
					: '';

				this.setState( {
					results: res.data.hits,
					message: resultNotFoundMsg,
					loading: false
				} )
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

	renderSearchResults = () => {
		const { results } = this.state; // pull results out from the state

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container">
					{ results.map( result => {
						return (
							<a key={ result.id } href={ result.previewURL } className="result-item">
								<h6 className="image-username">{ result.username }</h6>
								<div className="image-wrapper">
									<img src={ result.previewURL } alt={ `${result.username} image` } className="image"/>
								</div>
							</a>
						)
					} ) }
				</div>
			)
		}
	}
	

	render() {

		const { query, loading, message } = this.state;
		// const query = this.state.query; // it's equal for ES5

		return (
			<React.Fragment>
				{/* Form */}
				<form className="form-inline my-2 my-lg-0">
					<input 
						className="form-control mr-sm-2" 
						name="query" 
						placeholder="Search..." 
						value={query} 
						id="search-input" 
						onChange={ this.handleOnInputChange }
						type="search" 
						autoComplete="off"
					/>
					{/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
				</form>

				<div className={ `results ${ this.state.query ? 'show' : 'hide' }` }>
					{/* Error message */}
					{ message && <p className="message">{ message }</p> }
					{/* Loader */}
					<img src={ Loader } className={ `search-loading ${ loading ? 'show' : 'hide' }` } alt="Loader"/>
					{/* Result */}
					{ this.renderSearchResults() }
				</div>
			</React.Fragment>
		)
	}
}

export default Search
