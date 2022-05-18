import React from 'react';
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        const url = `http://localhost:5000/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            });
        console.log(data);
        reset();
    }
    return (
        <div className='w-50 mx-auto mt-3 container'>
            <h1 className='text-center text-2xl'>To Do list</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2  border-2 bg-slate-100 ' placeholder='Title' {...register("name")} required />
                <textarea style={{ height: '5rem' }} className='mb-2 border-slate-00 border-2 bg-slate-100 ' placeholder='Description' {...register("description")} required />
                <br />
                <input className='border-black border-2 bg-slate-100' type="submit" value="Add To Do" />
            </form>
            
       </div>
    );
};

export default Home;