import{useEffect, useState} from 'react';
import { Fragment } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import Tarjeta from "../Tarjeta/Tarjeta";

export default function SeccionTarjMachos() {

    const machos= [{
        id:"1",
        imagen:"./imagenes/machos/Cronos.jpeg",
        nombre:"La Morocha CXR Cronos",
        padres:"CGE La Morocha CxS Cooper X Rayza Anguiano Mex FFCI",
        fechaNacimiento:"01/01/2017",
    },{
        id:"2",
        imagen:"./imagenes/machos/Runny.jpeg",
        nombre:"Dicastrovillari Runny Mack",
        padres:"H-La Morocha CXR Kona X Dicastrovillari Violeta Mack",
        fechaNacimiento:"01/02/2019",
    },{
        id:"3",
        imagen:"./imagenes/machos/Toledo.jpeg",
        nombre:"Toledo Arg",
        padres:"Burny pack & Yimy run",
        fechaNacimiento:"02/07/2020",
    },{
        id:"4",
        imagen:"./imagenes/machos/Zingaro.jpeg",
        nombre:"Ch Arg Santy Zingaro at Queijeiro",
        padres:"BISS Glacieridge & Queijeiro Dreammakers Shake",
        fechaNacimiento:"04/05/2021",
    },{
        id:"5",
        imagen:"./imagenes/machos/Lennon.jpeg",
        nombre:"Lennon Arg",
        padres:"Ramblin Man of Buddy Hunter X Dicastrovillari Bally Mack",
        fechaNacimiento:"28/05/2021",
    },{
        id:"6",
        imagen:"./imagenes/machos/Jack.jpeg",
        nombre:"Jack Arg Junior",
        padres:"JCH Bournhall's X Ch Kimleigh Cattleya",
        fechaNacimiento:"28/05/2021",
    }]
    


    let [datos,setDatos]=useState([]);

    const mostrarInfo =()=>{
        setDatos(machos)
    }

    useEffect(()=>{
        mostrarInfo() 
     },[])


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