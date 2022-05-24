import React from "react";
function Navbar({ filteritem, menuList }) {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((currentEle) => {
                       return  <button className="btn-group__item" onClick={() => filteritem(currentEle)}>{currentEle}</button>
                    })}
                    {/* <button className="btn-group__item" onClick={() => filteritem(menuList)}>All</button> */}


                </div>
            </nav>
        </>
    );
}

export default Navbar;
