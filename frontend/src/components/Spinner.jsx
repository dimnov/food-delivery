function Spinner({ size }) {
  const sizeToClassName = {
    small: "spinner-mini",
    big: "spinner",
  };

  const className = sizeToClassName[size] || "spinner";

  return <div className={className}></div>;
}

export default Spinner;
