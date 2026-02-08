import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import styles from './Navbar.module.css';

import logo from '../assets/serene_roots_logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Workshops', path: '/workshops' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                
                    <img src={logo} alt="Serene Roots" className={styles.logoImage} />
                    Serene Roots
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" variant="primary">Book Appointment</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={styles.mobileLink}
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div style={{ marginTop: '1rem' }}>
                            <Button size="md" variant="primary" onClick={toggleMenu}>Book Appointment</Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
