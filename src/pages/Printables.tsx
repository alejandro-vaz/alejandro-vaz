//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Section from "../components/Section.tsx";
import Card from "../components/Card.tsx";


//^
//^ PRINTABLES
//^

//> PRINTABLES -> FUNCTION
export default function Printables(): React.ReactNode {
    return (
        <>
            <Section name="Cork board">
                <Card type="pdf" to="/Printables/gpt.pdf">GPT conversations organization</Card>
                <Card type="pdf" to="/Printables/habittracker.pdf">Habit tracker</Card>
                <Card type="pdf" to="/Printables/s-i.pdf">Task management list</Card>
                <Card type="pdf" to="/Printables/social.pdf">Network social interactions</Card>
                <Card type="pdf" to="/Printables/threads.pdf">Brainpower thread management</Card>
            </Section>
            <Section name="Personal finances">
                <Card type="pdf" to="/Printables/wfr.pdf">Weighted financial report</Card>
            </Section>
        </>
    )
}