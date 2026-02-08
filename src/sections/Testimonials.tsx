import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import Card from '../components/Card';
import styles from './Testimonials.module.css';

import { websiteContent } from '../constants/websiteContent';

const Testimonials: React.FC = () => {
    const { testimonials } = websiteContent;

    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        {testimonials.heading}
                    </h2>

                    <p className={styles.subheading}>
                        {testimonials.subheading}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className={styles.grid}>
                    {testimonials.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className={styles.card} padding="lg">

                                <Quote
                                    size={32}
                                    className={styles.quoteIcon}
                                />

                                <p className={styles.quote}>
                                    "{item.quote}"
                                </p>

                                <div className={styles.author}>
                                    <p className={styles.name}>
                                        {item.author}
                                    </p>

                                    <p className={styles.role}>
                                        {item.role}
                                    </p>
                                </div>

                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
