import React from 'react';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Awards = () => {
    const awards = [
        { year: '2010', title: 'Rajiv Shiromani Award', desc: 'Excellence in seafood exports' },
        { year: '2015', title: 'Best Exporter Award', desc: 'MPEDA recognition for quality exports' },
        { year: '2018', title: 'Three Star Export House', desc: 'Government of India recognition' },
        { year: '2020', title: 'Top 10 US Shrimp Exporter', desc: 'Industry leadership recognition' },
        { year: '2022', title: 'Sustainability Excellence', desc: 'BAP 4-Star certification achievement' }
    ];

    return (
        <div className="page">
            <div className="container section-padding">
                <h1 className="section-title text-center">Awards & Achievements</h1>
                <p className="section-subtitle text-center">
                    Recognition of our commitment to excellence in seafood exports
                </p>

                <div className="timeline" style={{ marginTop: '4rem' }}>
                    {awards.map((award, i) => (
                        <div key={i} className="timeline-item">
                            <h3>{award.year} - {award.title}</h3>
                            <p>{award.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Highlights Section */}
            <section className="brands-section section-padding">
                <div className="container text-center">
                    <h2>Industry Recognition</h2>
                    <div className="card-grid" style={{ marginTop: '2rem' }}>
                        <div style={{ padding: '2rem' }}>
                            <FaTrophy style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3 style={{ color: 'white' }}>25+ Years</h3>
                            <p style={{ opacity: 0.8 }}>Industry Excellence</p>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <FaMedal style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3 style={{ color: 'white' }}>Top 10</h3>
                            <p style={{ opacity: 0.8 }}>US Shrimp Exporter</p>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <FaStar style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3 style={{ color: 'white' }}>3-Star</h3>
                            <p style={{ opacity: 0.8 }}>Export House</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Awards;
