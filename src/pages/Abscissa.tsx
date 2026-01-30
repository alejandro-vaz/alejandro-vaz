//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ ABSCISSA
//^

//> ABSCISSA -> FUNCTION
export default function Abscissa(): React.ReactNode {
    return (
        <>
            <Section name="Abscissa">
                <Card type="extern" to="https://abscissa.eu">Link</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/abscissa">Source code</Card>
                <Card type="extern" to="https://docs.abscissa.eu/Abscissa">Documentation</Card>
            </Section>
            <Section name="Mathsys">
                <Card type="extern" to="https://docs.abscissa.eu/Mathsys">Documentation</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/mathsys">Source code</Card>
            </Section>
            <Section name="CSScribe">
                <Card type="extern" to="https://github.com/alejandro-vaz/csscribe">Source code</Card>
                <Card type="pdf" to="/Abscissa/cheatsheet.pdf">Command cheatsheet</Card>
            </Section>
        </>
    )
}