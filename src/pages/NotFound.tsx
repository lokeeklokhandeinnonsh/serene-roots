import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>404</h1>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <Button variant="primary" size="lg">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;
