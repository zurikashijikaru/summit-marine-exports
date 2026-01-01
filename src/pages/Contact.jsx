import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        { icon: FaMapMarkerAlt, label: 'Address', value: 'Rs #130, Yanamadurru Village, Bhimavaram, AP - 534239, India' },
        { icon: FaEnvelope, label: 'Email', value: 'sales@summitmarineexports.com' },
        { icon: FaPhone, label: 'Phone', value: '+91 98485 23600' },
        { icon: FaClock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM' }
    ];

    return (
        <div className="page">
            <div className="container section-padding">
                <h1 className="section-title text-center">Contact Us</h1>
                <p className="section-subtitle text-center">
                    Ready to partner with us? Get in touch for premium seafood export inquiries.
                </p>

                <div className="row" style={{ marginTop: '4rem' }}>
                    {/* Contact Info */}
                    <div>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--color-deep-ocean)' }}>Get In Touch</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {contactInfo.map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <item.icon style={{ color: 'var(--color-coral)', fontSize: '1.25rem', marginTop: '4px' }} />
                                    <div>
                                        <strong style={{ color: 'var(--color-deep-ocean)' }}>{item.label}</strong>
                                        <p className="text-muted">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="image-placeholder" style={{ height: '400px' }}>
                        📍 Map Location
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
