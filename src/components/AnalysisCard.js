import React from 'react';

const AnalysisCard = ({ result }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 my-4">
      <h2 className="text-xl font-bold">Analysis Result</h2>
      <p>{result}</p>
    </div>
  );
};

export default AnalysisCard;
