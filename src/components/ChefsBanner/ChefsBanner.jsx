import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const ChefsBanner = ({ info }) => {

    const { name, imageUrl, rating, ingredients, method, chef} = info;

    const chefsInfo = useLoaderData()
    console.log(chefsInfo)

    return (
        <div>
            <div>
                {
                    chefsInfo.map(cook => <Chef
                        key={cook.id}
                        cook={cook}
                    ></Chef>)
                }
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-[50%]' src='' />
                    <div>
                        <h1 className="text-5xl font-bold"></h1>
                        <p className="py-6"></p>
                        <p>Likes: </p>
                        <p>Recipes: </p>
                        <p> Years of experiences!</p>
                        <button className="btn btn-primary my-6">Get Started</button>
                    </div>
                </div>
            </div>
            <div >

            </div>
        </div>
    );
};

export default ChefsBanner;