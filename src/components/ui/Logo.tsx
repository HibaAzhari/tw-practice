import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo h-16 w-16">
            <NavLink to="/"><img src="../../assets/logo.png" alt="logo" /></NavLink>
        </div>
    )
}

export default Logo;