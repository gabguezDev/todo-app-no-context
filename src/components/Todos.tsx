import { TodoList, AddTodo, DeleteAllTodos } from "../components";
import { useHandleTodos } from "../hooks";

export const Todos = () => {
	const {
		handleNewTodo,
		handleDeleteAllTodos,
		handleDeleteTodo,
		handleChangeTodoStatus,
		todos,
		todosCounter,
		pendingTodos,
	} = useHandleTodos();

	return (
		<>
			<h1 className="text-center h1">Simple To Do App with React & Ts</h1>
			<h3 className="text-center h1">Todos: {todosCounter}</h3>
			<h3 className="text-center h1">Pending: {pendingTodos}</h3>
			<hr />
			<div className="row">
				<TodoList
					todos={todos}
					onDeleteTodo={handleDeleteTodo}
					onStatusTodoChange={handleChangeTodoStatus}
				/>

				<div className="col-5">
					<h4>Agregar TO DO</h4>

					<AddTodo onNewTodo={handleNewTodo} />
					<DeleteAllTodos onDeleteAllTodos={handleDeleteAllTodos} />
				</div>
			</div>
		</>
	);
};
