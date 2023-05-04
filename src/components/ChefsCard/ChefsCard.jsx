import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {

    const {id, name, imageUrl, yearsOfExperience, numRecipes, likes} = chef;

    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}

            <div className="bg-yellow-200 shadow-xl flex rounded-xl text-black">
                <img className='w-[50%]' src={imageUrl} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title font-bold mb-2">{name}</h2>
                    <p>{yearsOfExperience} <span>Years of Experiences</span></p>
                    <p><span>Recipes: </span>{numRecipes}</p>
                    <p><span>Likes: </span>{likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-black hover:bg-gray-700 hover:text-yellow-200"><Link to='/recipes'>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;