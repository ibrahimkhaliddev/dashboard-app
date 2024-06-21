import React, { useState } from "react";

const FlipBox = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">3D Flip Box (Horizontal)</h1>
      <h3 className="text-xl mb-4">Click the box to flip:</h3>

      <div
        className="w-72 h-48 mx-auto perspective-1000"
        onClick={handleFlip}
      >
        <div
          className={`flip-box-inner ${isFlipped ? "rotate-y-180" : ""}`}
        >
          <div className="flip-box-front">
            <h2 className="text-xl font-bold">Front Side</h2>
          </div>
          <div className="flip-box-back">
            <h2 className="text-xl font-bold">Back Side</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
