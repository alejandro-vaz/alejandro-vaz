//
//  HEAD
//

// HEAD -> IMPORTS
import React from "react";

// HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//
//  LANGUAGES
//

// LANGUAGES -> FUNCTION
export default function Languages(): React.ReactNode {
    return (
        <>
            <Section name="English">
                <Card type="pdf" to="/Languages/det.pdf">Duolingo English Test (PDF)</Card>
                <Card type="extern" to="https://certs.duolingo.com/t05eupprzqye0pgl">Duolingo English Test (official website)</Card>
            </Section>
        </>
    )
}