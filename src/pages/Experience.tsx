//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Markdown from "react-markdown";


//^
//^ EXPERIENCE
//^

//> EXPERIENCE -> CONTENT
const content = `
## Rust SmallVec

### Default Maintainer

Responsible for issue triaging, PR reviewing, testing, architecture design, CI, and releases.

- Reviewed ~115 PRs from 30+ contributors.
- Authored ~60 merged PRs including performance improvements, CI, and v2 architecture.
- Triaged 150+ issues and cleared a two-year backlog.
- Managed the releases of v1.16 and v2 since alpha.13, totaling ~36M downloads.

## Independent Research

### Independent Researcher

Developed a novel incremental contextual disambiguation algorithm for generalized parsers and formalized it in a paper.

- Pre-print available on arXiv and Zenodo.
- Submitted to the Software Language Engineering 2026 conference.
- Implemented along the Mathsys Earley parser.

## Rust Stack-Array

### Crate maintainer

Maintainer of the Rust crate Stack-Array with ~20k downloads.

- Assumed ownership of the crate after developing a new implementation with compile-time evaluation support replacing the original codebase.
- Expanded the public API with 15+ operations, iterators and traits.
`;

//> EXPERIENCE -> FUNCTION
export default function Experience(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}