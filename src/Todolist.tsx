import React from "react"

interface TodoListProps{
    todo:{
        text: string,
        complete: boolean
    }

}


export const TodoListItem: React.FC<TodoListProps> = ({ todo }) => {
    return (
        <li>
            <label>
                <input type='checkbox' checked={todo.complete} />
                {todo.text}
            </label>
        </li>
    )
}