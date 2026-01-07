import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import "./menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const menuItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaInfoCircle /> },
    {
      name: "Services",
      href: "#services",
      icon: <FaCogs />,
      dropdown: [
        { name: "For Learners", href: "#students" },
        { name: "For Clients", href: "#clients" },
      ],
    },
    { name: "Resources", href: "#resources", icon: <FaBook /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              className="menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
            >
              {/* Close */}
              <button
                className="menu-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className={item.dropdown ? "has-dropdown" : ""}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={item.href}
                      className={active === item.name ? "active" : ""}
                      onClick={() => {
                        setActive(item.name);
                        if (!item.dropdown) setOpen(false);
                      }}
                    >
                      <span className="menu-icon">{item.icon}</span>
                      {item.name}
                      {item.dropdown && (
                        <span
                          className="dropdown-toggle"
                          onClick={(e) => {
                            e.preventDefault();
                            setServicesOpen(!servicesOpen);
                          }}
                        ></span>
                      )}
                    </a>

                    {/* Dropdown */}
                    {item.dropdown && servicesOpen && (
                      <motion.ul
                        className="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ staggerChildren: 0.05 }}
                      >
                        {item.dropdown.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              onClick={() => {
                                setActive(sub.name);
                                setOpen(false);
                              }}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
