//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Markdown from "react-markdown";


//^
//^ RESEARCH
//^

//> RESEARCH -> FUNCTION
export default function Research(): React.ReactNode {
    return <Markdown>
        ## Environment-Sensitive Lexicographic Disambiguation for Contextual Parsing

        Developed a novel contextual disambiguation algorithm for generalized parsers and
        formalized it in a paper.

        - Pre-print available on arXiv and Zenodo.
        - Submitted to the ACM Software Language Engineering 2026 conference.
        - Implemented along the Mathsys Earley parser.
    </Markdown>
}