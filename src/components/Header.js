import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ({history}) => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu'
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({
        clicked: false,
        menuName: 'Menu'
      })
    })
  })

  const HandleMenu = () => {
    DisabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Closed'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Closed'
      });
    }
  };

  const DisabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to={'./'}>Hamburg</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={HandleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
