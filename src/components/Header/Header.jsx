import "./Header.scss";
import HeaderLogo from "../../assets/img/heder-logo.svg"
function Header() {
    return (
        <div className="container">

            <div className="header">
                <img src={HeaderLogo} alt="" />
                <ul className="header-list">
                    <li className="header-item">
                        <a className="header-link" href="#">OUR COMPANY</a>
                    </li>
                    <li className="header-item">
                        <a className="header-link" href="#">LOCATIONS</a>
                    </li>
                    <li className="header-item">
                        <a className="header-link" href="#">CONTACT</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header