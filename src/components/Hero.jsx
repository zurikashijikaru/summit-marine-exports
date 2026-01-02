import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Import local images from assets/carousel
import img1 from '../assets/carousel/carousel-1.jpg';
import img2 from '../assets/carousel/carousel-2.JPG';
import img3 from '../assets/carousel/carousel-3.JPG';
import img4 from '../assets/carousel/carousel-4.JPG';
import img5 from '../assets/carousel/carousel-5.JPG';
import img6 from '../assets/carousel/carousel-6.JPG';
import img7 from '../assets/carousel/carousel-7.JPG';
import img8 from '../assets/carousel/carousel-8.JPG';
import img9 from '../assets/carousel/carousel-9.JPG';

const Hero = () => {
    const slides = [
        {
            image: img1,
            title: "Premium Indian Seafood",
            subtitle: "Exporting Freshness & Quality Worldwide"
        },
        {
            image: img2,
            title: "Vannamei Prawns",
            subtitle: "Sustainably Farmed, Expertly Processed"
        },
        {
            image: img3,
            title: "Nobashi Ebi",
            subtitle: "Perfectly Stretched for Authentic Tempura"
        },
        {
            image: img4,
            title: "Global Standards",
            subtitle: "Certified Quality for International Markets"
        },
        {
            image: img5,
            title: "State-of-the-Art Processing",
            subtitle: "Advanced Technology for Superior Hygiene"
        },
        {
            image: img6,
            title: "Tiger Prawns",
            subtitle: "Rich Flavor from Pristine Waters"
        },
        {
            image: img7,
            title: "Sustainable Practices",
            subtitle: "Committed to Responsible Aquaculture"
        },
        {
            image: img8,
            title: "Quality Assurance",
            subtitle: "Rigorous Testing at Every Stage"
        },
        {
            image: img9,
            title: "Global Reach",
            subtitle: "Delivering Excellence Across Continents"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay"></div>
                    <div className="container hero-content text-center">
                        <span className="hero-badge fade-in">🦐 Premium Quality</span>
                        <h1 className="fade-in delay-100">{slide.title}</h1>
                        <p className="fade-in delay-200">{slide.subtitle}</p>
                        <div className="hero-buttons fade-in delay-300">
                            <Link to="/products" className="btn btn-primary">
                                Explore Products
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">
                &#10095;
            </button>

            {/* Dots */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Wave Divider (kept from original) */}
            <div className="wave-divider">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,googl172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
