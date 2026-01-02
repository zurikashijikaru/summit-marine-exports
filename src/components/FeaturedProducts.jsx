import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import imgHeadless from '../assets/carousel/carousel-2.JPG';

const products = [
    {
        id: 1,
        name: 'Vannamei Shrimp',
        desc: 'Premium quality farm-raised white shrimp.',
        tag: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Black Tiger Shrimp',
        desc: 'Large, flavorful tiger prawns.',
        tag: 'Premium',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Value Added',
        desc: 'Cooked, breaded, and marinated options.',
        tag: 'Ready to Cook',
        image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Headless Shell-On',
        desc: 'Processed for convenience and freshness.',
        tag: 'Export Quality',
        image: imgHeadless
    }
];

const FeaturedProducts = () => {
    return (
        <div className="featured-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Premium Selections</h2>
                    <p className="section-subtitle">Discover our range of export-quality seafood processed with precision.</p>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-card-image"
                                    loading="lazy"
                                />
                                <div className="product-overlay"></div>
                            </div>
                            <div className="product-info">
                                <span className="product-tag">{product.tag}</span>
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <Link to="/products" className="link-arrow">View Details &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link to="/products" className="btn btn-secondary">View All Products</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
