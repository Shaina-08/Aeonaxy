import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import './index.css';
import Header from './Header';
import { Checkbox } from './components/ui/checkbox';
import About from './About';
const FormSchema = z.object({
  username: z.string().min(1, {
    message: "This field is required",
  }).min(1, { message: "Username is required" }),
  email: z.string().email({
    message: "This field is required",
  }).min(1, { message: "Invalid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }).min(1, { message: "Password is required" }),
  confirmPassword: z.string().min(8, {
    message: "Confirm your password",
  }).refine((value, data) => {
    console.log('Confirm Password:', value);
    console.log('Password:', data && data.password);
    return !data || !data.password || value === data.password;
  }, {
    message: "Passwords do not match",
  }),
});


const App = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      checked: true,
    },
  });
  const [checkboxData, setcheckboxData] = useState(false);

  const checkboxHandler = () =>{
   setcheckboxData(true);
  }
  const [formData, setFormData] = useState(false);
  const onSubmit = (data) => {
    console.log("shaina")
    const { password, confirmPassword } = data;
    console.log(password)
    console.log(confirmPassword)
    if (password !== confirmPassword) {
      toast.error('Password did not match!')     
       return;
    }

    {checkboxData ? (
      <>
        {toast.success(
          <div className="text-sm font-semibold">
            <p className="mb-2"> <span className="font-bold text-base">Welcome {data.username}</span>! </p>
          </div>
        )}
        {setTimeout(() => {
      setFormData(true);
      console.log("shaina");
    }, 2000)}
      </>
    ) : toast.error("Accept our terms and conditions")}
  };

  return (
    <>
    {!formData ? (  
    <>
    <Header/>
    <div><Toaster
  position="top-right"
  reverseOrder={false}
/></div>
<div id="form-main">


    <Form  >
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 max-w-lg">
      <div className="mb-7 ">
        <label htmlFor="username" className="block text-base font-medium text-gray-500 text-left xl:ml-20">Full Name</label>
        <input
          id="username"
          type="text"
          {...register("username")}
          className={`mt-1 p-1 h-9  border rounded-md w-full rounded focus:outline-none ${errors.username ? 'border-red-700' : 'border-gray-200'}`}
          placeholder=""
        />
        {errors.username && (
          <p className="mt-1  shadow-text text-base font-bold  text-red-700 text-left ml-20 ">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-7 ">
        <label htmlFor="email" className="block text-base font-medium text-gray-500 text-left xl:ml-20">Email Address</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`mt-1 p-1 h-10  border rounded-md w-full rounded focus:outline-none ${errors.email ? 'border-red-700' : 'border-gray-200'}`}
          placeholder=""
        />
        {errors.email && (
          <p className="mt-1 shadow-text text-base font-bold  text-red-700 text-left ml-20 ">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-7">
        <label htmlFor="password" className="block text-base font-medium text-gray-500 text-left xl:ml-20">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`mt-1 p-1 h-10 border rounded-md w-full rounded focus:outline-none ${errors.password ? 'border-red-700' : 'border-gray-200'}`}
          placeholder=""
        />
        {errors.password && (
          <p className="mt-1 shadow-text text-base font-bold  text-red-700 text-left ml-20">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-7">
        <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-500 text-left xl:ml-20">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={`mt-1 p-1 h-10 border rounded-md w-full rounded focus:outline-none ${errors.confirmPassword ? 'border-red-700' : 'border-gray-200'} ` }
          placeholder=""
        />
        {errors.confirmPassword && (
          <p className="mt-1 shadow-text text-base font-bold text-red-700 text-left ml-20">{errors.confirmPassword.message}</p>
        )}
        
      </div>
      <div className="flex items-center space-x-4  px-2 xl:ml-20">
               <Checkbox
                 id="terms"
                  checked={checkboxData}
                  onCheckedChange={checkboxHandler}
                />      <label
        htmlFor="terms"
        {...register("checked")}
        className="text-xs  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      > I agree to the <span>Terms of Use and Privacy Policy</span>
        
      </label>
    </div>
      <Button type="submit" className="rounded border-none text-base font-bold bg-black text-white h-9 px-8   hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring">Create Account</Button>
    
    
    </form>
    
  </Form>
  </div>
  <label
        htmlFor="terms"
        className=" text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
      > Already have an account? <span>Log in</span>
        
      </label>
  </> ): <About/>}
  
  </>


  );
};

export default App;
