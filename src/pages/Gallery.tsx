import React from 'react';
import SEO from '../components/SEO';
import styles from './Gallery.module.css';

const galleryImages = [
    { id: 1, src: '/grp1.jpeg', alt: 'Workshop Group Photo 1' },
    { id: 2, src: '/grp2.jpeg', alt: 'Workshop Group Photo 2' },
    { id: 3, src: '/grp3.jpeg', alt: 'Workshop Group Photo 3' },
    { id: 4, src: '/grp4.jpeg', alt: 'Workshop Group Photo 4' },
    { id: 5, src: '/grp5.jpeg', alt: 'Workshop Group Photo 5' },
    { id: 6, src: '/grp6.jpeg', alt: 'Workshop Group Photo 6' },
    { id: 7, src: '/grp7.jpeg', alt: 'Workshop Group Photo 7' },
    { id: 8, src: '/grp8.jpeg', alt: 'Workshop Group Photo 8' },
];

const Gallery: React.FC = () => {
    return (
        <div className={styles.galleryPage}>
            <SEO 
                title="Gallery" 
                description="Explore moments from our workshops, events, and community gatherings." 
            />
            
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Gallery</h1>
                    <p className={styles.subtitle}>
                        A glimpse into our workshops, events, and the wonderful community we're building at Serene Roots.
                    </p>
                </div>
            </section>

            <section className="section container" style={{ paddingTop: 0 }}>
                <div className={styles.grid}>
                    {galleryImages.map((image) => (
                        <div key={image.id} className={styles.imageCard}>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className={styles.image} 
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
