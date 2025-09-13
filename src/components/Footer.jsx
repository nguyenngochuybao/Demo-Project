// src/components/Footer.js
import React from 'react';

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-col">
                    <h4>Download Our App</h4>
                    <p>Download App for Android and iOS mobile phone.</p>
                    {/* Thêm hình ảnh App Store và Google Play */ }
                </div>
                <div className="footer-col">
                    {/* Logo Messi ở giữa */ }
                </div>
                <div className="footer-col">
                    <h4>Follow us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright 2020 | Easy Tutorials</p>
            </div>
        </footer>
    );
};

export default Footer;