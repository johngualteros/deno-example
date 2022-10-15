import React from "https://esm.sh/react";

export function App ({ pathname }) {
    return (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            body {
                background-color: #000;
                color: #fff;
                font-family: sans-serif;
                display: grid;
                place-content: center;
                height: 100vh;
                margin: 0;
            }
        `}}>
        </style>
        {
            pathname === '/login' && <form><input type="text" placeholder="login" /></form>
        }
        {
            pathname === '/' && <h1>Hello World</h1> 
        }
    </>
    )
}
