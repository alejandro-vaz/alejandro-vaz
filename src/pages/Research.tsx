//
//  HEAD
//

// HEAD -> IMPORTS
import React from "react";

// HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//
//  RESEARCH
//

// RESEARCH -> FUNCTION
export default function Research(): React.ReactNode {
    return (
        <>
            <Section name="String theory">
                <Card type="pdf" to="/Research/Teoría-de-cuerdas.pdf">Research project</Card>
                <Card type="download" to="/Research/Teoría-de-cuerdas.pptx">Presentation</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/teoria-de-cuerdas">Source code</Card>
            </Section>
            <Section name="Artificial neural networks">
                <Card type="pdf" to="/Research/redes-neuronales-artificiales.pdf">Research project</Card>
            </Section>
            <Section name="Experimental energy sources">
                <Card type="pdf" to="/Research/experimental-energy.pdf">Research paper</Card>
                <Card type="pdf" to="/Research/experimental-cover.pdf">Cover page</Card>
                <Card type="download" to="/Research/energy.pptx">Presentation</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/PI-Energ-as-Experimentales">Source code</Card>
            </Section>
            <Section name="Special relativity">
                <Card type="pdf" to="/Research/Relatividad-especial-explicada-de-forma-sencilla.pdf">Research project</Card>
            </Section>
        </>
    )
}