import {
    getFromLocalStorage,
    setLocalStorage,
} from './utils/getFromLocalStorage'

import { useState, useRef } from 'react'

import { ToDoCardList } from './components/toDoCard'
import { v4 as uuid } from 'uuid'

const App = () => {
    const [toDos, setToDos] = useState(getFromLocalStorage('toDos'))

    const formInput = useRef()
    const addToDoButton = useRef()

    const handleSubmit = () => {
        const today = new Date().toDateString()
        const newToDo = {
            id: uuid(),
            name: formInput.current.value,
            date: today,
        }
        return setLocalStorage('toDos', toDos, setToDos, newToDo)
    }

    return (
        <div>
            <input ref={formInput} />
            <button ref={addToDoButton} onClick={handleSubmit}>
                AddTodo
            </button>

            <div>
                <ToDoCardList toDos={toDos} />
            </div>
        </div>
    )
}

export default App
