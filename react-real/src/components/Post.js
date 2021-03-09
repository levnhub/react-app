import React, { Component } from 'react';
import './../Post.css';

class Post extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 posts: [],
			 loading: true
		}
	};

	// _isMounted = false; // if it is mount error

	componentDidMount() {
		// this._isMounted = true;
		fetch('http://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(jsonData => {
				this.setState( { 
					posts: jsonData,
					loading: false
				} );
				// if ( this._isMounted ) {
				// 	this.setState( { 
				// 		posts: jsonData,
				// 		loading: false
				// 	} );
				// }
			})
	}

	renderPostItems() {
		const postData = this.state.posts;
		if ( postData.length ) {
			return postData.map( post => (
				<div className="card border-primary mb-3" key={ post.id } style={{ maxWidth: '20rem' }}>
					<div className="card-header">{ post.id }</div>
					<div className="card-body">
						<h4 className="card-title">{ post.title }</h4>
						<p className="card-text">{ post.body }</p>
					</div>
				</div>
			) );
		}
	}

	// componentWillUnmount() {
	// 	this._isMounted = false;
	// }

	render() {
		return (
			<div className="my-posts">
				{ this.state.loading && <p>Loading...</p> }
				{ this.renderPostItems() }
			</div>
		)
	}
}

export default Post
