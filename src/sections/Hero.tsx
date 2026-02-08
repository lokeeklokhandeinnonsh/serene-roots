import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './Hero.module.css';
import heroImage from '../assets/hero.png';

import { websiteContent } from '../constants/websiteContent';

const Hero: React.FC = () => {
    const { hero } = websiteContent.home;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Title */}
                        <h1 className={styles.title}>
                            {hero.headline}
                        </h1>

                        {/* Subtitle */}
                        <p className={styles.subtitle}>
                            {hero.subheading}
                        </p>

                        {/* Actions */}
                        <div className={styles.actions}>
                            <Link to="/contact">
                                <Button size="lg" variant="primary">
                                    {hero.ctaPrimary}
                                </Button>
                            </Link>

                            <Link to="/services">
                                <Button size="lg" variant="outline">
                                    {hero.ctaSecondary}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <div className={styles.imageWrapper}>
                    <motion.div
                        className={styles.imagePlaceholder}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.circleDecoration}></div>

                        <img
                            src={heroImage}
                            alt="Therapy and wellness environment"
                            className={styles.image}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
