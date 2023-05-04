import React from 'react';
import ChefsCard from '../ChefsCard/ChefsCard';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-8 mb-12" style={{ backgroundImage: `url(./banner.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Welcome</h1>
                        <p className="mb-5 text-white">Mexican Chef is a home for Mexican food lovers. Here you can find best Mexican chefs and their popular recipes. Stay tuned, many more recipes to come!!!!</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className='my-12'>
                <ChefsCard></ChefsCard>
            </div>
        </div>
    );
};

export default Home;