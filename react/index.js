// ... the starter code you pasted ...

const domContainer = document.getElementById( 'root' );
console.log( domContainer );

const newElement = React.createElement( 'p', { className: 'my-class' }, 'This is paragraph' );
console.log( newElement );

ReactDOM.render( newElement, domContainer );