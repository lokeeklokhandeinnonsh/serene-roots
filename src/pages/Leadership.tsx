import React from 'react';

import Card from '../components/Card';
import SEO from '../components/SEO';

import styles from './Leadership.module.css';

import { websiteContent } from '../constants/websiteContent';

const Leadership: React.FC = () => {
    const { leadership } = websiteContent;

    return (
        <div className={styles.leadershipPage}>

            {/* SEO */}
            <SEO
                title="Leadership Team"
                description={leadership.subheading}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">

                    <h1 className={styles.title}>
                        {leadership.heading}
                    </h1>

                    <p className={styles.subtitle}>
                        {leadership.subheading}
                    </p>

                </div>
            </section>

            {/* Team Section */}
            <section className="section container">
                <div className={styles.grid}>

                    {leadership.profiles.map((member, index) => (
                        <Card
                            key={index}
                            className={styles.card}
                            padding="none"
                        >

                            {/* Image */}
                            <div className={styles.imageWrapper}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.image}
                                />
                            </div>

                            {/* Content */}
                            <div className={styles.content}>

                                <h3 className={styles.name}>
                                    {member.name}
                                </h3>

                                <p className={styles.role}>
                                    {member.role}
                                </p>

                                <div className={styles.divider}></div>

                                <ul className={styles.qualificationsList}>
                                    {(member.qualifications as string[]).map((qual, i) => (
                                        <li key={i}>{qual}</li>
                                    ))}
                                </ul>

                                <div className={styles.quoteBox}>
                                    <p>
                                        "{member.quote}"
                                    </p>
                                </div>

                            </div>

                        </Card>
                    ))}

                </div>
            </section>

        </div>
    );
};

export default Leadership;
