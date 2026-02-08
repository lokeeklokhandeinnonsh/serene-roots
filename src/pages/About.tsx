import React from 'react';
import { motion } from 'framer-motion';

import Button from '../components/Button';
import SEO from '../components/SEO';

import styles from './About.module.css';

import { websiteContent } from '../constants/websiteContent';

const About: React.FC = () => {
    const { about, leadership } = websiteContent;

    return (
        <div className={styles.aboutPage}>

            {/* SEO */}
            <SEO
                title="About Us"
                description={about.overview.content}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {about.overview.heading}
                    </motion.h1>

                    <p className={styles.subtitle}>
                        {about.philosophy.heading}
                    </p>

                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section container">
                <div className={styles.grid}>

                    {/* Vision + Mission */}
                    <div>

                        <h2 className={styles.sectionTitle}>
                            {about.vision.heading} & {about.mission.heading}
                        </h2>

                        <p className={styles.text}>
                            {about.vision.content}
                        </p>

                        <ul className={styles.missionList}>
                            {about.mission.points.map((point, index) => (
                                <li key={index}>
                                    {point}
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Values */}
                    <div className={styles.valuesBox}>

                        <h3>
                            {about.values.heading}
                        </h3>

                        <ul>
                            {about.values.list.map((value, index) => (
                                <li key={index}>
                                    {value}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
            </section>

            {/* Philosophy */}
            <section className={`section ${styles.philosophy}`}>
                <div className="container">

                    <h2
                        className={styles.sectionTitle}
                        style={{ textAlign: 'center' }}
                    >
                        {about.philosophy.heading}
                    </h2>

                    <div className={styles.philosophyContent}>
                        <p
                            className={styles.text}
                            style={{
                                textAlign: 'center',
                                maxWidth: '800px',
                                margin: '0 auto',
                            }}
                        >
                            {about.philosophy.content}
                        </p>
                    </div>

                </div>
            </section>

            {/* Team CTA */}
            <section
                className="section container"
                style={{ textAlign: 'center' }}
            >

                <h2 className={styles.sectionTitle}>
                    {leadership.heading}
                </h2>

                <p
                    className={styles.text}
                    style={{ marginBottom: '2rem' }}
                >
                    {leadership.subheading}
                </p>

                <Button size="lg" variant="primary">
                    View Leadership
                </Button>

            </section>

        </div>
    );
};

export default About;
