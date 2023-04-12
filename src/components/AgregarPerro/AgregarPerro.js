import { Fragment } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import './AgregarPerro.css';

export default function AgregarPerro() {
    return(
        <Fragment>
            <Navegacion/>
            <main>
            <form class="container d-flex flex-column justify-content-center formulario" action="https://formspree.io/f/mgeqrqkg" method="POST">
                <div class="row">
                    <label for="nombre" class="col-sm-2 col-form-label etiquetas">Nombre</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="Nombre" id="nombre" name="nombre" required/>
                    </div>
                </div>
                <div class="row">
                    <label for="padres" class="col-sm-2 col-form-label etiquetas">Padres</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="Padres" id="padres" name="padres" required/>
                    </div>
                </div>
                <div class="row">
                    <label for="fechaNacimiento" class="col-sm-2 col-form-label etiquetas">Fecha Nacimiento</label>
                    <div class="col-sm-8">
                        <input type="date" class="form-control" placeholder="Fecha Nacimiento" id="fechaNacimiento" name="fechaNacimiento" required/>
                    </div>
                </div>
                <div class="row">
                    <label for="imagen" class="col-sm-2 col-form-label etiquetas">Imagen</label>
                    <div class="col-sm-8">
                        <input type="file" class="form-control" id="imagen" accept="image/*" onChange="" required/>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Agregar" class="btn botones col-sm-2"/>
                </div>
                </form>

            </main>
        </Fragment> 
        
    )
}