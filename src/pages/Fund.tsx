import React from 'react';

const sponsorUrl = 'https://github.com/sponsors/alejandro-vaz';

const work = [
    {
        number: '01',
        category: 'RUST · LIBRARY',
        title: 'SmallVec',
        description: 'Default maintainer of the Rust small-vector crate. I look after triage, reviews, architecture, testing, CI, and releases.',
        detail: '1.3B+ downloads · used by ~150k crates',
        featured: true,
    },
    {
        number: '02',
        category: 'LANGUAGE TOOLS',
        title: 'Mathsys',
        description: 'A domain-specific language for simplified mathematical typesetting, with custom parser tooling and contextual disambiguation.',
        detail: 'DSL · parser combinators · Earley parsing',
    },
    {
        number: '03',
        category: 'RESEARCH',
        title: 'Incremental disambiguation',
        description: 'Developed and formalized an incremental contextual disambiguation algorithm for generalized parsers, with a preprint and an implementation in Mathsys.',
        detail: 'GENERALIZED PARSING · ALGORITHM DESIGN',
    },
    {
        number: '04',
        category: 'RUST · LIBRARY',
        title: 'Stack-Array',
        description: 'Maintainer of a stack-array crate. I replaced its original implementation with one that supports compile-time evaluation and expanded its API.',
        detail: 'CONST EVALUATION · API DESIGN',
    },
];

function SponsorButton({className = ''}: {className?: string}): React.ReactNode {
    return (
        <a className={`button button-primary ${className}`} href={sponsorUrl} target="_blank" rel="noreferrer">
            Sponsor on GitHub <span aria-hidden="true">↗</span>
        </a>
    );
}

export default function Fund(): React.ReactNode {
    return (
        <main className="page-content fund-page">
            <section className="fund-hero" aria-labelledby="fund-heading">
                <div className="fund-intro">
                    <p className="eyebrow"><span className="status-dot" /> FUND OPEN-SOURCE WORK</p>
                    <h1 id="fund-heading">Help me keep SmallVec going<span className="hero-period">.</span></h1>
                    <p className="fund-lede">I’m Alejandro Vaz, the default maintainer of SmallVec. Sponsorship helps me set aside focused time for the maintenance and security work this widely used Rust crate needs.</p>
                    <SponsorButton />
                    <p className="fund-platform-note">Monthly and one-time support are available through GitHub Sponsors.</p>
                </div>
                <aside className="fund-goal" aria-label="Sponsorship goal">
                    <p className="eyebrow">CURRENT GOAL</p>
                    <div className="fund-goal-amount">$249<span> / month</span></div>
                    <div className="fund-goal-rule"><span /></div>
                    <p className="fund-goal-copy">This would let me dedicate around <strong>2 hours each week</strong> to SmallVec.</p>
                    <span className="fund-goal-foot">MAINTENANCE · SECURITY · RELEASES</span>
                </aside>
            </section>

            <section className="fund-impact" aria-label="SmallVec reach">
                <div><strong>1.3B+</strong><span>downloads</span></div>
                <div><strong>~150k</strong><span>crates use SmallVec</span></div>
                <p>Support helps me keep the crate dependable for the projects that rely on it.</p>
            </section>

            <section className="fund-work-section" aria-labelledby="fund-work-heading">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">WHAT YOUR SUPPORT HELPS SUSTAIN</p>
                        <h2 id="fund-work-heading">Selected work</h2>
                    </div>
                    <span className="section-count">01 — 04</span>
                </div>
                <div className="fund-work-list">
                    {work.map((item) => (
                        <article className={`fund-work-item${item.featured ? ' fund-work-featured' : ''}`} key={item.number}>
                            <span className="fund-work-number">{item.number}</span>
                            <div className="fund-work-copy">
                                <p className="eyebrow">{item.category}</p>
                                <h3>{item.title}</h3>
                                <p className="fund-work-description">{item.description}</p>
                                <span className="fund-work-detail">{item.detail}</span>
                            </div>
                            {item.featured && <a className="fund-project-link" href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer" aria-label="View SmallVec on GitHub">↗</a>}
                        </article>
                    ))}
                </div>
            </section>

            <section className="fund-ask" aria-labelledby="fund-ask-heading">
                <div>
                    <p className="eyebrow">HELP MAKE THE TIME</p>
                    <h2 id="fund-ask-heading">Support the work behind the crate.</h2>
                    <p>Every contribution helps make room for thoughtful maintenance, improvements, and security work.</p>
                </div>
                <SponsorButton />
            </section>
        </main>
    );
}
