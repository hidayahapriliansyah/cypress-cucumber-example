'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignupRequest, signupRequestSchema } from '../../../dto/signup'
import { zodResolver } from '@hookform/resolvers/zod'
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'lucide-react'
import clsx from 'clsx'

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupRequest>({
    resolver: zodResolver(signupRequestSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: SignupRequest) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Success signup', {
        id: "success-signup",
        className: "success-signup-toast"
      });
    }, 3000);
  }

  useEffect(() => { }, [isLoading])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 mx-auto w-full max-w-lg'
    >
      <div>
        <label
          htmlFor="email"
          className='text-sm'
        >Email</label>
        <input
          {...register('email')}
          id="email"
          autoFocus
        ></input>
        {
          errors.email &&
          <small
            className='text-rose-700'
            id='error-email'
          >{errors.email.message}</small>
        }
      </div>
      <div>
        <label
          htmlFor="name"
          className='text-sm'
        >Name</label>
        <input
          {...register('name')}
          id="name"
        ></input>
        {
          errors.name &&
          <small
            className='text-rose-700'
            id='error-name'
          >
            {errors.name.message}
          </small>
        }
      </div>
      <button
        onClick={() => {
          console.log('click')
        }}
        type='submit'
        className={clsx('inline-flex justify-center items-center', {
          'disabled:bg-opacity-60 disabled:pointer-events-none': isLoading
        })}
        disabled={isLoading}
      >
        {
          isLoading
            ? <Loader className='spin text-center' size={16} />
            : 'Sign Up'
        }
      </button>
      <Toaster />
    </form>
  )
}

export default SignupForm