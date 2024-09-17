import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import LoginPopup from "../Login/LoginPopup";

const NavLinks = () => {
    return (
        <div className="links">
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <LoginPopup />
        </div>
    );
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex w-1/3 justify-end">
                <div className="hidden w-full justify-between md:flex">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex basis-full flex-col items-center">
                    <NavLinks />
                </div>
            )}
        </>
    );
};

export default Nav;