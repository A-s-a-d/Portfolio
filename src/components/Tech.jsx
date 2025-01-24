import React, { useState } from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [tooltipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-col gap-10 p-4"> {/* Added padding to the container */}
      {technologies.map((category, catIndex) => (
        <div key={catIndex} className="mb-8"> {/* Added margin-bottom to each category section */}
          <h2 className="text-2xl font-bold mb-4 text-center">{category.category}</h2> {/* Centered the heading */}
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {category.items.map((technology, index) => (
              <div
                className="w-28 h-28 mb-2 relative"
                key={technology.name}
                onMouseEnter={() => handleMouseEnter(index, technology.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <BallCanvas icon={technology.icon} />
                </div>

                {tooltipTexts[index] && (
                  <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {tooltipTexts[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech;