//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ RESEARCH
//^

//> RESEARCH -> FUNCTION
export default function Research(): React.ReactNode {
    return (
        <>
            <Section name="String theory">
                <Card type="pdf" to="/Research/stringTheory.pdf">Research project</Card>
                <Card type="download" to="/Research/stringTheory.pptx">Presentation</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/teoria-de-cuerdas">Source code</Card>
            </Section>
            <Section name="Artificial neural networks">
                <Card type="pdf" to="/Research/artificialNeuralNetworks.pdf">Research project</Card>
            </Section>
            <Section name="Experimental energy sources">
                <Card type="pdf" to="/Research/energy.pdf">Research paper</Card>
                <Card type="pdf" to="/Research/experimentalCover.pdf">Cover page</Card>
                <Card type="download" to="/Research/energy.pptx">Presentation</Card>
                <Card type="extern" to="https://github.com/alejandro-vaz/PI-Energ-as-Experimentales">Source code</Card>
            </Section>
            <Section name="Special relativity">
                <Card type="pdf" to="/Research/specialRelativity.pdf">Research project</Card>
            </Section>
        </>
    )
}