
const Blog = () => {
    return (
        <div className="my-16">
            <div className="my-10 text-center bg-zinc-100 py-4 shadow-lg shadow-red-100 ">
                <h2 className="text-5xl font-bold"> <span className="text-[#FF0000]">Frequently</span> Asked Questions</h2>
            </div>
            <div className="my-6 py-10 px-20 shadow-xl shadow-red-100 ">
                <h2 className="text-2xl font-bold font-serif mb-6">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-lg font-semibold font-mono">
                    Access tokens and refresh tokens are commonly used in authentication systems to securely authenticate and authorize client requests to access protected resources.
                    <br />
                    <br />
                    <span className="text-xl font-bold">Access Token: </span>
                    <br />
                    An access token is a credential that is issued to a client (e.g., a user or an application) after successful authentication.
                    It represents the client's authorization to access specific resources or perform certain actions on behalf of the authenticated user.
                    Access tokens are typically short-lived and have an expiration time.
                    They are included in each request to the server to authenticate and authorize the client's access.
                    <br />
                    <br />
                    <span className="text-xl font-bold">Refresh Token:</span>
                    <br />
                    A refresh token is a long-lived credential that is also issued to a client after successful authentication.
                    Unlike access tokens, refresh tokens are not used directly in each request to the server.
                    Instead, they are used to obtain a new access token when the current one expires or becomes invalid.
                    Refresh tokens are more durable and can be used to renew the client's access for an extended period of time.
                    <br />
                    <br />
                    As for where to store these tokens on the client-side, it is generally recommended to store the access token in a secure location such as an HTTP-only cookie or in the browser's local storage. Storing it in an HTTP-only cookie provides additional security by preventing client-side JavaScript from accessing it. On the other hand, refresh tokens should be stored securely on the server-side as they are long-lived and more sensitive.
                    <br />
                    It's important to follow security best practices and consider the specific requirements of your application when implementing token storage and handling mechanisms.
                </p>
            </div>
            <div className="my-6 py-10 px-20 shadow-xl shadow-red-100 ">
                <h2 className="text-2xl font-bold font-serif mb-6">2. Compare SQL and NoSQL databases?</h2>
                <p className="text-lg font-semibold font-mono">
                    <span className="text-xl font-bold">SQL databases: </span>
                    <br />
                    <ul>
                        <li>Structured data model based on tables with predefined schemas</li>
                        <li>Vertically scalable by adding resources to a single server</li>
                        <li>Uses SQL for defining and manipulating data</li>
                        <li>Requires a predefined schema</li>
                        <li>Provides ACID transactions</li>
                        <li>Well-suited for complex queries, strong consistency, and structured data</li>
                    </ul>
                    <br />
                    <br />
                    <span className="text-xl font-bold">NoSQL databases:</span>
                    <br />
                    <ul>
                        <li>Flexible data models (key-value, document-based, columnar, graph-based)</li>
                        <li>Horizontally scalable by adding more servers to the database cluster</li>
                        <li>May use query languages specific to the data model</li>
                        <li>Schema flexibility or schema-less</li>
                        <li>May sacrifice ACID properties for scalability and performance</li>
                        <li>Suitable for large-scale data, high scalability, and flexible data models</li>
                    </ul>
                    <br />
                    <br />
                    Both SQL and NoSQL databases have their strengths and weaknesses, and the choice between them depends on the specific requirements of your application. In some cases, a hybrid approach that combines both types of databases may be appropriate to leverage the advantages of each.
                </p>
            </div>
        </div>
    );
};

export default Blog;