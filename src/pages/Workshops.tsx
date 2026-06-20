import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import styles from './Workshops.module.css';

const upcomingWorkshops = [
    {
        id: 3,
        image: '/poster3.jpeg',
        title: 'Upcoming Workshop',
        link: '/contact'
    },
    {
        id: 4,
        image: '/poster4.jpeg',
        title: 'Upcoming Camp',
        link: '/contact'
    }
];

const pastWorkshops = [
    {
        id: 1,
        image: '/poster1.jpeg',
        title: 'Summer Workshop',
        link: '/contact'
    },
    {
        id: 2,
        image: '/poster2.jpeg',
        title: 'Little Friends Camp',
        link: '/contact'
    }
];

const Workshops: React.FC = () => {
    const navigate = useNavigate();

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
                    {upcomingWorkshops.map((item) => (
                        <div
                            key={item.id}
                            className={styles.posterCard}
                            onClick={() => navigate(item.link)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.posterImage}
                            />
                            <div className={styles.overlay}>
                                <span>Register Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container" style={{ paddingTop: '0' }}>
                <h2 className={styles.heading}>Past Events</h2>
                <div className={styles.grid}>
                    {pastWorkshops.map((item) => (
                        <div
                            key={item.id}
                            className={styles.posterCard}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.posterImage}
                            />
                        </div>
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
        </div>
    );
};

export default Workshops;
