import React from 'react';
import {Link} from 'react-router-dom';

const capabilities = [
    'Rust library design and long-term maintenance',
    'Parser implementations and language tooling',
    'API and architecture design',
    'Performance, testing, and CI improvements',
    'Code review, issue triage, and release work',
];

export default function About(): React.ReactNode {
    return (
        <main className="page-content about-page">
            <p className="eyebrow"><span className="status-dot" /> ABOUT</p>
            <section className="about-intro" aria-labelledby="about-heading">
                <img className="profile-photo" src="/profile.jpg" alt="Alejandro Vaz" />
                <div className="about-intro-copy">
                    <p className="eyebrow">SOFTWARE · OPEN SOURCE · RESEARCH</p>
                    <h1 id="about-heading">Hi, I’m Alejandro<span className="hero-period">.</span></h1>
                    <p className="about-lede">I work on Rust libraries and language tools, from parser design and APIs to the careful maintenance that keeps software dependable.</p>
                    <div className="contact-links" aria-label="Contact links">
                        <a href="mailto:alejandro.vaz.myt@gmail.com">Email <span>alejandro.vaz.myt@gmail.com</span><b aria-hidden="true">↗</b></a>
                        <a href="https://github.com/alejandro-vaz" target="_blank" rel="noreferrer">GitHub <span>alejandro-vaz</span><b aria-hidden="true">↗</b></a>
                        <a href="tel:+34679983643">Phone <span>+34 679 98 36 43</span><b aria-hidden="true">↗</b></a>
                    </div>
                </div>
            </section>

            <section className="capabilities-section" aria-labelledby="capabilities-heading">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">HOW I CAN HELP</p>
                        <h2 id="capabilities-heading">Things I do</h2>
                    </div>
                    <span className="section-count">A SHORT LIST</span>
                </div>
                <ul className="capability-list">
                    {capabilities.map((capability, index) => (
                        <li key={capability}><span className="capability-number">0{index + 1}</span><span>{capability}</span><span className="capability-mark" aria-hidden="true">↗</span></li>
                    ))}
                </ul>
            </section>

            <section className="opportunity-card" aria-labelledby="opportunity-heading">
                <p className="eyebrow">OPEN TO A GOOD CONVERSATION</p>
                <h2 id="opportunity-heading">Have an opportunity or a project in mind?</h2>
                <p>Here’s the list of things I do. Email me about opportunities, or to see if I could work on something with you.</p>
                <a className="button button-primary" href="mailto:alejandro.vaz.myt@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </section>

            <p className="about-back"><Link to="/#work">← Back to selected work</Link></p>
        </main>
    );
}
