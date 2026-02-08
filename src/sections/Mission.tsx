import React from 'react';
import { motion } from 'framer-motion';

import Button from '../components/Button';
import styles from './Mission.module.css';

import { websiteContent } from '../constants/websiteContent';

const Mission: React.FC = () => {
    const { overview, philosophy } = websiteContent.about;

    return (
        <section className={`section ${styles.mission}`}>
            <div className={`container ${styles.container}`}>

                {/* Image Column */}
                <motion.div
                    className={styles.imageColumn}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Child therapy and emotional support environment"
                            className={styles.image}
                        />
                        <div className={styles.decoration}></div>
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    className={styles.textColumn}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Heading */}
                    <h2 className={styles.heading}>
                        {overview.heading}
                    </h2>

                    {/* Subheading */}
                    <h3 className={styles.subheading}>
                        {philosophy.heading}
                    </h3>

                    {/* Overview */}
                    <p className={styles.text}>
                        {overview.content}
                    </p>

                    {/* Philosophy */}
                    <p className={styles.text}>
                        {philosophy.content}
                    </p>

                    {/* CTA */}
                    <Button variant="primary" size="md">
                        Learn More About Us
                    </Button>

                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
