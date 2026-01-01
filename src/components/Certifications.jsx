import React from 'react';
import './Certifications.css';

// Placeholder logos - in prod these would be images
const CertsData = [
    { name: 'BRCGS', color: '#009fe3' },
    { name: 'USFDA', color: '#2C3E50' },
    { name: 'BAP 4-Star', color: '#005a9c' },
    { name: 'ASC', color: '#33AE4C' },
    { name: 'EU Approved', color: '#FFD700' },
    { name: 'FSSAI', color: '#f58220' }
];

const Certifications = () => {
    return (
        <div className="certs-section section-padding">
            <div className="container text-center">
                <h2 className="section-title">Quality Certifications</h2>
                <p className="section-subtitle">Committed to the highest global standards of safety and sustainability.</p>

                <div className="certs-grid">
                    {CertsData.map((cert, index) => (
                        <div key={index} className="cert-item" style={{ borderColor: cert.color }}>
                            {/* In a real app, <img src={...} /> */}
                            <span style={{ color: cert.color, fontWeight: 'bold' }}>{cert.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
