import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import styles from './Navbar.module.css';

import logo from '../assets/serene_roots_logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact">
                        <Button size="sm" variant="primary">Book Appointment</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `${styles.mobileLink} ${isActive ? styles.active : ''}`
                                }
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div style={{ marginTop: '1rem' }}>
                            <Link to="/contact" onClick={toggleMenu}>
                                <Button size="md" variant="primary">Book Appointment</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
