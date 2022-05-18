import React from 'react';
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        console.log(data);
        reset();
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h1>To Do list</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Title' {...register("name")} required />
                <textarea style={{ height: '5rem' }} className='mb-2' placeholder='Description' {...register("description")} required />
                <br />
                <input className='w-25' type="submit" value="Add To Do" />
            </form>
       </div>
    );
};

export default Home;