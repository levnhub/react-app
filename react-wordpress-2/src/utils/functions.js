/**
 * Array: [1, 2, '...', 9, 10]
 * 
 * @param currentPage 
 * @param totalPages 
 */

export const createPaginationArray = ( currentPage, totalPages ) => {

  let loopableArray = [];
  let countOfDotItems = [];

  // If there is only one page
  if ( 1 === totalPages ) {
    return loopableArray;
  }

  /**
   * Push the twhi index items before the current page
   * 
   * 1, 2
   */
  if ( 0 < currentPage - 2 ) {
    loopableArray.push( currentPage - 2 );
  }

  if ( 0 < currentPage - 1 ) {
    loopableArray.push( currentPage - 1 );
  }

  // Push the current page index 1, 2,  3
  loopableArray.push( currentPage );

  /**
   * Push the two index items after the current page
   * 
   * 1, 2,  3, 4, 5
   */
  if ( totalPages >= currentPage + 1 ) {
    loopableArray.push( currentPage + 1 )
  }

  if ( totalPages >= currentPage + 2 ) {
    loopableArray.push( currentPage + 2 )
  }

  /**
   * Push the '...' at the begining of the array only if the difference between the 1st and the 2nd item is greater than 1
   */
  if ( 1 < loopableArray[0] - 1 ) {
    loopableArray.unshift( '...' );
    countOfDotItems += 1;
  }

  /**
   * Push the '...' at the end of the array only if the difference between the last and 2nd item is greater than 1
   */
  if ( 1 < totalPages - loopableArray[ loopableArray.length - ( 2 - countOfDotItems ) ] ) {
    loopableArray.push( '...' );
  }

  // Push first index item in the array if it does not already exist
  if ( -1 === loopableArray.indexOf( 1 ) ) {
    loopableArray.unshift( 1 );
  }

  // Push the last index item in the array if it does not already exists
  if ( -1 === loopableArray.indexOf( totalPages ) ) {
    loopableArray.push( totalPages );
  }

  return loopableArray;
}