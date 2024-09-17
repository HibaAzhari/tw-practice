import Logo from "../ui/Logo"
import Nav from "../ui/Nav"
import "./Header.css"

const Header = () => {
    return (
        <header className="bg-dark-bckground sticky top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header