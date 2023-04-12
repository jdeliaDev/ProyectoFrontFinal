import {Link} from "react-router-dom";
import './Inicio.css';

export default function Inicio() {
    return (  
        <header className = "principal-search d-flex flex-column align-items-center justify-content-center">
            <div className= "container-header d-flex flex-column justify-content-center">
                <h1 className = "row justify-content-center">Criadero Rusherking</h1>
                <h2 className = "row justify-content-center">Labrador Retriever</h2>
                <nav className= "row navBar align-items-center">
                    <ul className = "nav justify-content-center">
                        <li>
                            <Link className="btn m-2 p-3 botones" to="/SeccionTarjMachos">Machos</Link>
                        </li>
                        <li>
                            <Link className="btn m-2 p-3 botones" to="/SeccionTarjHembras">Hembras</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        </header>
    )
  }