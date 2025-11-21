//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ STANDARDIZED TESTING
//^

//> STANDARDIZED TESTING -> FUNCTION
export default function Standardized_testing(): React.ReactNode {
    return (
        <>
            <Section name="SAT">
                <Card type="pdf" to="/Standardized-testing/decemberSAT.pdf">December 2024 administration</Card>
                <Card type="pdf" to="/Standardized-testing/septemberSAT.pdf">September 2025 administration</Card>
                <Card type="pdf" to="/Standardized-testing/novemberSAT.pdf">November 2025 administration</Card>
            </Section>
        </>
    )
}