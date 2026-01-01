import React from 'react';

const Products = () => {
    const products = [
        {
            name: 'Vannamei Shrimp',
            types: 'Head-On, Headless, PD, PDTO, Butterfly',
            desc: 'Farm-raised, mild flavor, firm texture.',
            image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&h=400&fit=crop'
        },
        {
            name: 'Black Tiger Shrimp',
            types: 'Head-On, Headless, Nobashi',
            desc: 'Bold flavor, distinct stripes, premium choice.',
            image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=400&fit=crop'
        },
        {
            name: 'Value Added Products',
            types: 'Cooked, Breaded, Marinated, Skewers',
            desc: 'Ready-to-cook solutions for modern kitchens.',
            image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&h=400&fit=crop'
        },
        {
            name: 'Freshwater Scampi',
            types: 'Whole, Headless',
            desc: 'Sweet, delicate flavor.',
            image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&h=400&fit=crop'
        }
    ];

    const brands = ['Surya Premium', 'Wesgo', 'Pond Gold', 'Seazoy', 'Curry', 'Surya Classic', 'ISR Special', 'Aquadiet'];

    return (
        <div className="page">
            <div className="container section-padding">
                <h1 className="section-title text-center">Our Products</h1>
                <p className="section-subtitle text-center">
                    We process and export a wide variety of premium seafood, specializing in Vannamei and Black Tiger shrimp.
                </p>

                <div style={{ marginTop: '4rem', display: 'grid', gap: '3rem' }}>
                    {products.map((product, i) => (
                        <div key={i} className="product-row">
                            <div className="product-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h2>{product.name}</h2>
                                <p style={{ fontSize: '1.1rem' }}>{product.desc}</p>
                                <p><strong>Available Forms:</strong> {product.types}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="brands-section section-padding">
                <div className="container text-center">
                    <h2>Our Brands</h2>
                    <div className="accent-line" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        {brands.map((brand, i) => (
                            <span key={i} className="brand-tag">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
