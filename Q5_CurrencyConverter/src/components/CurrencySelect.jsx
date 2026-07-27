function CurrencySelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "8px",
      }}
    >
      <option value="USD">USD</option>
      <option value="INR">INR</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
  );
}

export default CurrencySelect;