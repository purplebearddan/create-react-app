const getFromLocalStorage = (key, defaultValue = []) => {
    const currentValue = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : defaultValue
    return currentValue
}

const setLocalStorage = (key, state, setState, newValue) => {
    const currentValue = getFromLocalStorage(key)

    const newState = [newValue, ...currentValue]

    setState(newState)

    localStorage.setItem(key, JSON.stringify(newState))

    return state
}

export { getFromLocalStorage, setLocalStorage }
