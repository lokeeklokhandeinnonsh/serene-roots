import React from 'react';

import Hero from '../sections/Hero';
import Mission from '../sections/Mission';
import ServicesPreview from '../sections/ServicesPreview';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';

import Button from '../components/Button';
import SEO from '../components/SEO';

import { websiteContent } from '../constants/websiteContent';

const Home: React.FC = () => {
    const { home, partnerships, conclusion } = websiteContent;

    return (
        <div className="home-page">

            {/* SEO */}
            <SEO
                title="Home"
                description={home.hero.intro}
            />

            {/* Hero */}
            <Hero />

            {/* Mission */}
            <Mission />

            {/* Services Preview */}
            <ServicesPreview />

            {/* Why Choose Us Section */}
            <div
                style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: 'var(--spacing-2xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">

                    <h2
                        style={{
                            fontFamily: 'var(--font-family-heading)',
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            color: 'var(--color-primary)',
                        }}
                    >
                        {partnerships.heading}
                    </h2>

                    <p
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto 2rem',
                            color: 'var(--color-text-muted)',
                        }}
                    >
                        {partnerships.intro}
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            textAlign: 'left',
                        }}
                    >
                        {partnerships.whyPartner.map((item, index) => (
                            <div key={index}>
                                <h4
                                    style={{
                                        color: 'var(--color-text-main)',
                                        marginBottom: '0.5rem',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    {item}
                                </h4>

                                <p
                                    style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    We are committed to building long-term, impactful partnerships.
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* Partners */}
            <Partners />

            {/* Contact CTA */}
            <section
                className="section"
                style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">

                    <h2
                        style={{
                            fontFamily: 'var(--font-family-heading)',
                            marginBottom: '1rem',
                            color: 'white',
                            fontSize: '2rem',
                        }}
                    >
                        {conclusion.heading}
                    </h2>

                    <p
                        style={{
                            marginBottom: '2rem',
                            opacity: 0.9,
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            marginInline: 'auto',
                        }}
                    >
                        {conclusion.content}
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button variant="secondary" size="lg">
                            {home.hero.ctaPrimary}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            style={{ borderColor: 'white', color: 'white' }}
                        >
                            Contact Us
                        </Button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;
