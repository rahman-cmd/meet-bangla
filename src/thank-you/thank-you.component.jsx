import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouComponent = () => {
    return (
        <>
            <p style={{ fontSize: '40px' }}>কল শেষ, ধ্যনবাদ। </p>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">পূনরায় কল করুন</Link>
                <p>Developed by: MD. ABDUR RAHMAN</p>
            </div>
        </>
    );
}

export default ThankYouComponent;
