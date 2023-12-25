import "./Footer.scss";
import LogoImg from "../../assets/svg/logo.svg"
import Faceebook from "../../assets/svg/Facebook.svg"
import Insta from "../../assets/svg/Insta.svg"
import Patx from "../../assets/svg/Patx.svg"
import Twitter from "../../assets/svg/twitter.svg"
import Youtube from "../../assets/svg/youtube.svg"




function Footer() {
    return (

        <footer>
            <div className="container">
                <div className="footer-top">
                    <img src={LogoImg} alt="logo" />
                    <ul>
                        <li>
                            <a href="#">OUR COMPANY</a>
                        </li>
                        <li>
                            <a href="#">LOCATIONS</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <span></span>

                <div className="footer-bottom">
                    <div className="fotter-inner">
                        <p>
                            Designo Central Office
                            3886 Wellington Street
                            Toronto, Ontario M9C 3J5
                        </p>

                        <p>
                            Contact Us (Central Office)
                            P : +1 253-863-8967
                            M : contact@designo.com
                        </p>

                        <div className="images">
                            <img src={Faceebook} alt="#" />
                            <img src={Youtube} alt="$" />
                            <img src={Twitter} alt="$" />
                            <img src={Patx} alt="$" />
                            <img src={Insta} alt="$" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>

    )
}

export default Footer