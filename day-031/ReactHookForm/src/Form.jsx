import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
const Form = () => {
  

  const schema = yup.object().shape({
    Fullname: yup.string().required("Your full name"),
    Email: yup.string().email().required("Enter Email"),
    Age : yup.number().positive().integer().min(18).required("Enter Valid Age"),
    Password: yup.string().min(8).max(20).required("Enter Valid Password"),
    ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null])
    .required("Passsword not matched"),

  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    
    resolver: yupResolver(schema),

  });

  const onSubmit = (data) => {
    console.log(data);

  }

  return (
    <form className='m-10 border-black border-2 flex-column' onSubmit={handleSubmit(onSubmit)}> 

     
      <input type='text' placeholder="Full Name..." {...register("Fullname")}/>
      <p className='m-2 text-red-800 font-bold ease-in '>{errors.Fullname?.message}</p>
      <input type='text' placeholder="Email..." {...register("Email")} />
      <p className='m-2 text-red-800 font-bold ease-in '>{errors.Email?.message}</p>
      
      <input type='number' placeholder="Age" {...register("Age")} />
      <p className='m-2 text-red-800 font-bold ease-in '>{errors.Age?.message}</p>
      
      <input type='password' placeholder="Password..." {...register("Password")} />
      <p className='m-2 text-red-800 font-bold ease-in '>{errors.Password?.message}</p>
      
      <input type='password' placeholder="Confirm Password..." {...register("ConfirmPassword")} />
      <p className='m-2 text-red-800 font-bold ease-in '>{errors.ConfirmPassword?.message}</p>
      
      <input type='submit' className='bg-slate-500 border-black hover:bg-red-300 '/>

    </form>
  )
}

export default Form
