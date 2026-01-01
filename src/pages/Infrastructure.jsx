import React from 'react';
import { FaIndustry, FaSnowflake, FaTruck, FaUsers } from 'react-icons/fa';

const Infrastructure = () => {
    const facilities = [
        { icon: FaIndustry, title: 'Processing Plants', desc: '2 state-of-the-art facilities with 90 tons/day capacity', stat: '90 T/Day' },
        { icon: FaSnowflake, title: 'Cold Storage', desc: 'Advanced refrigeration maintaining -25°C for freshness', stat: '-25°C' },
        { icon: FaTruck, title: 'Logistics', desc: 'Dedicated fleet ensuring on-time delivery worldwide', stat: '10+ Countries' },
        { icon: FaUsers, title: 'Workforce', desc: 'Skilled team committed to quality and excellence', stat: '2,500+' }
    ];

    return (
        <div className="page">
            <div className="container section-padding">
                <h1 className="section-title text-center">Infrastructure</h1>
                <p className="section-subtitle text-center">
                    World-class facilities powering our premium seafood exports
                </p>

                <div className="card-grid" style={{ marginTop: '4rem' }}>
                    {facilities.map((item, i) => (
                        <div key={i} className="value-card text-center">
                            <item.icon style={{ fontSize: '2.5rem', color: 'var(--color-soft-aqua)', marginBottom: '1rem' }} />
                            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-coral)', marginBottom: '0.5rem' }}>
                                {item.stat}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
