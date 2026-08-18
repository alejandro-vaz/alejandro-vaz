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

//> RESEARCH -> CONTENT
const content = `
## Generalized Parsing Disambiguation

Developed a novel contextual disambiguation algorithm for generalized parsers and
formalized it in a paper.

- Pre-print available on [arXiv](https://arxiv.org/abs/2607.07728) and [Zenodo](https://zenodo.org/records/21206563).
- Submitted to the ACM Software Language Engineering 2026 conference.
- Implemented along the Mathsys Earley parser.
- Paper name: *"Environment-Sensitive Lexicographic Disambiguation for Contextual Parsing."*
`;

//> RESEARCH -> FUNCTION
export default function Research(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}