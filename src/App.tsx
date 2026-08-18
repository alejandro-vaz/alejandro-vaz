//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Analytics} from '@vercel/analytics/react';

//> HEAD -> PAGES
import Home from "./pages/Home.tsx";
import Research from './pages/Research.tsx';
import OpenSource from './pages/OpenSource.tsx';

//> HEAD -> COMPONENTS
import Icon from './components/Icon.tsx';


//^
//^ APP
//^

//> APP -> PAGE
function Page({view, sectionName, noIcon}: {
    view: React.ReactNode,
    sectionName?: string,
    noIcon?: boolean
}): React.ReactNode {
    return (
        <div className="min-h-screen w-full mr-auto ml-auto lg:w-3/5 flex flex-col items-center px-4 py-8">
            <div className="w-full flex mb-6">
                {!noIcon && <Link
                    to="/"
                    className="text-slate-600 hover:text-slate-800 text-2xl mr-4"
                >
                    <Icon type="BackArrow" size='w-8 h-8' width={2}/>
                </Link>}
                <h1 className="text-2xl font-bold text-slate-800">{sectionName}</h1>
            </div>
            {view}
        </div>
    );
}

//> APP -> FUNCTION
export default function App(): React.ReactNode {return (<>
    <Analytics/>
    <Routes>
        <Route path='/' element={<Page noIcon view={<Home/>}/>}/>
        <Route path='/research' element={
            <Page sectionName='Research' view={<Research/>}/>
        }/>
        <Route path='/opensource' element={
            <Page sectionName='Open Source' view={<OpenSource/>}/>
        }/>
    </Routes>
</>)}
