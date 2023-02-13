import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utils/userContext";

const Tabs = () => {
  const [logedIn, setLogedIn] = useState(false);
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  console.log("user Name5 : " + user.name);
  console.log("setUser : " + setUser);
  return (
    <div className="list">
      <ul className="flex py-10">
        <li className="px-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/instamart">Instamart</NavLink>
        </li>
        <li className="px-2">{user.name}</li>
        {logedIn ? (
          <li>
            <button onClick={() => setLogedIn(false)}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={() => setLogedIn(true)}>Login</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Tabs;
