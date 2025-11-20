//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ PROFILES
//^

//> PROFILES -> FUNCTION
export default function Profiles(): React.ReactNode {
    return (
        <>
            <Section name="Work">
                <Card type="pdf" to="/Profiles/spanish.pdf">Curriculum vitae (Spanish)</Card>
                <Card type="pdf" to="/Profiles/english.pdf">Curriculum vitae (English)</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz">GitHub profile</Card>
                <Card type="extern" to="https://orcid.org/0009-0008-0929-6270">ORCID record</Card>
            </Section>
            <Section name="Social media">
                <Card type="extern" to="https://x.com/alejandro__vaz">X/Twitter profile</Card>
            </Section>
        </>
    )
}