import type { TechnologiesDataType } from "../types";
import { use, useState } from "react";
import TachCard from "./TachCard";
import SeletedTach from "./SeletedTach";
export interface TechnologiesProps {
  technologies: Promise<TechnologiesDataType[]>;
}

function Technologies({ technologies }: TechnologiesProps) {
  const [seletedTechs, setSeletedTechs] = useState<TechnologiesDataType[]>([]);
  const data = use(technologies);
  return (
    <div className=" mx-auto bg-base-200 lg:px-32 max-sm:px-10">
      <div className=" py-10">
        <h3 className="text-4xl font-bold">
          Explore the <span className="text-gradient">Technologies</span>
        </h3>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-22 pt-4">
          {data.map((tech) => (
            <TachCard
              key={tech.id}
              tech={tech}
              selectedTechs={seletedTechs}
              setSelectedTechs={setSeletedTechs}
            />
          ))}
        </div>
        <SeletedTach
          selectedTechs={seletedTechs}
          setSelectedTechs={setSeletedTechs}
        />
      </div>
    </div>
  );
}

export default Technologies;
