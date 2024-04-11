import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";


const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => {navigate(`/properties/search/${search}`)}}
          />
        </IconButton>
      </div>

      <div className="navbar_right">
        <div style={{display: "flex" , gap: "20px" , fontWeight: "700"}}>
          <a href="" style={{color: "black" , textDecoration: "none"}}>Home</a>
          <a href="" style={{color: "black" , textDecoration: "none"}}>About</a>
          <a href="" style={{color: "black" , textDecoration: "none"}}>Contact</a>
        </div>
      
      {user ? (
          <a href="/create-listing" className="host" style={{color: "black" , fontWeight: "700"}}>
            Add A Property
          </a>
        ) : (
          <a href="/login" className="host" style={{color: "black" , fontWeight: "700"}}>
            Add A Property
          </a>
        )}

        

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link style={{color: "black" , fontWeight: "700"}} to={`/${user._id}/trips`}>Booking Properties</Link>
            <Link style={{color: "black" , fontWeight: "700"}} to={`/${user._id}/wishList`}>Favourite Properties</Link>
            <Link style={{color: "black" , fontWeight: "700"}} to={`/${user._id}/properties`}>Property List</Link>
            <Link style={{color: "black" , fontWeight: "700"}} to={`/${user._id}/reservations`}>Reservation List</Link>
            <Link style={{color: "black" , fontWeight: "700"}} to="/create-listing">Add A Property</Link>

            <Link style={{color: "black" , fontWeight: "700"}}
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
