import React, { useState, useEffect } from 'react'
import axios from 'axios';
import clientConfig from '../../client-config';
import PostLoader from './PostLoader';
import Post from './Post';
import Pagination from './Pagination';

const Posts = ( props ) => {

  const pageId = parseInt( props.pageId );

  const [ currentPage, setCurrentPage ] = useState( pageId );
  const [ totalPages, setTotalPages ] = useState( 1 );
  const [ loading, setLoading ] = useState( false );
	const [ errMessage, setError ] = useState( '' );
  const [ posts, setPosts ] = useState( null );

  useEffect( () => {

    const wordPressSiteUrl = clientConfig.siteUrl;

    setLoading( true );

    axios.get( `${wordPressSiteUrl}/wp-json/rae/v1/posts?page_no=${ currentPage }` )
      .then( res => {
        setLoading( false );

        if ( 200 === res.data.status ) {
          setPosts( res.data.posts_data );
          setTotalPages( res.data.page_count );
        } else {
          setError( res.response.data.message ); // error =()
          // setError( 'Error!' );
        }
      } )
      .catch( err => {
        setError( err.response.data.message ); // error x()
      } )
  }, [ currentPage ] );

  const getPosts = ( posts ) => {
		return posts.map( post => <Post key={ post.id } post={ post } /> )
	}

  return (
    <React.Fragment>
			{ loading ? <PostLoader/> : '' }
			<div className="container blog" style={{ overflow: 'hidden' }}>
				{ ( ! loading && null !== posts && posts.length ) ? (
					<React.Fragment>
						{ getPosts( posts ) }
						<Pagination
							currentPage={ currentPage } 
							setCurrentPage={ setCurrentPage } 
							totalPages={ totalPages }
						/>
					</React.Fragment>
				): <div>{ errMessage }</div> }
			</div>
		</React.Fragment>
  )
}

export default Posts
