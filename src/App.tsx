import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom';

import About from './pages/About.tsx';
import Home from './pages/Home.tsx';

function SiteHeader(): React.ReactNode {
    return (
        <header className="site-header">
            <Link className="wordmark" to="/" aria-label="Alejandro Vaz, home">
                <span className="wordmark-mark">AV</span>
                <span>Alejandro Vaz</span>
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link is-active' : 'nav-link'}>Work</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link is-active' : 'nav-link'}>About</NavLink>
            </nav>
        </header>
    );
}

function SiteFooter(): React.ReactNode {
    return (
        <footer className="site-footer">
            <span>Rust · open source · language tools</span>
            <span>© {new Date().getFullYear()} Alejandro Vaz</span>
        </footer>
    );
}

export default function App(): React.ReactNode {
    return (
        <>
            <Analytics />
            <div className="site-shell">
                <SiteHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Navigate to="/" replace />} />
                    <Route path="/projects" element={<Navigate to="/#work" replace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <SiteFooter />
            </div>
        </>
    );
}
