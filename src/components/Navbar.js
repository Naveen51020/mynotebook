import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem('token');
    setName("");
    navigate("/login");
  }
  let location = useLocation();

  const host = "http://localhost:5000";
  const fun = async (e)=>{
      e.preventDefault();
      const userDetails = await fetch(`${host}/api/auth/getuser`, {
        method: 'POST',
        headers: {
            "auth-token": localStorage.getItem("token")
        }
    });
  
    const userJson = await userDetails.json();
    setName(userJson.name);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={!localStorage.getItem("token") ? `/` : "/home"}>
          myNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to={!localStorage.getItem("token") ? `/` : "/home"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
          </form> : <>
              <div className="d-flex">
                {name === "" ? 
                <button onClick={fun} className="navbar-brand mb-0 justify-content-end h1"> Show User </button> : 
                <span className="navbar-brand mb-0 justify-content-end h1"> Welcome! {name} </span>
                }
              </div>
              <button onClick={handleLogout} className="btn btn-primary"> Logout</button>
          </>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
