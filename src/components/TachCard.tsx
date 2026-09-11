import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechnologiesDataType } from "../types";
import { toast } from "react-toastify";
export interface TachCardProps {
  tech: TechnologiesDataType;
  selectedTechs: TechnologiesDataType[];
  setSelectedTechs: Dispatch<SetStateAction<TechnologiesDataType[]>>;
}

const TachCard = ({ tech, selectedTechs, setSelectedTechs }: TachCardProps) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  const isSelected = selectedTechs.some((t) => t.id === tech.id);
  const handleAddToStack = (t: string) => {
    // setIsDisabled(true);
    setSelectedTechs([...selectedTechs, tech]);

    const notify = () => toast(`${t} is Added to stack successfully!`);
    notify();
  };
  console.log(selectedTechs);
  return (
    <div className="card w-full max-w-md bg-base-100 border border-base-300 shadow-sm ">
      <div className="card-body p-6">
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="size-12" />
          <span className="badge badge-soft badge-info badge-lg font-medium">
            {tech.badge}
          </span>
        </div>

        <h2 className="card-title text-2xl font-bold mt-4">{tech.name}</h2>
        <p className="text-base-content/60 leading-relaxed">
          {tech.description}
        </p>

        <div className="flex items-center justify-between border-t border-base-200  py-2 text-sm">
          <span className="badge badge-ghost text-sm rounded-md">
            {tech.category}
          </span>
          <span className="text-base-content/60">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold">
            <span className="mask mask-star-2 size-5 bg-amber-400"></span>
            {tech.rating}
          </span>
        </div>

        <button
          onClick={() => handleAddToStack(tech.name)}
          disabled={isSelected}
          className="btn btn-neutral btn-block h-12 rounded-xl text-base font-medium mt-2 transition-none"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TachCard;
