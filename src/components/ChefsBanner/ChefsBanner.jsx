import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefsBanner = ({ info }) => {

    const { name, imageUrl, rating, ingredients, method } = info;
    // console.log(info.id)

    // const chefsInfo = useLoaderData()
    // console.log(chefsInfo)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-[50%]' src={imageUrl} />
                    <div>
                        <h1>{name}</h1>
                        <p>Ingredients: {ingredients}</p>
                        <p>Cooking Method: {method}</p>
                        <p>Rating: {rating}</p>
                        <button className="btn btn-primary my-6">Add To Favorite</button>
                    </div>
                </div>
            </div>
            <div >

            </div>
        </div>
    );
};

export default ChefsBanner;