import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefsBanner from '../ChefsBanner/ChefsBanner';

const ChefsPage = () => {
    const { id } = useParams()
    const chefsInfo = useLoaderData()
    const checkData = chefsInfo.find(chefs => chefs.chef_id == id)
    // console.log(checkData)


    return (
        <div>
            <div className='flex items-center rounded-lg bg-white text-black my-12'>
                <img className='w-[50%]' src={checkData.chef.chefUrl} alt="" />
                <div className='ms-6'>
                    <h1 className="text-5xl font-bold">{checkData.chef.name}</h1>
                    <p className="py-6">{checkData.chef.bio}</p>
                    <p><span className='font-bold'>Likes:</span> {checkData.chef.likes}</p>
                    <p><span className='font-bold'>Recipes:</span> {checkData.chef.numRecipes}</p>
                    <p className='font-bold'>{checkData.chef.yearsOfExperience} Years of experiences!</p>
                </div>
            </div>
            <h2 className='font-bold text-white text-center text-3xl my-12'>{checkData.chef.name}'s Special Recipes</h2>
            <div className=''>
                {
                    chefsInfo.map(info => <ChefsBanner
                        key={info.id}
                        info={info}
                    ></ChefsBanner>)
                }
            </div>
        </div>
    );
};

export default ChefsPage;