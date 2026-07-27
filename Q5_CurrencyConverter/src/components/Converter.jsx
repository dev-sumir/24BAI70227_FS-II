import { useState } from "react";
import CurrencySelect from "./CurrencySelect";
import useExchangeRate from "../hooks/useExchangeRate";

function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const rates = useExchangeRate(from);

  const result =
    amount && rates[to] ? (amount * rates[to]).toFixed(2) : "";

  return (
    <div
      style={{
        width: "350px",
        margin: "80px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />

      <div style={{ marginBottom: "15px" }}>
        <p>From</p>
        <CurrencySelect
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <p>To</p>
        <CurrencySelect
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <h3>Result</h3>
      <p>{result}</p>
    </div>
  );
}

export default Converter;