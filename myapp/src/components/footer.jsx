import React from 'react';
import Button from './button';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-suscription-heading">
                    Join the Adventure Newsletter to receive our best vacaction deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name='email' placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Aout Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Video</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">TRVL @ 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" arial-label="facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" arial-label="facebook" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" arial-label="facebook" aria-label="Youtube">
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" arial-label="Twitter" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" arial-label="Twitter" aria-label="LinkedIn">
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
     );
}
 
export default Footer;