import React, { useEffect, useState } from 'react';
import ChefsCard from '../ChefsCard/ChefsCard';
// import FoodGallery from '../FoodGallery/FoodGallery';

const Home = () => {

    const [chefs, setChefs] = useState([])
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('https://b7a10-mexican-chef-server-side-belaeat.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])


    useEffect(() => {
        fetch('https://b7a10-mexican-chef-server-side-belaeat.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='mx-auto'>
            <div className="hero min-h-screen mt-8 mb-12" style={{ backgroundImage: `url(./banner.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Welcome</h1>
                        <p className="mb-5 text-white">Mexican Chef is a home for Mexican food lovers. Here you can find best Mexican chefs and their popular recipes. Stay tuned, many more recipes to come!!!!</p>
                    </div>
                </div>
            </div>
            <div className='my-12 mx-auto grid gap-4 sm:w-[70%] mb-12'>
                <h2 className='text-3xl font-bold text-center text-white mt-12 mb-8'>Meet Our Chefs</h2>
                <p className='text-center mb-12 text-white'>You will be amazed by the recipes from our chefs. They are well experienced. You will remember your meal forever. Taste guaranteed!</p>
                <div className='w-full'>
                    {
                        chefs.map(chef => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        ></ChefsCard>)
                    }
                </div>
            </div>
            {/* <div className='my-12'>
                <div className='text-white text-center my-12'>
                    <h2 className='font-bold text-3xl mb-8'>Welcome to our Food Gallery</h2>
                    <p>Here you can find our best selling recipes around the world. We are not just famous in our country, we are famous worldwide!!!</p>
                </div>
                {
                    recipes.map(recipe => <FoodGallery
                        key={recipe.id}
                        recipe={recipe}
                    ></FoodGallery>)
                }
            </div> */}
        </div>
    );
};

export default Home;