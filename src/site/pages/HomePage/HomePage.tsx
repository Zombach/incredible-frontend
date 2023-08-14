import "./HomePage.scss";
import Features from "./Features/Features";
import HeroText from "./HeroText/HeroText";
import Menu from "./Menu/Menu";
import HeroHeader from "./HeroHeader/HeroHeader";

export default function HomePage(): JSX.Element {
    return (
        <div className="home">
            <div className="bg">
                <Menu />
                <HeroText />
                <Features />
                <HeroHeader />
            </div>
        </div>
    );
}
