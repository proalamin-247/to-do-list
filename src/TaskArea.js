import React, { useEffect, useState } from 'react';

const TaskArea = () => {
    const [tasks, setTasks]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=> res.json())
        .then(data=> setTasks(data));
    },[])

    

    return (
        <div className='container lg:w-6/12'>
            <div>
                {
                    tasks.map(task=>
                        <div className='bg-lime-200 p-2 m-2 border rounded flex justify-content-between' key={task._id}>
                            <div>
                                <h1 className='font-bold mb-2'>{task.name}</h1>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <button className='btn btn-danger'>Delete</button>
                            </div>
                        </div>    
                    )
                }
            </div>

        </div>
    );
};

export default TaskArea;