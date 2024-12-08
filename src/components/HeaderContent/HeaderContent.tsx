import "./HeaderContent.css"
import {FaGamepad} from "react-icons/fa"
import {FaGooglePlay} from "react-icons/fa"
import {FaAppStoreIos} from "react-icons/fa"
import {FaDesktop} from "react-icons/fa"

function HeaderContent() {
    return (
        <div className={"header-content-main"}>
            <div className={"header-content-container-top"}>
            <section className={"header-content-left"}>
                <h1> Project A3</h1>
                <h2> Prepare-se para testar seus reflexos em nosso emocionante jogo 2D!
                    Desvie de obstáculos cada vez mais desafiadores e veja até onde você pode chegar.</h2>
            </section>
            <aside className={"header-content-right"}>
                <div className={"header-content-right-versions"}>
                    <FaDesktop/>
                    <FaGooglePlay/>
                    <FaAppStoreIos/>
                </div>
            </aside>
            </div>
            <div className={"header-content-container-bottom"}>
            <a href={"/play-now"}> Jogue Agora <FaGamepad/> </a>
            </div>
        </div>
    )
}

export default HeaderContent