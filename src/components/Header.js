import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  //Even btnName is constant, but the value of btnName can be changed using setBtnName function. Whenever the value of btnName changes, react will re-render the whole component and btnName is new varaiable now(as component re-render means calling func again).
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const context = useContext(UserContext);

  // Subscribing to our redux store using selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sticky top-0 z-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            Online Status: {onlineStatus ? "true" : "false"}
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 font-bold">
            <Link to="/cart">Cart - ({cart.length} items)</Link>
          </li>
          <button
            className="px-3 cursor-pointer"
            onClick={() => {
              // when this setBtnName is called, react will re-render the whole component (not just the button tag) and the new value of btnName will be reflected in the UI
              // only the button tag will be modifed in the DOM, not the whole component
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3 font-bold">{context.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
