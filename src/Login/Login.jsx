import React from 'react'

export function Login() {
  return (
    <div>
        <label for="username-input">Username</label>
        <input id="username-input" />

        {/* for getting input from test-cases */}

        <div data-testid="div-id">
            <h2>this is diffrent scenrios of test-cases</h2>
        </div>

        <button onClick={()=>{console.log("btn clicked")}}>click me</button>

    </div>
  )
}

export const MyCustomButton = ({onClick, children}) => {
    return(<button onClick={onClick}>{children}</button>
    )
}