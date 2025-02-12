import React, { useEffect, useState } from "react";

// The path to your JSON file in the public directory
const jsonFilePath = "/topics.json";

const Sections: React.FC = () => {
  const [topicsData, setTopicsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTopicsData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Now `err` is of type `Error`
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // If loading or error occurred, display appropriate message
  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">DSA Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {topicsData.map((topic) => (
          <div
            key={topic.id}
            className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            {/* Image with low dark shadow */}
            <div className="relative">
              <img
                src={topic.picture}
                alt={topic.title}
                className="w-full h-96 object-cover rounded-t-lg shadow-md"
              />
              {/* Dark background overlay using ::before pseudo-element */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-t-lg"></div>
            </div>
            {/* Overlay with title and button */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-t-lg p-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                {topic.title}
              </h3>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
