import React from 'react'

const Item = ( { todo, index, handleRemoveClick, handleItemClick } ) => {
	return (
		<div className="todo">
			<h3 
				className={ todo.isCompleted ? 'strike-throught' : '' }
				onClick={ () => handleItemClick( index ) }
			>
				{ todo.text }
			</h3>
			<span className="remove-item-cross" onClick={ () => handleRemoveClick( index ) }>✕</span>
		</div>
	)
}

export default Item
