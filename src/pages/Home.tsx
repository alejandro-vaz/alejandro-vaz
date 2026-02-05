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
function Header(): React.ReactNode {
    return (
        <>
            <img src="/Home/profile.jpg" className="w-44 h-44 ml-auto mr-auto rounded-full mb-2"/>
            <h1 className="text-2xl font-bold text-slate-800 ml-auto mr-auto">Alejandro Vaz</h1>
            <Link to="mailto:alejandro.vaz.myt@gmail.com">
                <p className="hover:underline text-slate-600">Public: alejandro.vaz.myt@gmail.com</p>
            </Link>
            <Link to="mailto:alejandro.vaz@educa.madrid.org">
                <p className="hover:underline text-slate-600">Academic: alejandro.vaz@educa.madrid.org</p>
            </Link>
            <Link to="tel:+34679983643">
                <p className="hover:underline text-slate-600 mb-2">Public: +34 679 98 36 43</p>
            </Link>
        </>
    )
}

//> HOME -> FUNCTION
export default function Home(): React.ReactNode {
    return (
        <>
            <Header/>
            <Section name="Quick links">
                <Card type="extern" to="https://github.com/alejandro-vaz">
                    GitHub profile
                </Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/mathsys">
                    Mathsys GitHub repository
                </Card>
            </Section>
            <Section name="Pages">
                <Card type="page" to="/research">Research</Card>
                <Card type="page" to="/abscissa">Abscissa</Card>
                <Card type="page" to="/certificates">Certificates</Card>
                <Card type="page" to="/profiles">Profiles</Card>
            </Section>
        </>
    );
}
