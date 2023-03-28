import {
    getFromLocalStorage,
    setLocalStorage,
} from './utils/getFromLocalStorage'

import { useState, useRef } from 'react'

import { ToDoCard } from './components/toDoCard'
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
                {toDos ? (
                    toDos.map((toDo) => (
                        <ToDoCard
                            key={toDo.id}
                            name={toDo.name}
                            date={toDo.date}
                        />
                    ))
                ) : (
                    <p>No Todos, today</p>
                )}
            </div>
        </div>
    )
}

export default App
