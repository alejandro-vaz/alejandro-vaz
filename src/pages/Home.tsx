//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";
import {Link} from "react-router-dom";


//^
//^ HOME
//^

//> HOME -> HEADER
function Header(): React.ReactNode {return (<>
    <img 
        src="/Home/profile.jpg"
        className="w-44 h-44 ml-auto mr-auto rounded-full mb-2"
    />
    <h1 className="text-2xl font-bold text-slate-800 ml-auto mr-auto">
        Alejandro Vaz
    </h1>
    <p>Public email: <Link 
        to="mailto:alejandro.vaz.myt@gmail.com" 
        className="hover:underline text-slate-600"
    >alejandro.vaz.myt@gmail.com</Link></p>
    <p>Public phone number: <Link 
        to="tel:+34679983643" 
        className="hover:underline text-slate-600"
    >+34 679 98 36 43</Link></p>
    <p>GitHub: <Link
        to="https://github.com/alejandro-vaz"
        className="hover:underline text-slate-600"
    >alejandro-vaz</Link></p>
</>)}

//> HOME -> FUNCTION
export default function Home(): React.ReactNode {return (<>
    <Header/>
    <Section name="Pages">
        <Card type="page" to="/research">Research</Card>
    </Section>
</>)}
