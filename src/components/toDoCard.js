const ToDoCard = ({ id, name, date }) => {
    return (
        <div
            className="card"
            style={{ border: 'solid black 1px', marginTop: '5px' }}>
            <h2>{name}</h2>
            <h6>{id}</h6>
            <p>{date}</p>
        </div>
    )
}

const ToDoCardList = ({ toDos }) => {
    return toDos ? (
        toDos.map((toDo) => <ToDoCard key={toDo.id} {...toDo} />)
    ) : (
        <p>No Todos, today</p>
    )
}

export { ToDoCardList }
