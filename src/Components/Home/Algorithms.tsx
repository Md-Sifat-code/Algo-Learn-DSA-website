import React, { useEffect, useState } from "react";
import { GiCursedStar } from "react-icons/gi";
interface AlgorithmData {
  id: string;
  title: string;
  algorithm: string[] | string;
  pseudocode: string;
}

const Algorithms: React.FC = () => {
  const [data, setData] = useState<AlgorithmData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetching the JSON data
    fetch("/algo.json") // Adjust path if necessary
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Show loading message or spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle the case where `data` is null (although it should be set by now if it's not loading)
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Display the data with Code Mockup for pseudocode
  return (
    <>
      <div className="p-4 mt-[100px] sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
        {data.map((algorithm) => (
          <div key={algorithm.id} className="mb-8 sm:mb-6">
            <h1 className="text-3xl text-purple-700 font-bold mb-4 sm:text-2xl md:text-3xl flex flex-row items-center">
              <GiCursedStar className="text-amber-500" />
              {algorithm.title}
            </h1>
            <p className="mb-4 text-lg sm:text-base">
              <strong>Algorithm:</strong>
              <ul className="list-disc pl-6">
                {Array.isArray(algorithm.algorithm) ? (
                  algorithm.algorithm.map((step: string, index: number) => (
                    <li key={index} className="sm:text-sm md:text-base">
                      {step}
                    </li>
                  ))
                ) : (
                  <li className="sm:text-sm md:text-base">
                    {algorithm.algorithm}
                  </li>
                )}
              </ul>
            </p>

            <div className="bg-gray-500 p-4 border w-full h-auto rounded-xl mockup-code sm:p-3 md:p-4 lg:p-5 overflow-x-auto">
              <pre>
                <code className="sm:text-sm md:text-base lg:text-lg break-words">
                  {algorithm.pseudocode}
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold flex justify-center items-center text-amber-500">
        <h1>More Algo is Cooking</h1>
      </div>
    </>
  );
};

export default Algorithms;
