import "./React.css";
function Numbers({ num, handlenumber }) {
  return (
    <button className="content-number" onClick={() => handlenumber(num)}>
      {num}
    </button>
  );
}
export default Numbers;
