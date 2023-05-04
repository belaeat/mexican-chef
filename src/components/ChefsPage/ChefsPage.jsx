import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefsBanner from '../ChefsBanner/ChefsBanner';

const ChefsPage = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const chefsInfo = useLoaderData()

    setData(chefsInfo)

    // console.log(chefsInfo)


    const [chef, setChef] = useState({})

    useEffect(() => {
        const checkData = data.find(chefs => chefs.chef_id == id)
        setChef(checkData)
    }, [data])

    console.log(checkData)

    // console.log(chef)

    // useEffect(() => {
    //     const checkData = chefsInfo.find(chefs => chefs.chef_id == id)
    //     setChef(checkData);
    // }, [chef_id])

    return (
        <div>
            <div className='flex'>
                <img className='w-[50%]' src={chef?.chef?.chefUrl} alt="" />
                <div>
                    <h1 className="text-5xl font-bold"></h1>
                    <p className="py-6"></p>
                    <p>Likes: </p>
                    <p>Recipes: </p>
                    <p> Years of experiences!</p>
                </div>
            </div>
            <div className='bg-yellow-200'>
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