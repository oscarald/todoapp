import React, { useState } from 'react'

function Form({addToDo}) {
    const [input, setInput] = useState("")
    const [condition, setCondition] = useState(false)
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input!==""){
            addToDo(input)
            setCondition(false)
        }else if(input === ""){
            setCondition(true)
        }
        setInput("")

    }
  return (
    <div className='mt-6 container mx-auto'>
        <div className='text-center text-4xl mb-5'>Aplicacion de To Do</div>
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleInput}
                    value={input}
                    placeholder="Escriba una tarea..."
                    className='bg-slate-200 border-solid border-2 border-indigo-400 p-1 rounded-md' 
                />
                <button
                    className='ml-5 border-solid border-2 border-indigo-500 px-4 py-2 rounded-md bg-indigo-400 text-white font-semibold hover:bg-indigo-500 '
                >Crear Tarea
                </button>
            </form>
            
        </div>
        {condition ? <p className='text-center'>Debe llenar una tarea</p> : <p className='inline-block'>  </p>}
    </div>
  )
}

export default Form