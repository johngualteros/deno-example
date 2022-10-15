import { serve } from './depts.ts';
import React from "https://esm.sh/react";
import { renderToString } from "https://esm.sh/react-dom/server";
import {App} from './src/index.jsx';

serve((req) => {

    const { url } = req;
    const { pathname } = new URL(url);

    const app = renderToString(<App pathname={pathname}/>)
    return new Response(`<div id="roo">${app}</div>`, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }
    })
},{ port: 8000 })

