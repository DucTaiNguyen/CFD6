import { Header, Footer, Nav } from "../component";
import PopupLogin from "../component/PopupLogin";

export default function MainLayout({ children }) {
    return (
        <div className="App">
            <Header />
            <Nav />
            <PopupLogin />
            {children}
            <Footer />
        </div>
    )
}