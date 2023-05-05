import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 g-4 my-12'>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is the differences between uncontrolled and controlled components?</h2>
                <p>
                    Controlled components are React components that store their data in the component's state and rely on callbacks to update that state. They typically use event handlers to update state and re-render the component. With controlled components, React controls the state of the component and the component only updates in response to changes in the state.
                </p>
                <p>
                    On the other hand, uncontrolled components store their data in the DOM rather than in the component's state. They typically use refs to access and update the data. With uncontrolled components, the DOM is the source of truth and the component updates whenever the DOM changes.
                </p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>How to validate React props using PropTypes?</h2>
                <p>First, we need to install the proto-types package with the command npm install proto-types. Then we need to import the ProtoType module at the top of our file. After that, we need to define our components and props.</p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is the difference between nodejs and express js?</h2>
                <p>
                    Node.js is a JavaScript runtime built on the Chrome V8 engine. It allows developers to run JavaScript code outside of a web browser, making it possible to build server-side applications using JavaScript. Node.js provides a range of built-in modules for performing common tasks like working with the file system, creating HTTP servers, and handling network communication.
                </p>
                <p>
                    Express.js, on the other hand, is a popular web framework for Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, templating, and error handling. Express.js simplifies the process of building web applications by providing a structured approach to development.
                </p>
            </div>
            <div className='p-4 bg-green-300 rounded-lg m-4 text-black'>
                <h2 className='font-bold text-2xl mb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom hook is a JavaScript function that allows us to reuse stateful logic across multiple React components. Custom hooks are a way to extract complex logic out of components, making them more reusable, easier to test, and easier to read. Custom hooks provide a powerful tool for abstracting and reusing logic across your React components.</p>
            </div>
        </div>
    );
};

export default Blog;