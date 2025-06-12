import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_drCk3zS8DCmn4se4xAWZxPLUDsQZ9UR3baSdtv3U`
        );
        const result = await res.json();
        setData(result.data); // Get all exchange rates (default base: USD)
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
      }
    };

    fetchRates();
  }, []);

  return data;
}

export default useCurrencyInfo;
