import Logo from "../image/logo.png";
import "./Header.css";
export default function Header({title}){
    return(
        <nav>
            <img src={Logo} alt="logo" className="logo"/>
            <a href="/">{title}</a>
        </nav>
    );
}