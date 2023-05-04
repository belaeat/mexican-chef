import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router-dom';
import ChefsBanner from '../ChefsBanner/ChefsBanner';
import ChefsInfo from '../ChefsPage/ChefsPage';

const Recipes = () => {
    

    

    return (
        <div className='my-12'>
            {/* <div>
                {
                    chefs.map(chef => <ChefsInfo
                        key={chef.id}
                        chef={chef}
                    ></ChefsInfo>)
                }
            </div> */}
            <div>
                {
                    chefsRecipes.map(recipes => <ChefsInfo
                        key={recipes.id}
                        recipes={recipes}
                    ></ChefsInfo>)
                }
            </div>

            <h2>Recipes will appear here: {chefsRecipes.length}</h2>
        </div>
    );
};

export default Recipes;