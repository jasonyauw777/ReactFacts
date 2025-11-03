import ReactLogo from "../assets/react-logo.png"

export default function Navbar (){
    return (
        <header>
            <nav>
                <img src={ReactLogo} width="40px" alt="react-logo"></img>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}