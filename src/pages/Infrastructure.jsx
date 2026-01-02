import React from 'react';
import { FaIndustry, FaSnowflake, FaTruck, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import plantImg from '../assets/carousel/carousel-4.JPG';
import coldStorageImg from '../assets/carousel/carousel-7.JPG';
import logisticsImg from '../assets/carousel/carousel-6.JPG';
import workforceImg from '../assets/carousel/carousel-1.jpg';

const Infrastructure = () => {
    const facilities = [
        { icon: FaIndustry, title: 'Processing Plants', desc: '2 state-of-the-art facilities with 90 tons/day capacity', stat: '90 T/Day', img: plantImg },
        { icon: FaSnowflake, title: 'Cold Storage', desc: 'Advanced refrigeration maintaining -25°C for freshness', stat: '-25°C', img: coldStorageImg },
        { icon: FaTruck, title: 'Logistics', desc: 'Dedicated fleet ensuring on-time delivery worldwide', stat: '10+ Countries', img: logisticsImg },
        { icon: FaUsers, title: 'Workforce', desc: 'Skilled team committed to quality and excellence', stat: '2,500+', img: workforceImg }
    ];

    return (
        <div className="page">
            <SEO
                title="Seafood Processing Infrastructure | Cold Storage Bhimavaram"
                description="State-of-the-art shrimp processing facilities with 90 tons/day capacity. Advanced cold storage (-25°C) and dedicated logistics fleet in Andhra Pradesh."
                url="/infrastructure"
            />
            <div className="container section-padding">
                <h1 className="section-title text-center">Infrastructure</h1>
                <p className="section-subtitle text-center">
                    World-class facilities powering our premium seafood exports
                </p>

                <div className="card-grid" style={{ marginTop: '4rem' }}>
                    {facilities.map((item, i) => (
                        <div key={i} className="value-card text-center" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <item.icon style={{ fontSize: '2.5rem', color: 'var(--color-soft-aqua)', marginBottom: '1rem' }} />
                                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-coral)', marginBottom: '0.5rem' }}>
                                    {item.stat}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
