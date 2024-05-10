import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
const Form = () => {
  

  const schema = yup.object().shape({
    Fullname: yup.string().required(),
    Email: yup.string().email().required(),
    Age : yup.number().positive().integer().min(18).required(),
    Password: yup.string().min(8).max(20).required(),
    ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null])
    .required(),

  });

  const { register, handleSubmit, errors } = useForm({
    
    resolver: yupResolver(schema),

  });

  const onSubmit = (data) => {
    console.log(data);

  }

  return (
    <form className='m-10 border-black border-2 flex-column' onSubmit={handleSubmit(onSubmit)}> 

     
      <input className='border-2 border-black' type='text' placeholder="Full Name..." {...register("Fullname")}/>
      <input type='text' placeholder="Email..." {...register("Email")} />
      <input type='number' placeholder="Age" {...register("Age")} />
      <input type='password' placeholder="Password..." {...register("Password")} />
      <input type='password' placeholder="Confirm Password..." {...register("Confirmpassword")} />
      <input type='submit' className='bg-slate-500 border-black hover:bg-red-300 '/>

    </form>
  )
}

export default Form
