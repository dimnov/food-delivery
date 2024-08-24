function Spinner({ size }) {
  const classSize = size === "big" ? "spinner" : size === "small" && "spinner-mini";

  return <div className={classSize}></div>;
}

export default Spinner;
