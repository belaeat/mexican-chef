import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Contact Info</span>
                    <a className="link link-hover">55670-203, Largo Ferraz</a>
                    <a className="link link-hover">Bloco A Santa Mateus d'Oeste</a>
                    <a className="link link-hover">PE</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </div>                
                <div>
                    <span className="footer-title">Opening Hours</span>
                    <p>Everyday from 10AM to 10PM</p>
                </div>
                <div>
                    <span className="footer-title">Reservation</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Book a Table</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Your email address here" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;