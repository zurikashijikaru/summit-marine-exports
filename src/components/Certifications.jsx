import React from 'react';
import './Certifications.css';

import certImage from '../assets/certificates/Certificate1.png';

const Certifications = () => {
    return (
        <div className="certs-section section-padding">
            <div className="container text-center">
                <h2 className="section-title">Quality Certifications</h2>
                <p className="section-subtitle">Committed to the highest global standards of safety and sustainability.</p>

                <div className="certs-display" style={{ marginTop: '3rem' }}>
                    <img
                        src={certImage}
                        alt="Our Quality Certifications: BRCGS, USFDA, BAP, ASC, EU Approved, FSSAI"
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '150px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
