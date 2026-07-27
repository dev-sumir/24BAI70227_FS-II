import { useEffect, useState } from "react";
import { getExchangeRates } from "../utils/api";

function useExchangeRate(baseCurrency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function fetchRates() {
      const data = await getExchangeRates(baseCurrency);
      setRates(data);
    }

    fetchRates();
  }, [baseCurrency]);

  return rates;
}

export default useExchangeRate;