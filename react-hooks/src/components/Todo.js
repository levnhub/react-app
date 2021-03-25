import React, { useState } from 'react';
import Item from './Item';
import TodoForm from './TodoForm';

const Todo = () => {

	const initialState = [
		{
			text: 'Learn Hooks',
			isCompleted: false
		},
		{
			text: 'Get the JS Book',
			isCompleted: false
		},
		{
			text: 'Learn JavaScript',
			isCompleted: false
		}
	];

	// const resultArray = useState( initialState );
	// const todos = resultArray[0];
	// const setToDos = resultArray[1];

	const [ todos, setToDo ] = useState( initialState ); // Array destructuring, same above code

	const addToDo = ( text ) => {
		const newToDos = [ ...todos, { text, isCompleted: false } ];
		setToDo( newToDos );
	}

	const handleItemClick = ( index ) => {
		// Get all todos array from the state
		const newTodos = [ ...todos ];

		// Set isCompleted property to reverse of ehat its current calue is
		newTodos[ index ].isCompleted = ! newTodos[ index ].isCompleted;

		setToDo( newTodos );
	}
	

	const handleRemoveClick = ( index ) => {
		// Get all todos array from the state
		const newTodos = [ ...todos ];

		// Remove the click item from the array
		newTodos.splice( index, 1 );

		// Set state with the new array of todos with the updated value
		setToDo( newTodos );
	}
	

	return (
		<div className="todo-container">
			<h2 className="main-heading">Todo App</h2>
			<TodoForm addToDo={ addToDo } />
			<div>
				{ todos.length ? (
					todos.map( ( item, index ) => (
						<Item
							key={ `${item.text}-${index}` }
							todo={ item }
							index={ index }
							handleRemoveClick={ handleRemoveClick }
							handleItemClick={ handleItemClick }
						/>
					) )
				) : '' }
			</div>
		</div>
	)
}

export default Todo
