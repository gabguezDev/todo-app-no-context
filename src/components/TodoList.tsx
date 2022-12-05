import { TodoItem } from "../components";
import { ITodoListProps } from "../interfaces/interfaces";

export const TodoList = ({
	todos,
	onDeleteTodo,
	onStatusTodoChange,
}: ITodoListProps): JSX.Element => {
	return (
		<ul className="list-group col-5">
			{todos.map(todo => (
				<TodoItem
					todo={todo}
					key={`todo-item-${todo.id}`}
					onDeleteTodo={onDeleteTodo}
					onStatusTodoChange={onStatusTodoChange}
				/>
			))}
		</ul>
	);
};
