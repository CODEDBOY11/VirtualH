import { useEffect, useState } from "react";
import Logo from "../../virtual pics/logo.png";
import "./navbar.css";

const navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav>
        <div className={` ${isSticky ? "containerss" : "container-keys"} `}>
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt=""
              width="100"
              height="30"
              className="d-inline-block align-text-top logo-img"
            />
          </a>
          <div className="nav-links">
            <ul className="ul">
              <li className="li">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="li">
                <a href="#work" className="nav-link">
                  About
                </a>
              </li>
              <li className="li">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      For Students
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      For Clients
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="li">
                <a href="#contact" className="nav-link">
                  Resources
                </a>
              </li>
              <li className="li">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
