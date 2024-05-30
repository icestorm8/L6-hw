import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { AppContext } from "../context/Context";

export default function MainHeader() {
  const { name } = useContext(AppContext);
  return (
    <header className="container-fluid bg-dark">
      <div className="p-2">
        <div className="logo">
          <Link to="/" className="text-decoration-none">
            <h2 className="text-light">
              <FaFileAlt style={{ color: "green", fontSize: "30px" }} />{" "}
              Homework - lesson 6 {""}
              <span className="text-primary">{name}</span>
            </h2>
          </Link>
        </div>
      </div>
    </header>
  );
}
