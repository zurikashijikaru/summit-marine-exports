import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedProducts from '../components/FeaturedProducts';
import Certifications from '../components/Certifications';
import heroBg from '../assets/hero-bg.png';

const Home = () => {
    return (
        <div className="home-page">
            <Hero
                title="Summit Marine Exports"
                subtitle="Delivering premium Indian seafood to the world with excellence and sustainability since 1998"
                bgImage={heroBg}
            />

            <Stats />

            <section className="intro-section section-padding">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-header text-center">
                            <span className="intro-badge">🌊 Our Story</span>
                            <h2 className="section-title">Welcome to Summit Marine</h2>
                            <div className="accent-line"></div>
                        </div>
                        <div className="intro-text">
                            <p>
                                Established in 1998, Summit Marine Exports has grown from a humble beginning into a
                                <strong> Three Star Export House</strong> recognized globally for excellence. With over
                                25 years of experience, a processing capacity of 90 tons per day, and a devoted
                                workforce of 2,500+, we deliver the finest quality shrimp to the USA, EU, Japan, and beyond.
                            </p>
                            <p>
                                Our commitment to quality, timeliness, and customer care makes us a trusted partner
                                in the global seafood industry. Every shrimp we export carries our promise of
                                freshness, sustainability, and premium taste.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedProducts />

            <Certifications />

            <section className="cta-section section-padding text-center">
                <div className="cta-overlay"></div>
                <div className="container cta-content">
                    <span className="cta-badge">🤝 Partner With Us</span>
                    <h2>Ready to Elevate Your Seafood Supply?</h2>
                    <p>Join hundreds of satisfied partners worldwide. Contact us today for premium seafood export inquiries.</p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-secondary">Get in Touch</a>
                        <a href="/products" className="btn btn-outline">View Products</a>
                    </div>
                </div>
            </section>

            <style>{`
                .intro-section {
                    background: var(--color-crisp-white);
                    padding: 6rem 0;
                }

                .intro-content {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .intro-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(72, 202, 228, 0.1) 100%);
                    color: var(--color-soft-aqua);
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    border: 1px solid rgba(0, 180, 216, 0.2);
                }

                .intro-text {
                    text-align: center;
                    margin-top: 2rem;
                }

                .intro-text p {
                    font-size: 1.15rem;
                    color: var(--color-muted);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }

                .intro-text strong {
                    color: var(--color-deep-ocean);
                }

                .cta-section {
                    position: relative;
                    background: var(--gradient-ocean);
                    padding: 6rem 0;
                    overflow: hidden;
                }

                .cta-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }

                .cta-content {
                    position: relative;
                    z-index: 1;
                }

                .cta-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    color: var(--color-crisp-white);
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .cta-section h2 {
                    color: var(--color-crisp-white);
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .cta-section p {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1.15rem;
                    max-width: 600px;
                    margin: 0 auto 2rem;
                }

                .cta-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                @media (max-width: 768px) {
                    .cta-section h2 {
                        font-size: 1.75rem;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .cta-buttons .btn {
                        width: 100%;
                        max-width: 280px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;
