import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Calendar, Download } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './Workshops.module.css';

const workshops = [
    {
        title: "Mindfulness for Beginners",
        date: "March 15, 2024",
        time: "10:00 AM - 2:00 PM",
        desc: "Learn the basics of mindfulness meditation and how to integrate it into your daily life to reduce stress.",
        status: "Open"
    },
    {
        title: "Positive Parenting Tools",
        date: "April 5, 2024",
        time: "1:00 PM - 4:00 PM",
        desc: "Practical strategies for parents to build better connection and communication with their children.",
        status: "Filling Fast"
    }
];

const Workshops: React.FC = () => {
    return (
        <div className={styles.workshopsPage}>
            <SEO
                title="Workshops & Events"
                description="Join our upcoming workshops on mindfulness, parenting, and mental wellness."
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Workshops & Events</h1>
                    <p className={styles.subtitle}>Join our community events to learn, grow, and connect.</p>
                </div>
            </section>

            <section className="section container">
                <h2 className={styles.heading}>Upcoming Events</h2>
                <div className={styles.grid}>
                    {workshops.map((event, index) => (
                        <Card key={index} className={styles.card}>
                            <div className={styles.dateBadge}>
                                <Calendar size={18} />
                                <span>{event.date}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{event.title}</h3>
                            <p className={styles.time}>{event.time}</p>
                            <p className={styles.desc}>{event.desc}</p>
                            <div className={styles.footer}>
                                <span className={`${styles.status} ${event.status === 'Open' ? styles.open : styles.filling}`}>
                                    {event.status}
                                </span>
                                <Button size="sm" variant="primary">Register</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className={`section ${styles.brochureSection}`}>
                <div className="container">
                    <div className={styles.brochureBox}>
                        <div>
                            <h3>Download Our Workshop Catalog</h3>
                            <p>Get detailed information about all our upcoming programs for the year.</p>
                        </div>
                        <Button variant="outline" size="lg" className={styles.downloadBtn}>
                            <Download size={20} style={{ marginRight: '0.5rem' }} /> Download PDF
                        </Button>
                    </div>
                </div>
            </section>

            <section className="section container">
                <h2 className={styles.heading}>Past Events Gallery</h2>
                <div className={styles.gallery}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={styles.galleryItem}>
                            <div className={styles.galleryPlaceholder}>Event Photo {item}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Workshops;
