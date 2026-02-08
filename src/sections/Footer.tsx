import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

import { contactDetails } from '../constants/websiteContent';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand & Description */}
                    <div className={styles.brandColumn}>
                        <h3 className={styles.logo}>Serene Roots</h3>
                        <p className={styles.description}>
                            Compassionate therapy and counseling services to help you find balance, growth, and inner peace.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.heading}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/leadership">Leadership</Link></li>
                            <li><Link to="/workshops">Workshops</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactColumn}>
                        <h4 className={styles.heading}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} />
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <span>{contactDetails.address}</span>
                                </a>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href={`tel:${contactDetails.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>{contactDetails.phone}</span>
                                </a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href={`mailto:${contactDetails.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>{contactDetails.email}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className={styles.socialColumn}>
                        <h4 className={styles.heading}>Follow Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Serene Roots. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
