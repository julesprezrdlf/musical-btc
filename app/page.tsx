"use client";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Chart from "./components/chart/Chart";
import Value from "./components/value/Value";
import Audio from "./components/audio/Audio";

export default function Home() {
  return (
    <>
      <div className="app-container h-screen flex flex-col">
        <Navbar />
        <Chart />
        <Value />
        <Audio />
        <Footer />
      </div>
    </>
  );
}
