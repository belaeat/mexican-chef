import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBanner from '../ChefsBanner/ChefsBanner';

const ChefsPage = () => {
    const chefsInfo = useLoaderData()
    // console.log(chefsRecipes)

    return (
        <div>
            {
                chefsInfo.map(info => <ChefsBanner
                    key={info.id}
                    info={info}
                ></ChefsBanner>)
            }
        </div>
    );
};

export default ChefsPage;