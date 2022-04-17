import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [breweries, setBreweries] = useState([]);

  const baseURL = "https://api.openbrewerydb.org/breweries";

  useEffect(() => {
    const getBreweries = async () => {
      await axios.get(baseURL).then((response) => {
        setBreweries(response.data);
      });
    };
    getBreweries();
    console.log(breweries);
  }, []);

  return <div>Main</div>;
};

export default Main;
