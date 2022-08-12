// Deps
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// Types
import { TodoType, TodoAction } from "../types/types";

const todosReducer = (state: Array<TodoType>, action: TodoAction): Array<TodoType> => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload.text,
                    date: new Date().toLocaleDateString(),
                    isDone: false,
                },
            ];
        case "delete":
            return state.filter((oneTodo) => oneTodo.id !== action.payload.id);
        case "update":
            return state.map((oneTodo) => {
                if (oneTodo.id !== action.payload.id) {
                    return oneTodo.isDone ? { ...oneTodo, isDone: false } : { ...oneTodo, isDone: true };
                }
                return oneTodo;
            });
        default:
            return state;
    }
};

const INITIAL_STATE: Array<TodoType> = [
    {
        id: uuidv4(),
        text: "Learn more JS",
        date: new Date().toLocaleDateString(),
        isDone: false,
    },
    {
        id: uuidv4(),
        text: "Practice and thinking",
        date: new Date().toLocaleDateString(),
        isDone: false,
    },
    {
        id: uuidv4(),
        text: "Chill",
        date: new Date().toLocaleDateString(),
        isDone: false,
    },
];

export const useTodoHook = () => useReducer(todosReducer, INITIAL_STATE);
