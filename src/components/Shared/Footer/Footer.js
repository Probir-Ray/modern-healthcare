import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid bg-primary text-white py-4'>
            <div className="footer-top py-3">
                <div className="row">
                    <div className="col-md-4 col-sm-6 p-3">
                        <h4>About Us</h4>
                        <p>Modern Healthcare has pioneered in many endeavors and has achieved many breakthrough milestones.</p>
                        <ul>
                            <li>Phone: +88017-333666</li>
                            <li>Address: Gulshan, Dhaka-1212</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 p-3">
                        <h4 className="mb-3">Blog Post</h4>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Many doctors use wrong test to diagnose kids food</h6>
                            <div className="date italic">August 20, 2021</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Many doctors use wrong test to diagnose kids food</h6>
                            <div className="date italic">August 13, 2021</div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 p-3 sitemap">
                        <h4 className="mb-3">Sitemap</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/home#services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/register">Signup</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center"><p>Copyright &copy; 2021 - Programmers Club</p></div>
        </div>
    );
};

export default Footer;