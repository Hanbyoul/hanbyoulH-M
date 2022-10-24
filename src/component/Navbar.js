import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setAuthenTicate, result }) => {
  const [menuOnOff, setMenuOnOff] = useState("menu-close");
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
    setAuthenTicate(false);
  };

  const goingHome = () => {
    navigate("/");
  };

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신행아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("key word", keyword);
      //url를 바꾼다
      navigate(`/?q=${keyword}`);
    }
  };

  const OpenMenu = () => {
    setMenuOnOff("menu-on");
  };

  const CloseMenu = () => {
    setMenuOnOff("menu-close");
  };

  return (
    <div>
      <div className="top-section">
        <div className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={() => OpenMenu()} />
        </div>
        <div className="login-btn">
          <FontAwesomeIcon className="login-icon" icon={faUser} />
          <div onClick={goLoginPage}>
            {result == false ? "로그인" : "로그아웃"}
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          onClick={goingHome}
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
        />
      </div>
      <div className={`menu-area ${menuOnOff}`}>
        <ul className="menu-list">
          <li className="close-btn" onClick={() => CloseMenu()}>
            X
          </li>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            className="search-input"
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
