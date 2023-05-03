import { Fragment } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import './AgregarPerro.css';

export default function AgregarPerro() {
    return(
        <Fragment>
            <Navegacion/>
            <main>
            <form className="container d-flex flex-column justify-content-center formulario" action="" method="POST">
                <div className="row">
                    <label htmlFor="nombre" className="col-sm-2 col-form-label etiquetas">Nombre</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" required/>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="padres" className="col-sm-2 col-form-label etiquetas">Padres</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Padres" id="padres" name="padres" required/>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="fechaNacimiento" className="col-sm-2 col-form-label etiquetas">Fecha Nacimiento</label>
                    <div className="col-sm-8">
                        <input type="date" className="form-control" placeholder="Fecha Nacimiento" id="fechaNacimiento" name="fechaNacimiento" required/>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="imagen" className="col-sm-2 col-form-label etiquetas">Imágen</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control" id="imagen" accept="image/*" onChange="" required/>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Agregar" className="btn botones col-sm-2"/>
                </div>
                </form>

            </main>
        </Fragment> 
        
    )
}