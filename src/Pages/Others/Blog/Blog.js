import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-6/12 w-10/12 mx-auto mt-24'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                <div className="collapse-title text-xl font-medium">
                    what is cors
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p>
                        CORS Means Cross-Origin Resource Sharing. It allows us API from express js. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p>
                        firebase is most popular authentication platform. thats owned by google. and most secure on authentication. one of the most reason firebase was free of cost for use. in the world many have authentication options for authentication. there most popular okta, STYTCH, Ory, Supabase, PingIdentity etc many one.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p>
                        private route use for give the pages private. is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p>
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;