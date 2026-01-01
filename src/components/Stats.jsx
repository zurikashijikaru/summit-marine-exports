import React from 'react';
import './Stats.css';

const Stats = () => {
    const statsData = [
        { label: 'Experience', value: '25+', suffix: 'Years' },
        { label: 'Processing Capacity', value: '90', suffix: 'Tons/Day' },
        { label: 'Workforce', value: '2,500+', suffix: 'Employees' },
        { label: 'Global Reach', value: '10+', suffix: 'Countries' },
    ];

    return (
        <div className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-suffix">{stat.suffix}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
