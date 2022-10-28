import React from 'react';

const Blog = () => {
    return (
        <div className='bg-orange-400'>
        <div className='text-center grid lg:grid-cols-2 grid-cols-1 mx-auto py-10 text-white w-8/12 gap-10 pt-28 lg:pt-10 pb-60 lg:pb-0'>
            
            <div >
                <h1 className='text-2xl font-semibold'>what is cors?</h1>
                <p>Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <li>MongoDB.</li>
<li>Oracle Database.</li>
<li>Amazon Redshift.</li>
<li>DataStax Enterprise.</li>
<li>Redis Enterprise Cloud.</li>
<li>Cloudera Enterprise Data Hub.</li>

<li>Couchbase Server.</li>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'>What is Node? How does Node work?</h1>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;