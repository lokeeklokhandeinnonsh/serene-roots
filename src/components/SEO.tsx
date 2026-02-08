import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
}

import { contactDetails } from '../constants/websiteContent';

interface SEOProps {
    title: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    useEffect(() => {
        document.title = `${title} | Serene Roots`;
        if (description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }

        // Add Structured Data (JSON-LD)
        const scriptId = 'serialized-schema-org';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Serene Roots",
            "description": description || "Holistic therapy and wellness support for individuals, families, and communities.",
            "url": window.location.origin,
            "telephone": contactDetails.phone,
            "email": contactDetails.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": contactDetails.address,
                "addressCountry": "IN"
            }
        };

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schemaData);

        return () => {
            // Optional: cleanup or leave it
        };
    }, [title, description]);

    return null;
};

export default SEO;
