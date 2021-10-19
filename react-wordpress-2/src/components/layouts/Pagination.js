import React from 'react'
import { createPaginationArray } from '../../utils/functions'
import { Link } from '@reach/router'

const Pagination = ( props ) => {

  const { currentPage, setCurrentPage, totalPages } = props;
  
  const isThereNextPage = currentPage < totalPages;
  const isTherePreviousPage = currentPage > 1;
  const paginationArray = createPaginationArray( currentPage, totalPages );

  const getPageLink = ( pageNo ) => {
    return `/page/${ pageNo }`;
  }

  return (
    <div className="pagination">
      { isTherePreviousPage && 
      <Link 
        to={ getPageLink( currentPage - 1 ) } 
        onClick={ () => setCurrentPage( currentPage - 1 ) }
        className="prev" >
        Previous
      </Link> }

      { paginationArray && 
        paginationArray.map( ( item, index ) => {
          // If the item is not equal to '...', and the value is not equal to current page
          if ( '...' !== item && currentPage !== item ) {
            return (
              // Page number links
              <React.Fragment key={ `${ item }-${ index }` }>
                <Link to={ getPageLink( item ) } onClick={ () => setCurrentPage( item ) }>
                  <span className="page-no">{ item }</span>
                </Link>
              </React.Fragment>
            )
          } else {
            return(
              <span key={ `${ item }-${ index }` }>
                <span className={ currentPage === item ? 'page-no active' : 'page-dots' }>{ item }</span>
              </span>
            )
          }
        } )
      }

      { isThereNextPage && 
      <Link 
        to={ getPageLink( currentPage + 1 ) } 
        onClick={ () => setCurrentPage( currentPage + 1 ) }
        className="next" >
        Next
      </Link> }
    </div>
  )
}

export default Pagination
