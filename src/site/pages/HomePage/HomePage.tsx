import "./HomePage.scss";
import Features from "./Features/Features";
import HeroText from "./HeroText/HeroText";
import Menu from "./Menu/Menu";

export default function HomePage() {
    return (
        <div className="home">
            <div className="bg">
                <Menu />
                <HeroText />
                <Features />
            </div>
        </div>
    );
}
