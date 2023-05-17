"use client";
import axios from "axios";
import { useEffect, useState } from "react";

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

    // Fetch data immediately and then every 10 seconds
    fetchData();

    const interval = setInterval(fetchData, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="app-container h-screen">
        <div className="navbar-container grid grid-cols-3 ">

        <div className="navbar-col1 col-span-2"> </div>
        <div className="navbar-col2 col-span-1">Bitcoin Logo</div>
        </div>

        <div className="chart-container">chart</div>
        <img src="https://chartio.com/assets/b777fe/tutorials/charts/line-charts/092526f5a5d689bed9582366c11fdaf794c3a5ba4b948cd0bc52ec0daf32def4/line-chart-example-1.png" alt="Photo of the Remarkables mountain range in Queenstown, New Zealand."/>

        <div className="text-container grid grid-cols-5 p-5  ">
          <div className="superleft p-2 col-span-2 rounded-l-xl">

          <div className="text-left  h-20 text-lg flex flex-col justify-end rounded-xl ">
          <p>Bitcoin Price:</p>
          </div>
          </div>
          
          <div className="superright  p-2 col-span-3 flex flex-col justify-end rounded-r-xl ">
          <div className="text-right  ">
          <h2>{price ? `$${price}` : "Loading..."}</h2>
          </div>
          </div>

        </div>
        <div className="audio-container">audio</div>

        <div className="footer-container">footer</div>
      </div>
    </>
  );
}
