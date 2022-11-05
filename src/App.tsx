// Components
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

// Hooks
import { useTodoHook } from "./hooks/useTodoHook";

import "./App.css";

function App() {
    const [todos, dispatch] = useTodoHook();

    const createTodoHandler = (newTodoText: string): void => {
        dispatch({
            type: "add",
            payload: {
                text: newTodoText,
            },
        });
    };

    const updateOrDeleteTodoHandler = (id: string, isDone?: boolean): void => {
        if (isDone !== undefined) {
            return dispatch({
                type: "update",
                payload: { id },
            });
        }

        dispatch({
            type: "delete",
            payload: { id },
        });
    };

    return (
        <div className="App">
            <h2>Todo List - TS</h2>
            <Form createTodo={createTodoHandler} />
            <Todo todoData={todos} updateOrDeleteTodo={updateOrDeleteTodoHandler} />
        </div>
    );
}

export default App;
