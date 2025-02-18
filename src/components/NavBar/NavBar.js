import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../page/Home/Home";
import Sobre from "../../page/Sobre/Sobre";
import CarForm from "../../page/CarForm/CarForm";
import "./NavBar.css";
import CarList from "../../page/CarList/CarList";

function NavBar() {
    return (
        <div>
            {/*<nav>
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/Sobre" >Sobre</a></li>
                    <li> <a href="/Carros">Carros</a></li>
                    <li> <a href="/Adicionar Carro">Adicionar Carro</a></li>
                </ul>
            </nav> */}

            <div>
                <Router>
                    <nav className="navbar">
                        <ul className="list">
                            <li className="item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="item">
                                <Link to="Sobre">Sobre</Link>
                            </li>
                            <li className="item">
                                <Link to="Carros">Carros</Link>
                            </li>
                            <li className="item">
                                <Link to="Adicionar Carro">
                                    Adicionar Carro
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Sobre" element={<Sobre />} />
                        <Route path="/Adicionar Carro" element={<CarForm />} />
                        <Route path="/Carros" element={<CarList />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default NavBar;
