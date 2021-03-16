import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader.gif';
import '../Search.css';
import PageNavigation from './PageNavigation';

class Search extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			query: '',
			results: {},
			loading: false, 
			message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
		}

		this.cancel = '';
	}

	getPageCount = ( total, denominator ) => { // pages calculation
		const divisible = 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
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
				const total = res.data.total;
				const totalPagesCount = this.getPageCount( total, 20 );
				const resultNotFoundMsg = ! res.data.hits.length 
					? 'There are no more search results. Please try a new search.'
					: '';

				this.setState( {
					results: res.data.hits,
					message: resultNotFoundMsg,
					totalResults: total,
					totalPages: totalPagesCount,
					currentPageNo: updatedPageNo,
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
			message: '',
			totalPages: 0,
			totalResults: 0
		}, () => { // Callback for setState method
			this.fetchSearchResults( '1', query );
		} );
	}

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	 handlePageClick = ( type, event ) => {
		event.preventDefault();
		const updatePageNo = 'prev' === type
			? parseInt(this.state.currentPageNo) - 1
			: parseInt(this.state.currentPageNo) + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};

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
		const { query, loading, message, currentPageNo, totalPages } = this.state;
		// const query = this.state.query; // it's equal for ES5

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

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

					{/*Navigation*/}
					<PageNavigation
						loading={loading}
						showPrevLink={showPrevLink}
						showNextLink={showNextLink}
						handlePrevClick={ ( event ) => this.handlePageClick('prev', event )}
						handleNextClick={ ( event ) => this.handlePageClick('next', event )}
					/>

					{/*	Result*/}
					{ this.renderSearchResults() }

					{/*Navigation*/}
					<PageNavigation
						loading={loading}
						showPrevLink={showPrevLink}
						showNextLink={showNextLink}
						handlePrevClick={ ( event ) => this.handlePageClick('prev', event )}
						handleNextClick={ ( event ) => this.handlePageClick('next', event )}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default Search
