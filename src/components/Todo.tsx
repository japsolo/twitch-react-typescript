import { TodoType } from "../types/types";

interface Props {
    todoData: Array<TodoType>;
    deleteTodo: (id: string) => void;
}

export const Todo = ({ todoData, deleteTodo }: Props) => {
    if (todoData.length === 0) {
        return <h2>Nothing to show!</h2>;
    }

    return (
        <ul>
            {todoData.map((oneTodo) => {
                return (
                    <li key={oneTodo.id}>
                        <h3>{oneTodo.text}</h3>
                        <p>{oneTodo.date}</p>
                        <button onClick={() => deleteTodo(oneTodo.id)}>DELETE</button>
                    </li>
                );
            })}
        </ul>
    );
};
