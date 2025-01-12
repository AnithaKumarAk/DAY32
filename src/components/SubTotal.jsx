import { useSelector } from "react-redux";
import "./components.css";
import { totalValue } from "../total/totalSlice";

const SubTotal = () => {
  // Fetching the total value from the redux slice.
  const total = useSelector(totalValue);

  return (
    <>
      <div className="sub-total">
        <div className="name">
          <h3>SUBTOTAL :</h3>
          <h4>SHIPPING :</h4>
        </div>
        <div className="sub-amount">
          <h3>${total}</h3>
          <h4>FREE</h4>
        </div>
      </div>
    </>
  );
};

export default SubTotal;