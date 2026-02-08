import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import Input from '../components/Input';
import Button from '../components/Button';
import SEO from '../components/SEO';
import styles from './Contact.module.css';

import { contactDetails } from '../constants/websiteContent';

const Contact: React.FC = () => {
    // ... existing state ...
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

        if (!accessKey) {
            console.error("Web3Forms access key is missing.");
            alert("Configuration error: Email service is not properly set up.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject || "Website Inquiry",
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Form Submitted", result);
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                console.error("Submission failed", result);
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactPage}>
            <SEO
                title="Contact Us"
                description="Get in touch with Serene Roots for appointments and inquiries."
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>We are here to answer your questions and support you.</p>
                </div>
            </section>

            <section className="section container">
                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.infoColumn}>
                        <h2 className={styles.heading}>Contact Information</h2>
                        <p className={styles.text}>
                            Reach out to us via phone, email, or visit our center.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>
                                        <a href={`tel:${contactDetails.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            {contactDetails.phone}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>
                                        <a href={`mailto:${contactDetails.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            {contactDetails.email}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><MapPin size={20} /></div>
                                <div>
                                    <h4>Address</h4>
                                    <p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                        >
                                            {contactDetails.address}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/919833861516?text=Hi I would like to book a consultation with Serene Roots"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBox}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <MessageCircle size={24} />
                            <span>Chat with us on WhatsApp</span>
                        </a>

                        {/* Map Placeholder */}
                        <div className={styles.mapPlaceholder}>
                            <iframe
                                title="Serene Roots Location"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Send a Message</h3>
                            {success && (
                                <div className={styles.successMessage}>
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <Input
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className={styles.row}>
                                    <Input
                                        label="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Input
                                    label="Message"
                                    name="message"
                                    multiline
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    disabled={loading}
                                    style={{ width: '100%' }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
