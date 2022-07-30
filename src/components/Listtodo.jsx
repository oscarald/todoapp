import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function Listtodo({todos, completeToDo, deleteToDo}) {
   // console.log(todos)
  return (
    <>
        <h2 className='text-center text-2xl font-semibold my-6'>Lista de To Do</h2>
        <div className='flex justify-center'>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='w-64 text-center'>Task</th>
                        <th className='w-36 text-center'>Complete</th>
                        <th className='w-36 text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            todos.length>0
                            ? todos.map(todo=>(
                                <tr key={todo.id}>
                                    <td>{todo.completed ? <span className='font-semibold'>👌 {todo.task}</span>  : <span className='underline decoration-pink-500'>👋 {todo.task}</span>} </td>
                                    <td className='text-center'> 
                                        
                                        <label htmlFor={todo.id} >
                                        <input 
                                            type="checkbox" 
                                            name="icon" 
                                            id={todo.id}
                                            className='absolute h-8 w-8  m-1 p-4 appearance-none border-2 rounded-xl border-indigo-800'
                                            onClick={()=>(completeToDo(todo.id))}
                                            />
                                        {todo.completed 
                                        ? <FontAwesomeIcon className='transition ease-in duration-500 relative top-1 left-1  m-1 text-3xl text-indigo-800' icon={faCheck} />
                                        : <FontAwesomeIcon className='transition ease-in duration-500 relative top-1 left-1  pl-1 m-1 text-3xl text-indigo-800' icon={faXmark} /> 
                                        }
                                        </label>
                                         
                                    </td>
                                    <td className='text-center'> 
                                        <button 
                                            onClick={()=>(deleteToDo(todo.id))}
                                            className='py-2 px-5 bg-pink-600 rounded-lg hover:bg-pink-700 text-white text-center'
                                        >Borrar</button></td>
                                     
                                </tr>
                            ))
                            : <tr><td className='text-center font-semibold decoration-solid'>No hay Tareas para mostrar</td></tr>       
                        }
                    
                </tbody>
            </table>

        </div>
    </>
  )
}

export default Listtodo