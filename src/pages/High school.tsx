//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ HIGH SCHOOL
//^

//> HIGH SCHOOL -> FUNCTION
export default function High_school(): React.ReactNode {
    return (
        <>
            <Section name="General Education Development">
                <Card type="pdf" to="/High-school/diploma.pdf">Diploma</Card>
            </Section>
        </>
    )
}