import React from 'react'

function Login() {
  return (
    <div>
          <h2>Login</h2>
        <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
               />
            <button type="submit">Login</button>
          </form>
    </div>
  )
}

export default Login