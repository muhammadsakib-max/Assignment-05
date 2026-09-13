// Import Type, SelectedTech, use, useState, and TachCard components
import type { TechnologiesDataType } from "../types";
import SeletedTach from "./SeletedTach";
import { use, useState } from "react";
import TachCard from "./TachCard";

// Define the interface for the Technologies component props
export interface TechnologiesProps {
  technologies: Promise<TechnologiesDataType[]>;
}

// Define the Technologies component + fetch only API data
function Technologies({ technologies }: TechnologiesProps) {

  // Initialize state for selected technologies status
  const [seletedTechs, setSeletedTechs] = useState<TechnologiesDataType[]>([]);

  // Use the use hook to resolve the fetch data promise
  const data = use(technologies);


  return (

    <div className=" mx-auto bg-base-200 lg:px-32 max-sm:px-10">
      
      {/* Technologies Section Title and Description */}
      <div className=" py-10">
        <h3 className="text-4xl font-bold">
          Explore the <span className="text-gradient">Technologies</span>
        </h3>
        <p className="pt-4">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Technologies Grid + Functionality + Main 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr]">

        {/* Technologies Grid + Functionality + 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-22 pt-4">

          {/* Each technology card */}
          {data.map((tech) => (

            // TachCard component + Passing each component data + selectedTechs + setSelectedTechs as props
            <TachCard
              key={tech.id}
              tech={tech}
              selectedTechs={seletedTechs}
              setSelectedTechs={setSeletedTechs}
            />

          ))}

        </div>

        {/* Selected Technologies Section + passing selected technologies and setter function as props */}
        <SeletedTach
          selectedTechs={seletedTechs}
          setSelectedTechs={setSeletedTechs}
        />

      </div>
    </div>
  );
}

export default Technologies;
