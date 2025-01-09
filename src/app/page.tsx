const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto p-8 sm:p-16 text-center">
        {/* Introduction */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Welcome to API Explorer
          </h1>
          <p className="text-lg text-gray-700">
            This API provides data for products, users, and more. You can use it
            to fetch structured JSON data for your applications or experiments.
          </p>
        </section>

        {/* GitHub and Documentation */}
        <section id="github" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
          <p className="text-gray-700 mb-6">
            Access the source code or view the documentation to get started:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/MYousuf-Codes/practice-hackathon-3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              GitHub Repository
            </a>
            <a
              href="#endpoints"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              View Endpoints
            </a>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            API Endpoints
          </h2>
          <ul className="text-left space-y-4">
            <li>
              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                GET /api/products
              </code>{" "}
              - Fetch all products.
            </li>
            <li>
              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                GET /api/products/[id]
              </code>{" "}
              - Fetch a product by ID.
            </li>
          </ul>
        </section>

        {/* Instructions */}
        <section id="instructions">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How to Use the API
          </h2>
          <p className="text-gray-700 mb-6">
            To use this API, send HTTP requests to the endpoints above. Ensure
            you have a valid JSON parser in your application to handle the
            response data.
          </p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded text-left">
            {`Example:
fetch('/api/products')
  .then(response => response.json())
  .then(data => console.log(data));`}
          </pre>
        </section>
      </main>
    </div>
  );
};

export default Home;
