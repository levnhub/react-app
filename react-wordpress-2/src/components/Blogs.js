import React from 'react'
import Navbar from './Navbar'
import Posts from './layouts/Posts'

const Blogs = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="mt-4 ml-4 post-container">
        <Posts pageId={ 1 } />
      </div>
    </React.Fragment>
  )
}

export default Blogs
