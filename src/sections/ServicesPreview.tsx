import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
    Users,
    Baby,
    BookOpen,
    User,
    Briefcase,
    HeartHandshake,
    Layout,
} from 'lucide-react';

import Card from '../components/Card';
import Button from '../components/Button';
import styles from './ServicesPreview.module.css';

import { websiteContent } from '../constants/websiteContent';

/* Map service titles to icons */
const iconMap: Record<string, JSX.Element> = {
    'Therapy Services': <User size={32} />,
    'Parent Counseling': <Users size={32} />,
    'Prenatal Workshops': <Baby size={32} />,
    'School Programs': <BookOpen size={32} />,
    'Corporate Counseling': <Briefcase size={32} />,
    'Mindfulness Programs': <HeartHandshake size={32} />,
    'Design Services': <Layout size={32} />,
};

const ServicesPreview: React.FC = () => {
    const { services } = websiteContent;

    return (
        <section className={`section ${styles.services}`}>
            <div className="container">

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        {services.heading}
                    </h2>

                    <p className={styles.subheading}>
                        {services.subheading}
                    </p>
                </div>

                {/* Services Grid */}
                <div className={styles.grid}>
                    {services.items.slice(0, 4).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card hoverable className={styles.card}>

                                {/* Icon */}
                                <div className={styles.iconWrapper}>
                                    {iconMap[service.title] || <User size={32} />}
                                </div>

                                {/* Title */}
                                <h3 className={styles.cardTitle}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className={styles.cardDesc}>
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <div className={styles.learnMore}>
                                    <Link to={`/services/${service.id || ''}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Learn More →
                                    </Link>
                                </div>

                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <Button variant="secondary" size="lg">
                        View All Services
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default ServicesPreview;
