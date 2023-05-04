import React from 'react';

const ChefsBanner = ({ info }) => {

    const { name, imageUrl, rating, ingredients, method } = info;

    return (
        <div>
            <div className="hero min-h-screen bg-yellow-200 my-12 rounded-lg text-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-[50%] h-full' src={imageUrl} />
                    <div className='ms-6'>
                        <h1 className='font-bold text-3xl mb-4'>{name}</h1>
                        <p><span className='font-bold mb-4'>Ingredients:</span> {ingredients}</p>
                        <p><span className='font-bold mb-4'>Cooking Method:</span> {method}</p>
                        <p><span className='font-bold mb-4'>Rating:</span> {rating}</p>
                        <button className="btn btn-primary my-6 bg-black text-yellow-200 outline-none hover:bg-white hover:text-black">Add To Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsBanner;