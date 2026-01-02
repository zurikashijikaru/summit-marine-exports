import React from 'react';
import { FaUsers, FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';
import SEO from '../components/SEO';

const Careers = () => {
    const benefits = [
        { icon: FaUsers, title: 'Team Culture', desc: 'Collaborative and supportive work environment' },
        { icon: FaGraduationCap, title: 'Growth', desc: 'Continuous learning and development opportunities' },
        { icon: FaHeart, title: 'Benefits', desc: 'Competitive salary and comprehensive health coverage' },
        { icon: FaRocket, title: 'Impact', desc: 'Be part of a global seafood export leader' }
    ];

    const openings = [
        { title: 'Quality Control Manager', location: 'Bhimavaram', type: 'Full-time' },
        { title: 'Export Documentation Specialist', location: 'Bhimavaram', type: 'Full-time' },
        { title: 'Production Supervisor', location: 'Bhimavaram', type: 'Full-time' },
        { title: 'Sales Executive - International', location: 'Remote', type: 'Full-time' }
    ];

    return (
        <div className="page">
            <SEO
                title="Careers in Seafood Industry | Jobs in Bhimavaram"
                description="Join Summit Marine Exports. Current openings for Quality Control, Production Supervisors, and Export Managers in Bhimavaram, Andhra Pradesh."
                url="/careers"
            />
            <div className="container section-padding">
                <h1 className="section-title text-center">Join Our Team</h1>
                <p className="section-subtitle text-center">
                    Build your career with a leader in premium seafood exports
                </p>

                {/* Why Join Us */}
                <div className="card-grid" style={{ marginTop: '4rem' }}>
                    {benefits.map((item, i) => (
                        <div key={i} className="value-card text-center">
                            <item.icon style={{ fontSize: '2.5rem', color: 'var(--color-soft-aqua)', marginBottom: '1rem' }} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Openings */}
            <section className="section-padding section-alt">
                <div className="container">
                    <h2 className="section-title text-center">Current Openings</h2>
                    <div className="accent-line"></div>
                    <div style={{ marginTop: '3rem', display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '3rem auto 0' }}>
                        {openings.map((job, i) => (
                            <div key={i} className="value-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ color: 'var(--color-deep-ocean)', marginBottom: '0.25rem' }}>{job.title}</h3>
                                    <p className="text-muted">{job.location} • {job.type}</p>
                                </div>
                                <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Apply</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact for Careers */}
            <section className="brands-section section-padding">
                <div className="container text-center">
                    <h2>Don't see a role for you?</h2>
                    <p style={{ opacity: 0.8, marginTop: '1rem', marginBottom: '2rem' }}>
                        Send your resume to hr@summitmarineexports.com and we'll keep you in mind for future opportunities.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Careers;
