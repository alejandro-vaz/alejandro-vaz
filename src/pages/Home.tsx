import React from 'react';
import {Link} from 'react-router-dom';

function SmallVecDiagram(): React.ReactNode {
    return (
        <div className="storage-diagram" role="img" aria-label="SmallVec stores values inline and uses the heap when its capacity is exceeded">
            <div className="diagram-heading">
                <span>HOW IT WORKS</span>
                <span>SMALL → LARGE</span>
            </div>
            <div className="storage-block">
                <div className="storage-label"><span>01</span> INLINE</div>
                <div className="storage-cells" aria-hidden="true">
                    <span>a</span><span>b</span><span>c</span><span className="empty-cell">_</span>
                </div>
                <p>Values live alongside the collection.</p>
            </div>
            <div className="diagram-connector"><span>grows beyond capacity</span><i aria-hidden="true">↓</i></div>
            <div className="storage-block storage-block-heap">
                <div className="storage-label"><span>02</span> HEAP</div>
                <div className="heap-storage" aria-hidden="true"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span></div>
                <p>Moves to the heap only when it needs more room.</p>
            </div>
            <div className="diagram-footnote">SMALLVEC · RUST</div>
        </div>
    );
}

function WorkEntry({number, category, title, role, children, className = ''}: {
    number: string;
    category: string;
    title: string;
    role: string;
    children: React.ReactNode;
    className?: string;
}): React.ReactNode {
    return (
        <article className={`work-entry ${className}`}>
            <div className="work-meta">
                <span className="work-number">{number}</span>
                <span>{category}</span>
            </div>
            <div className="work-body">
                <div className="work-title-row">
                    <h3>{title}</h3>
                    <span className="work-role">{role}</span>
                </div>
                {children}
            </div>
        </article>
    );
}

export default function Home(): React.ReactNode {
    return (
        <main className="page-content home-page">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="status-dot" /> FEATURED PROJECT · RUST</p>
                    <h1 id="hero-title">SmallVec<span className="hero-period">.</span></h1>
                    <p className="hero-byline">Maintained by <strong>Alejandro Vaz</strong></p>
                    <p className="hero-lede">A Vec-like collection that keeps small amounts of data inline, avoiding a heap allocation until it needs to grow.</p>
                    <p className="hero-caption">Rust crate · architecture, reviews, testing, CI, and releases</p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/fund">Support my work <span aria-hidden="true">↗</span></Link>
                        <a className="text-link" href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer">Explore the repository <span aria-hidden="true">↗</span></a>
                        <a className="text-link" href="https://crates.io/crates/smallvec" target="_blank" rel="noreferrer">Crates.io <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <SmallVecDiagram />
                <a className="scroll-cue" href="#work"><span className="scroll-line" /> Scroll to see more</a>
            </section>

            <section id="work" className="work-section" aria-labelledby="work-heading">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">A FEW THINGS I’VE WORKED ON</p>
                        <h2 id="work-heading">Selected work</h2>
                    </div>
                    <span className="section-count">01 — 04</span>
                </div>

                <div className="work-list">
                    <WorkEntry number="01" category="Rust · Library" title="SmallVec" role="Default maintainer" className="work-entry-featured">
                        <p className="work-description">A small-vector implementation that stores a limited number of elements inline before spilling over to the heap. I handle triage, reviews, testing, architecture, CI, and releases.</p>
                        <div className="work-facts">
                            <span><strong>~115</strong> PRs reviewed</span>
                            <span><strong>~60</strong> merged PRs authored</span>
                            <span><strong>1.3B+</strong> downloads</span>
                        </div>
                        <div className="work-links">
                            <a href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer">Repository <span aria-hidden="true">↗</span></a>
                            <a href="https://crates.io/crates/smallvec" target="_blank" rel="noreferrer">Crate <span aria-hidden="true">↗</span></a>
                        </div>
                    </WorkEntry>

                    <WorkEntry number="02" category="Language tools" title="Mathsys" role="Creator" className="work-entry-half">
                        <p className="work-description">A domain-specific language for simplified mathematical typesetting. I built its parser tooling, including recursive-descent combinators and an Earley parser with contextual disambiguation.</p>
                        <span className="work-tag">PARSING · DSL</span>
                    </WorkEntry>

                    <WorkEntry number="03" category="Research" title="Incremental disambiguation" role="Independent researcher" className="work-entry-half">
                        <p className="work-description">Developed and formalized an incremental contextual disambiguation algorithm for generalized parsers. The work has a preprint and was submitted to Software Language Engineering 2026.</p>
                        <span className="work-tag">GENERALIZED PARSING · PAPER</span>
                    </WorkEntry>

                    <WorkEntry number="04" category="Rust · Library" title="Stack-Array" role="Crate maintainer" className="work-entry-last">
                        <p className="work-description">Took over the crate after building a new implementation with compile-time evaluation support. Expanded its API with more than 15 operations, iterators, and traits; it has around 20k downloads.</p>
                        <span className="work-tag">CONST EVALUATION · API DESIGN</span>
                    </WorkEntry>
                </div>
            </section>

            <section className="home-contact" aria-label="Contact">
                <p>Have something interesting in mind?</p>
                <Link to="/about">A little more about me <span aria-hidden="true">↗</span></Link>
            </section>
        </main>
    );
}
