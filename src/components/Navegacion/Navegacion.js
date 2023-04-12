import {Link} from "react-router-dom";
import './Navegacion.css';

export default function Navegacion() {
    return (  
        <header className="d-flex flex-row align-items-center justify-content-between bg-blue"> 
            <h1 className="titulo-nav w-50">Criadero Rusherking</h1>   
            <nav className="navbar navbar-expand-lg w-50 ">          
                <ul className="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link className="btn botones nav-link" to="/">Inicio</Link>
                    </li>                  
                    <li class="nav-item dropdown">
                        <div class="btn-group dropdown">
                            <Link className="btn botones nav-link" to="/SeccionTarjMachos">Machos</Link>
                            <button type="button" class="btn botones dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link className="btn botones dropdown-item" to="/AgregarPerro">Agregar</Link>
                                </li>
                            </ul>
                        </div>                  
                    </li>
                    <li class="nav-item dropdown">
                        <div class="btn-group dropdown">
                            <Link className="btn botones nav-link" to="/SeccionTarjHembras">Hembras</Link>
                            <button type="button" class="btn botones dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link className="btn botones dropdown-item" to="/AgregarPerro">Agregar</Link>
                                </li>
                            </ul>
                        </div>                  
                    </li>
                </ul>
            </nav>
        </header>
    );
  }