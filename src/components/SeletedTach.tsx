// import necessary types and libraries
import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesDataType } from "../types";
import { toast } from "react-toastify";

// Define the interface for the SeletedTach component props
export interface SeletedTachProps {
  selectedTechs: TechnologiesDataType[];
  setSelectedTechs: Dispatch<SetStateAction<TechnologiesDataType[]>>;
}

// Define the SeletedTach component + receive selectedTechs and setSelectedTechs as props
const SeletedTach = ({ selectedTechs, setSelectedTechs }: SeletedTachProps) => {
  // Count the number of selected technologies
  const count = selectedTechs.length;

  // Function to handle removing a technology from the selected stack
  const handleRemove = (id: string, t: string) => {
    // Filter that check the selected technologies and remove the one with the matching id
    const updatedCart = selectedTechs.filter((tech) => tech.id !== id);
    setSelectedTechs(updatedCart);

    // Show a toast notification indicating that the technology has been removed from the stack
    const notify = () => toast(`${t} is Removed from stack successfully!`);
    notify();
  };

  // Function to handle removing all technologies from the selected stack
  const handleRemoveAll = () => {
    // Clear the selected technologies state
    setSelectedTechs([]);

    // Show a toast notification indicating that all technologies have been removed from the stack
    const notify = () =>
      toast("All technologies are Removed from stack successfully!");
    notify();
  };

  return (
    <aside className="sticky top-20 self-start max-sm:mb-10 rounded-2xl border border-slate-200 bg-white p-4 m-4 shadow-sm lg:col-span-1">
      {/* Title and description for the selected technologies panel */}
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-400">{count} Technology Selected</p>

      {/* Conditional rendering based on whether any technologies are selected */}
      {count === 0 ? (
        // If no technologies are selected, display a message prompting the user to pick a technology
        <p className="mt-5 text-sm text-slate-400">
          Pick a technology to add it here.
        </p>
      ) : (
        // If there are selected technologies, display them in a list
        <ul className="mt-5 space-y-2">
          {/* List items for each selected technology */}
          {selectedTechs.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
            >
              {/* Technology icon */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="size-8 shrink-0 object-contain"
              />

              {/* Technology name and category */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-800">
                  {tech.name}
                </h3>
                <p className="truncate text-[11px] text-slate-400">
                  {tech.category}
                </p>
              </div>

              {/* Button to remove the technology from the selected stack */}
              <button
                type="button"
                onClick={() => handleRemove(tech.id, tech.name)}
                className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:text-red-500 focus-visible:outline-2 focus-visible:outline-red-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Button to remove all selected technologies from the stack */}
      <button
        type="button"
        onClick={handleRemoveAll}
        disabled={count === 0}
        className="mt-8 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
      >
        Remove All
      </button>
    </aside>
  );
};

export default SeletedTach;
