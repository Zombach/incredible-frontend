import "./HomePage.scss";
import HeroText from "./homePage/HeroText";
import Menu from "./homePage/Menu";

export default function HomePage() {
    return (
        <div className="home">
            <div className="bg">
                <Menu />
                <HeroText />
            </div>
        </div>
    );
}
