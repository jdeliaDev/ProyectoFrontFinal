import{useEffect, useState} from 'react';
import { Fragment } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import Tarjeta from "../Tarjeta/Tarjeta";

export default function SeccionTarjetas({sexo}) {

    let [datos,setDatos]=useState([]);

    const mostrarInfo = async()=>{
        let info= await fetch(`http://localhost:4000/perros/${sexo}`        )
                        .then(respuesta => respuesta.json())
                        .then(data => setDatos(data))
                        .catch(error => console.log("HAY UN ERROR!!" +error))                      
        return info
    }

    useEffect(()=>{
        mostrarInfo()
     },[sexo])


    return(
        <Fragment>
            <Navegacion/>
            <section className="section-cards row d-flex">
                {datos.map((dato)=>{return <Tarjeta key={dato.id}info={dato}/>})
                }
            </section>
        </Fragment>
    )
}