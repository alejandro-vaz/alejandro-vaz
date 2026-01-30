//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ CERTIFICATES
//^

//> CERTIFICATES -> FUNCTION
export default function Certificates(): React.ReactNode {
    return (
        <>
            <Section name="SAT">
                <Card type="pdf" to="/Certificates/SAT1.pdf">December 2024 administration (1460)</Card>
                <Card type="pdf" to="/Certificates/SAT2.pdf">September 2025 administration (1410)</Card>
                <Card type="pdf" to="/Certificates/SAT3.pdf">November 2025 administration (1520)</Card>
            </Section>
            <Section name="Duolingo English Test">
                <Card type="extern" to="https://certs.duolingo.com/t05eupprzqye0pgl">September 2025 (145)</Card>
            </Section>
            <Section name="High school">
                <Card type="pdf" to="/Certificates/GED.pdf">GED diploma</Card>
            </Section>
            <Section name="Legal">
                <Card type="pdf" to="/Certificates/delitos.pdf">Certificado de ausencia de delitos sexuales</Card>
            </Section>
        </>
    )
}