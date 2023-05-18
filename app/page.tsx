"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Chart from "./components/chart/Chart";
import Audio from "./components/audio/Audio";

export default function Home() {
  const [price, setPrice] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ price: number }>(
          "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
        );

        const infoData = Number(response.data.price).toFixed(2);
        setPrice(infoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data immediately and then every 3 seconds
    fetchData();

    const interval = setInterval(fetchData, 3000); // 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="app-container h-screen flex flex-col">
      
      <Navbar/>

<Chart/>
        <div className="text-container grid grid-cols-5 p-5  ">
          <div className="superleft p-2 col-span-2 rounded-l-xl">

          <div className="text-left  h-20 text-lg flex flex-col justify-end rounded-md text-center ">
          <p>BTC Price:</p>
          </div>
          </div>
          
          <div className="superright  p-2 col-span-3 flex flex-col justify-end rounded-r-xl ">
          <div className="text-right  ">
          <h2>{price ? `$${price}` : "Loading..."}</h2>
          </div>
          </div>

        </div>

<Audio/>
        <Footer/>
  
      </div>
    </>
  );
}
