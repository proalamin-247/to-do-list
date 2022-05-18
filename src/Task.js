import React from 'react';

const Task = ({task}) => {
    const {name, description}= task;

    return (
        <div className='bg-info p-2 m-2 rounded'>
           <div className='flex '>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <button className='btn btn-danger'>Delete Item</button>
                </div>
           </div>
        </div>
    );
};

export default Task;