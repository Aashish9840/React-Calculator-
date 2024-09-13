import "./React.css";
function Input({ display }) {
  return (
    <>
      <div className="input-data">
        <input type="text" readOnly value={display} />
      </div>
    </>
  );
}

export default Input;
