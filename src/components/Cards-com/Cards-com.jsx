import "./Cards-com.scss";
import Icon from "../../assets/svg/right-icon.svg"

function CardsCom() {
    return (
        <div className="container">
            <ul className="cards-list">
                <li className="cards-item">
                    <h2>APP DESIGN </h2>
                    <p>VIEW PROJECTS</p>
                    <img src={Icon} alt="icon" />
                </li>
                <li className="cards-item">
                    <h2>GRAPHIC DESIGN</h2>
                    <p>VIEW PROJECTS</p>
                    <img src={Icon} alt="icon" />
                </li>
            </ul>
        </div>
    )
}

export default CardsCom