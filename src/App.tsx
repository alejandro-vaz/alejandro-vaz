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
import High_school from './pages/High school.tsx';
import Languages from './pages/Languages.tsx';
import Profiles from './pages/Profiles.tsx';
import Printables from './pages/Printables.tsx';
import Standardized_testing from './pages/Standardized testing.tsx';
import Abscissa from './pages/Abscissa.tsx';

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
        <div className="min-h-screen w-full mr-auto ml-auto md:w-1/2 flex flex-col items-center px-4 py-8">
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
export default function App(): React.ReactNode {
    return (
        <>
            <Analytics/>
            <Routes>
                <Route path='/' element={<Page noIcon view={<Home/>}/>}/>
                <Route path='/research' element={<Page sectionName='Research' view={<Research/>}/>}/>
                <Route path='/languages' element={<Page sectionName='Languages' view={<Languages/>}/>}/>
                <Route path='/high-school' element={<Page sectionName='High school' view={<High_school/>}/>}/>
                <Route path='/profiles' element={<Page sectionName='Profiles' view={<Profiles/>}/>}/>
                <Route path='/printables' element={<Page sectionName='Printables' view={<Printables/>}/>}/>
                <Route path='/standardized-testing' element={<Page sectionName='Standardized testing' view={<Standardized_testing/>}/>}/>
                <Route path='/abscissa' element={<Page sectionName='Abscissa' view={<Abscissa/>}/>}/>
            </Routes>
        </>
    );
}
