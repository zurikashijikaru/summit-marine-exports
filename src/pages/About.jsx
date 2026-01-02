import React from 'react';
import facilityImg from '../assets/carousel/carousel-9.JPG'; // High-quality facility image

const About = () => {
    const timeline = [
        { year: '1998', event: 'Established as Surya Marine Exports.' },
        { year: '2001', event: 'Established Summit Marine Exports Pvt. Ltd. and set up the first processing plant with a capacity of 20 tons/day.' },
        { year: '2010', event: 'Received the Rajiv Shiromani Award for excellence in exports.' },
        { year: '2020', event: 'Expanded with a new Value-Added Product processing plant.' },
        { year: 'Today', event: 'Recognized as a Three Star Export House with 90 tons/day capacity.' }
    ];

    const values = [
        { title: 'Timeliness', desc: 'We honor our delivery commitments with precision logistics.' },
        { title: 'Devoted Commitment', desc: '2,500+ employees dedicated to maintaining the highest standards.' },
        { title: 'Customer Care & Quality', desc: 'Uncompromising quality control for total customer satisfaction.' }
    ];

    return (
        <div className="page">
            {/* Leadership Section */}
            <section className="section-padding container">
                <div className="row">
                    <div style={{ flex: 1 }}>
                        <img
                            src={facilityImg}
                            alt="Summit Marine Facility"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 className="section-title">Leadership</h2>
                        <h3 style={{ color: 'var(--color-deep-ocean)', marginBottom: '1rem' }}>
                            Dr. Surya Rao Irrinki
                        </h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-coral)', fontWeight: '600' }}>
                            Managing Director & Founder
                        </p>
                        <p className="text-muted">
                            With over two decades of experience in the seafood industry, Dr. Rao established
                            Summit Marine Exports with a vision to bring world-class Indian seafood to the
                            global table. His commitment to quality and sustainability has guided the company
                            from a small startup to a Top 10 US Shrimp Exporter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding section-alt">
                <div className="container">
                    <h2 className="section-title text-center">Our Journey</h2>
                    <div className="accent-line"></div>
                    <div className="timeline">
                        {timeline.map((item, i) => (
                            <div key={i} className="timeline-item">
                                <h3>{item.year}</h3>
                                <p>{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding container text-center">
                <h2 className="section-title">Core Values</h2>
                <div className="accent-line"></div>
                <div className="card-grid">
                    {values.map((value, i) => (
                        <div key={i} className="value-card">
                            <h3>{value.title}</h3>
                            <p>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
