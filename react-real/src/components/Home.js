import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Post from './Post'

class Home extends Component {
	render() {
		return (
			// React.Fragment for "no extra div"
			<React.Fragment>
				<Nav/>
				Home
				<Post/>
				<Footer/>
			</React.Fragment>
		)
	}
}

export default Home
