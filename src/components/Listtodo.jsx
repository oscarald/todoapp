import React from 'react'

function Listtodo({todos, completeToDo, deleteToDo}) {
   // console.log(todos)
  return (
    <>
        <h2 className='text-center text-2xl font-semibold my-10'>Lista de To Do</h2>
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
                                        <button 
                                            onClick={()=>(completeToDo(todo.id))}
                                            className='w-28 py-2 px-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 text-white text-center'
                                        >{todo.completed ? "Completo" : "Incompleto"}</button></td>
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