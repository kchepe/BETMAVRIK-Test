import { fetcgExchangeRates } from "./action";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cards from "./components/Cards";

const Home = async () => {
  const exchangeRates = await fetcgExchangeRates("EUR");

  return (
    <div>
      <Navbar />
      <main className="px-8 py-10">
        <Cards exchangeRatesData={exchangeRates} />
      </main>
    </div>
  );
};

export default Home;
