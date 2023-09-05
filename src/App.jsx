import  { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [inputText, setInputText] = useState("")
    const [tasks, setTasks] = useState([])


const handleInputChange = (event) =>{
        setInputText(event.target.value)
}

const addTask = () => {
        setTasks([...tasks, inputText])
        setInputText('')
        console.log(tasks)
}

    return(
        <div>
            <div>
                <input onChange={handleInputChange}
                       placeholder='Введите задачу'
                       value={inputText}
                />
                <button onClick={addTask}>Добавить задачу</button>
            </div>
            <div>
                <h1>Список задач</h1>
                    <ol>
                        {tasks.map((task)=>(
                            <li>{task}</li>
                        )) }
                    </ol>
            </div>
        </div>
    )
}

export default App
