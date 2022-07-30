import React, { useState } from 'react'

function Form({addToDo}) {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input!==""){
            addToDo(input)
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
                    className='bg-slate-200 border-solid border-2 border-indigo-400 p-1 rounded-md' 
                />
                <button
                    className='ml-5 border-solid border-2 border-indigo-500 px-4 py-2 rounded-md bg-indigo-400 text-white font-semibold hover:bg-indigo-500 '
                >Crear Tarea
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form