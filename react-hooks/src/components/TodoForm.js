import React, { useState } from 'react'

const TodoForm = ( { addToDo } ) => {

	const [ value, setValue ] = useState( '' );

	const onFormSubmit = ( event ) => {
		event.preventDefault();

		if ( ! value ) return;

		addToDo( value );
	}

	const handleOnChange= ( event ) => {
		setValue( event.target.value );
	}

	return (
		<form onSubmit={ onFormSubmit }>
			<label className="form-label">
				Add task: 
				<input 
					type="text" 
					className="form-input"
					placeholder="Enter new task"
					value={ value }
					onChange={ handleOnChange }
				/>
			</label>
		</form>
	)
}

export default TodoForm
