import React from 'react';
import { FaGlobe, FaShip, FaHandshake } from 'react-icons/fa';
import SEO from '../components/SEO';
import globalReachImg from '../assets/carousel/carousel-5.JPG';

const Exports = () => {
    const exportRegions = [
        { region: 'North America', countries: 'USA, Canada', percentage: '45%' },
        { region: 'Europe', countries: 'UK, Germany, France, Netherlands', percentage: '30%' },
        { region: 'Asia Pacific', countries: 'Japan, South Korea, Australia', percentage: '20%' },
        { region: 'Middle East', countries: 'UAE, Saudi Arabia', percentage: '5%' }
    ];

    return (
        <div className="page">
            <SEO
                title="Global Shrimp Exporter to USA, EU, Japan | Summit Marine"
                description="Summit Marine Exports supplies premium Indian shrimp to 10+ countries including USA, UK, Germany, France, and Japan. Reliable international shipping."
                url="/exports"
            />
            <div className="container section-padding">
                <h1 className="section-title text-center">International Exports</h1>
                <p className="section-subtitle text-center">
                    Delivering premium Indian seafood to markets across the globe
                </p>

                <div className="card-grid" style={{ marginTop: '4rem' }}>
                    {exportRegions.map((item, i) => (
                        <div key={i} className="value-card">
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-soft-aqua)', marginBottom: '0.5rem' }}>
                                {item.percentage}
                            </div>
                            <h3 style={{ color: 'var(--color-deep-ocean)' }}>{item.region}</h3>
                            <p>{item.countries}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="brands-section section-padding" style={{
                background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${globalReachImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <div className="container text-center">
                    <h2>Why Partner With Us?</h2>
                    <div className="card-grid" style={{ marginTop: '2rem' }}>
                        <div style={{ padding: '2rem' }}>
                            <FaGlobe style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.9 }} />
                            <h3 style={{ color: 'white' }}>Global Reach</h3>
                            <p style={{ opacity: 0.8 }}>Exports to 10+ countries with established distribution networks</p>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <FaShip style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.9 }} />
                            <h3 style={{ color: 'white' }}>Reliable Shipping</h3>
                            <p style={{ opacity: 0.8 }}>On-time delivery with temperature-controlled logistics</p>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <FaHandshake style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.9 }} />
                            <h3 style={{ color: 'white' }}>Trusted Partner</h3>
                            <p style={{ opacity: 0.8 }}>25+ years of building lasting business relationships</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exports;
