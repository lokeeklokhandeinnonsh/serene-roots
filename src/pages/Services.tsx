import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';

import styles from './Services.module.css';

import { websiteContent } from '../constants/websiteContent';

const Services: React.FC = () => {
    const { services, conclusion, contact } = websiteContent;

    return (
        <div className={styles.servicesPage}>

            {/* SEO */}
            <SEO
                title={services.heading}
                description={services.subheading}
            />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">

                    <h1 className={styles.title}>
                        {services.heading}
                    </h1>

                    <p className={styles.subtitle}>
                        {services.subheading}
                    </p>

                </div>
            </section>

            {/* Services Grid */}
            <section className="section container">
                <div className={styles.grid}>

                    {services.items.map((service, index) => (
                        <Card
                            key={index}
                            className={styles.card}
                            hoverable
                        >

                            {/* Title */}
                            <Link to={`/services/${service.id || ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <h3 className={styles.cardTitle}>
                                    {service.title}
                                </h3>
                            </Link>

                            {/* Description */}
                            <p className={styles.cardDesc}>
                                {service.description}
                            </p>

                            {/* Benefits */}
                            <ul className={styles.benefits}>
                                {service.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>

                            {/* Footer */}
                            <div className={styles.cardFooter}>

                                <span className={styles.audience}>
                                    {service.targetAudience}
                                </span>

                                <Link to={`/services/${service.id || ''}`}>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </Link>

                            </div>

                        </Card>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.cta}`}>
                <div className="container">

                    <h2>
                        {conclusion.heading}
                    </h2>

                    <p>
                        {conclusion.content}
                    </p>

                    <Button
                        variant="secondary"
                        size="lg"
                        style={{ marginTop: '1rem' }}
                    >
                        {contact.cta}
                    </Button>

                </div>
            </section>

        </div>
    );
};

export default Services;
