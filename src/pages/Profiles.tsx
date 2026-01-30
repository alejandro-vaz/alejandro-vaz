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
            <Section name="Research">
                <Card type="extern" to="https://orcid.org/0009-0008-0929-6270">ORCID</Card>
            </Section>
            <Section name="Curriculum Vitae">
                <Card type="pdf" to="/Profiles/spanish.pdf">In Spanish</Card>
                <Card type="pdf" to="/Profiles/english.pdf">In English</Card>
            </Section>
            <Section name="Computer science">
                <Card type="extern" to="https://github.com/alejandro-vaz">GitHub profile</Card>
            </Section>
            <Section name="Other">
                <Card type="pdf" to="/Profiles/PersonalEssay.pdf">College application essay (amazing, got rejected)</Card>
            </Section>
        </>
    )
}