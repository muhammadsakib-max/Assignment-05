import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { TechnologiesDataType } from "./types";
import Technologies from "./components/Technologies";

const TechnologiesDataFetch = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const [technologies] = useState<Promise<TechnologiesDataType[]>>(() =>
    TechnologiesDataFetch(),
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologies={technologies} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
