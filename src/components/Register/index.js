import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from '../../firebase';
import './Register.css';
function Register() {
  return (
    <div className='container-lg'>
      <div className='row'>
        <div className='col-6'>
          <div>
            <img
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
              src={process.env.PUBLIC_URL + '/assets/SignupCardsImage.png'}
              alt='imae'
            />
          </div>
        </div>
        <div className='col-6'>
          <form
            className='py-5'
            id='account'
            method='post'
          >
            <label
              htmlFor='email'
              className='form-label'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              className='form-control input'
              autoComplete='username'
              aria-required='true'
              placeholder='Your Name'
            />
            <span
              className='text-danger'
              id='email-error'
            ></span>

            <br></br>
            <input
              type='email'
              id='email'
              className='form-control'
              autoComplete='username'
              aria-required='true'
              placeholder='Your Email'
            />
            <span
              className='text-danger'
              id='email-error'
            ></span>

            <br></br>

            <input
              type='email'
              id='email'
              className='form-control'
              autoComplete='username'
              aria-required='true'
              placeholder='Your Password'
            />

            <button
              type='submit'
              className='btn btn-primary mt-4'
              value='Start Now'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
