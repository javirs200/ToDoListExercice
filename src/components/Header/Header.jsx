import './Header.css'
import React from "react";
import reactLogo from '../../assets/react.svg'

const Header = () => {
  return (<>
  <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  </>);
};

export default Header;
