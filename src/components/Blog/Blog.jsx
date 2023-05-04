import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 g-4'>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is the differences between uncontrolled and controlled components?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate minima, debitis fuga velit sit quos quidem aut non, enim quaerat inventore sunt culpa eaque perferendis sequi itaque dolore iure!</p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>How to validate React props using PropTypes?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae id facere quidem sequi ullam eligendi. Libero aut expedita animi modi, aspernatur ut. Rem sit, architecto pariatur aperiam eaque dolores veniam.</p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is the difference between nodejs and express js?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed eveniet eaque accusantium in ut, quae quibusdam sit neque ratione sunt aspernatur molestiae amet tenetur cumque quam necessitatibus tempora fugit?</p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore ex dicta laudantium? A nam, aspernatur dicta adipisci impedit minima earum at, quibusdam vel harum, dolore quaerat error magni qui.</p>
            </div>
        </div>
    );
};

export default Blog;