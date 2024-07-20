import { Metadata } from 'next'
import React from 'react'
import SignupForm from './components/SignupForm'

export const metadata: Metadata = {
  title: "Sign Up"
}

const SignupPage = () => {
  return (
    <div>
      <h1 className='text-center'>Sign Up</h1>

      <SignupForm />
    </div>
  )
}

export default SignupPage