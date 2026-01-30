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
            <Section name="Energy as currency">
                <Card type="extern" to="https://doi.org/10.5281/zenodo.18127021">Energy as Currency: A Physical and Digital Framework for ...</Card>
            </Section>
            <Section name="String theory">
                <Card type="pdf" to="/Research/stringTheory.pdf">Research project</Card>
                <Card type="download" to="/Research/stringTheory.pptx">Presentation</Card>
            </Section>
            <Section name="Neural networks">
                <Card type="pdf" to="/Research/artificialNeuralNetworks.pdf">Short chapter</Card>
            </Section>
            <Section name="Experimental energy sources">
                <Card type="pdf" to="/Research/energy.pdf">Research paper (unpublished)</Card>
                <Card type="download" to="/Research/energy.pptx">Presentation</Card>
            </Section>
            <Section name="Special relativity">
                <Card type="pdf" to="/Research/specialRelativity.pdf">Short paper</Card>
            </Section>
        </>
    )
}