const ToDoCard = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.date}</p>
        </div>
    )
}

export { ToDoCard }
