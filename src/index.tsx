//
//  HEAD
//

// HEAD -> IMPORTS
import React from 'react';
import {Container, createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';


//
//  APP
//

// APP -> CONTENT
createRoot(document.getElementById('root') as Container).render(<BrowserRouter><App/></BrowserRouter>);