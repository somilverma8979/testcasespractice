import React from 'react';
import "./button.css"

function Button({ label }) {
    const start = () => {
        console.log("clicked here")
    }
    return <>
    <button onClick={start} >Submit</button>
    <div data-testid="button" className="button-style" onClick={() => {

    }}>hello {label}</div>i
    </>
}

export default Button