// importing necessary components and types
import Technologies from "./components/Technologies";
import type { TechnologiesDataType } from "./types";
import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
// Function to fetch technologies data from a local JSON file
const TechnologiesDataFetch = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

// Main App component that renders the Navbar, Hero, Technologies, and Footer components
function App() {
  // State to hold the fetched technologies data as a promise, for fixing  a bug
  const [technologies] = useState<Promise<TechnologiesDataType[]>>(() =>
    TechnologiesDataFetch(),
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-32">
            <span className="loading loading-spinner loading-lg text-neutral" />
          </div>
        }
      >
        <Technologies technologies={technologies} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
