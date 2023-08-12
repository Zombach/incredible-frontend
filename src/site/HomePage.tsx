import "./HomePage.scss";
import Menu from "./homePage/Menu";

export default function HomePage() {
    return (
        <div className="home">
            <div className="bg">
                <Menu />
            </div>
        </div>
    );
}
