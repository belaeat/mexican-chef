import React, { useEffect, useState } from 'react';
import ChefsPage from '../ChefsPage/ChefsPage';

const Recipes = () => {

    return (
        <div className='my-12'>
            <div>
                {
                    chefsRecipes.map(recipes => <ChefsPage
                        key={recipes.id}
                        recipes={recipes}
                    ></ChefsPage>)
                }
            </div>

            <h2>Recipes will appear here: {chefsRecipes.length}</h2>
        </div>
    );
};

export default Recipes;