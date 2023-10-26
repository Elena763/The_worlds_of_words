import "./buttonleft.scss";
import Left from "../../assets/icons/left.png";

function ButtonLeft() {
  return (
    <div className="container_button_left">
        <img className="button_left" src={Left} alt="left" />
    </div>
  );
}
export default ButtonLeft;