import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import styles from './ServiceDetail.module.css';
import { websiteContent } from '../constants/websiteContent';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = websiteContent.detailedServices.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className={styles.serviceDetail}>
            <SEO
                title={service.title}
                description={service.shortDescription}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}
                    </div>
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.subtitle}>{service.shortDescription}</p>
                </div>
            </section>

            <div className={`container ${styles.content}`}>
                {/* Full Description */}
                <div className={styles.description}>
                    {service.fullDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Highlights */}
                <div className={styles.highlights}>
                    <h3>Key Highlights</h3>
                    <ul className={styles.highlightList}>
                        {service.highlights.map((highlight, index) => (
                            <li key={index} className={styles.highlightItem}>
                                <Check size={20} />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Ready to take the next step?
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">
                            Book a Consultation
                        </Button>
                    </Link>
                    <div style={{ marginTop: '1rem' }}>
                        <Link to="/services" style={{ textDecoration: 'none', color: 'var(--color-primary)' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ArrowLeft size={16} /> Back to Services
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
