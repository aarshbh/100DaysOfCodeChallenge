import React from 'react'
import { useForm } from 'react-hook-form'
const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

  }

  return (
    <form className='m-10 border-black border-2' onSubmit={handleSubmit(onSubmit)}> 

     
      <input type='text' placeholder="Full Name..." {...register("Fullname")}/>
      <input type='text' placeholder="Email..." {...register("Email")} />
      <input type='number' placeholder="Age" {...register("Age")} />
      <input type='password' placeholder="Password..." {...register("Password")} />
      <input type='password' placeholder="Confirm Password..." {...register("Confirmpassword")} />
      <input type='submit' className='bg-slate-500 border-black hover:bg-red-300'/>

    </form>
  )
}

export default Form
