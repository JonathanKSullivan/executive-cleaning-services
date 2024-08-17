"use client";

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import assets from './assets';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Image 
                    src={assets.logo.src} 
                    alt="Executive Care Services" 
                    className="navbar-image" 
                    width={100} 
                    height={50} // You can add height as well for proper aspect ratio
                />
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="/about">About ECS</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blogs</a>
                <a href="/case_studies">Case Studies</a>
                <a href="/contact">Contact</a>
                <a href="/booking" className="cta-button">Book a Consultation</a> {/* Moved to the dropdown menu */}
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>
        </nav>
    );
};

export default Navbar;
