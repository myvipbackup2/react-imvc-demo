/**
 * Created by zixiangli on 2017/6/15.
 */

import React from 'react'
import { Style } from 'react-imvc/component'

const Login = ({ state, handles }) => {
  return (
    <div>
      <Style name='bootstrap' />
      <Style name='animate' />
      <Style name='style' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <form
              action='#'
              className='fh5co-form animate-box'
              data-animate-effect='fadeIn'
            >
              <h2>Sign In</h2>
              <div className='form-group'>
                <label for='username' className='sr-only'>Username</label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  placeholder='Username'
                  autocomplete='off'
                />
              </div>
              <div className='form-group'>
                <label for='password' className='sr-only'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                  autocomplete='off'
                />
              </div>
              <div className='form-group'>
                <label for='remember'>
                  <input type='checkbox' id='remember' /> Remember Me
                </label>
              </div>
              <div className='form-group'>
                <p>
                  Not registered?{' '}
                  <a href='sign-up.html'>Sign Up</a>
                  {' '}|{' '}
                  <a href='forgot.html'>Forgot Password?</a>
                </p>
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  value='Sign In'
                  className='btn btn-primary'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
