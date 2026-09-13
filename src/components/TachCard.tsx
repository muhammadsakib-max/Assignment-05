// import Dispatch and SetStateAction types , TechnologiesDataType type, and toast
import { type Dispatch, type SetStateAction } from "react";
import type { TechnologiesDataType } from "../types";
import { toast } from "react-toastify";

// Define the interface for the TachCard component props
export interface TachCardProps {
  tech: TechnologiesDataType;
  selectedTechs: TechnologiesDataType[];
  setSelectedTechs: Dispatch<SetStateAction<TechnologiesDataType[]>>;
}

// Define the TachCard component + receive tech, selectedTechs, and setSelectedTechs as props
const TachCard = ({ tech, selectedTechs, setSelectedTechs }: TachCardProps) => {

  // Check if the current technology is already selected, for disabling the "Add to Stack" button if it is
  const isSelected = selectedTechs.some((t) => t.id === tech.id);


  // Function to handle adding a technology to the selected stack
  const handleAddToStack = (t: string) => {

    // Store the selected technology data
    setSelectedTechs([...selectedTechs, tech]);

    // Show a toast notification indicating that the technology has been added to the stack
    const notify = () => toast(`${t} is Added to stack successfully!`);
    notify();

  };

  // Define a mapping of badge types to their corresponding styles
  const badgeStyles: Record<string, string> = {
  Popular: 'badge-primary',
  Versatile: 'badge-success',
  Fast: 'badge-warning',
  'Full-Stack': 'badge-secondary',
  Standard: 'badge-info',
  'Top SQL': 'badge-primary',
  Cache: 'badge-error',
  Ubiquitous: 'badge-warning',
  Essential: 'badge-accent',
  Robust: 'badge-neutral',
  Modern: 'badge-success',
  Containers: 'badge-info',
}

const getBadgeStyle = (badge: string) => badgeStyles[badge] ?? 'badge-ghost'

  return (
    <div className="card w-full max-w-md bg-base-100 border border-base-300 shadow-sm ">

      {/* Technology Icon and Badge */}
      <div className="card-body p-6">
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="size-12" />
          <span className={`badge badge-soft badge-lg font-medium ${getBadgeStyle(tech.badge)}`}>
            {tech.badge}
          </span>
        </div>

        {/* Technology Name and Description */}
        <h2 className="card-title text-2xl font-bold mt-4">{tech.name}</h2>
        <p className="text-base-content/60 leading-relaxed">
          {tech.description}
        </p>

        {/* Technology Category, Difficulty, and Rating */}
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

        {/* Add to Stack Button + handler */}
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
