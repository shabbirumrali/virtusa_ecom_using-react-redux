import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div>
        <h1>Register Form</h1>
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>
                        <span>User name</span>
                        <input type="text" placeholder='user name' {...register("username", { required: true })} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>last name</span>
                        <input type="text" placeholder='last name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>number</span>
                        <input type="number" placeholder='password' {...register("age", { min: 18, max: 99 })} />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form