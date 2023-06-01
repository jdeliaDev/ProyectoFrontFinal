import{useEffect, useState} from 'react';
import { Fragment } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import Tarjeta from "../Tarjeta/Tarjeta";

export default function SeccionTarjetas({sexo}) {

    
    // const hembras= [{
    //     id:"1",
    //     imagen:"./imagenes/hembras/Millie.jpeg",
    //     nombre:"Dicastrovillari Millie",
    //     padres:"Arthur Dicastovillari X Dicastrovillari Luna Mack I",
    //     fechaNacimiento:"01/01/2017",
    // },{
    //     id:"2",
    //     imagen:"./imagenes/hembras/Luna.jpeg",
    //     nombre:"Dicastrovillari Luna Mack",
    //     padres:"Multi BISS Epoch's X Dicastrovillari Luna Mack I",
    //     fechaNacimiento:"01/02/2019",
    // },{
    //     id:"3",
    //     imagen:"./imagenes/hembras/Almendra.jpeg",
    //     nombre:"Almendra Sam Kim",
    //     padres:"H-Altazor Samar X BR Phogo at Chocovilla Kimberley",
    //     fechaNacimiento:"02/07/2020",
    // },{
    //     id:"4",
    //     imagen:"./imagenes/hembras/Margaret.jpeg",
    //     nombre:"Dicastrovillari Margaret Mack",
    //     padres:"Multi BISS Epoch's Mocassin Joe X Dicastrovillari Luna Mack I",
    //     fechaNacimiento:"04/05/2021",
    // },{
    //     id:"5",
    //     imagen:"./imagenes/hembras/Nira.jpeg",
    //     nombre:"Nira Rosalinda Pumpkin",
    //     padres:"Barbour Gold's Magic Carpetride X Pumpkin Tymbaype",
    //     fechaNacimiento:"216/03/2021",
    // },{
    //     id:"6",
    //     imagen:"./imagenes/hembras/Yasy.jpeg",
    //     nombre:"BR Phogo Yasy",
    //     padres:"Phogo Marte X Phogo Foxy Brown",
    //     fechaNacimiento:"25/05/2021",
    // }]
    


    let [datos,setDatos]=useState([]);

    //const mostrarInfo =()=>{
    //    setDatos(hembras)
    //}

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