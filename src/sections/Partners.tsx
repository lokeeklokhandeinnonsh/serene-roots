import React from 'react';
import styles from './Partners.module.css';

import { websiteContent } from '../constants/websiteContent';

const Partners: React.FC = () => {
    const { partners } = websiteContent;

    return (
        <section className={`section ${styles.partners}`}>
            <div className="container">

                {/* Heading */}
                <h3 className={styles.heading}>
                    {partners.heading}
                </h3>

                {/* Partners Grid */}
                <div className={styles.grid}>
                    {partners.organizations.map((org, index) => (
                        <div
                            key={index}
                            className={styles.logoPlaceholder}
                        >
                            {org}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Partners;
