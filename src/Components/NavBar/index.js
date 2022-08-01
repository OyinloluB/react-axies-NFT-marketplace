import React from "react";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>logo</h1>Home
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/Explore">
                <h1>Explore</h1>
            </NavLink>
            <NavLink to="/Activity">
                <h1>Activity</h1>
            </NavLink>
            <NavLink to="/Community">
                <h1>Community</h1>
            </NavLink>
            <NavLink to="/Pages">
                <h1>Pages</h1>
            </NavLink>
            <NavLink to="/Contact">
                <h1>Explore</h1>
            </NavLink>
            <NavSearch>
                //styled search
                <NavSearchLink to="/Search">Explore</NavSearchLink>
            </NavSearch>
            <NavWallet>
                <h1>Wallet</h1>
            </NavWallet>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
