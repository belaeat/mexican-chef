import React from 'react';

const Chef = ({ cook }) => {
    const { chef } = cook;
    console.log(chef)
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-[50%]' src={chef.chefUrl} />
                <div>
                    <h1 className="text-5xl font-bold">{}</h1>
                    <p className="py-6"></p>
                    <p>Likes: </p>
                    <p>Recipes: </p>
                    <p> Years of experiences!</p>
                    <button className="btn btn-primary my-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;