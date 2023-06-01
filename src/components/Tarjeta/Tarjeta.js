import './Tarjeta.css'
import { Link } from 'react-router-dom';

export default function Tarjeta ({info}) {

    const eliminarPerro=async()=>{
        await  fetch(`http://localhost:4000/perros/eliminarPerro/${info.id}`, {
           method: "DELETE",
           headers: {
               'Content-Type': 'application/json'
             },
            //body : JSON.stringify({ "id": info.id })
         })
           .then(respuesta => respuesta.json())
           .then(data => console.log(data))
           .catch(error => console.log("HAY UN ERROR!!" +error))
      
   }

    const dataPerro=()=>{
        localStorage.setItem("infoPerro",JSON.stringify(info))
    }
    return(
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img className='imgTamaño' src={info.imagen} alt='perro'/>
                <p>{info.nombre}</p>
                <p>Padres: {info.padres}</p>
                <p>Fecha Nacimiento: {info.fechaNacimiento}</p>
                <div>
                    <Link className="btn botones m-3 p-2" to="/ModificarPerro" onClick={()=>dataPerro()}>Editar</Link> 
                    <button className="btn botones m-3 p-2" onClick={()=>eliminarPerro()}>Eliminar</button>  
                </div>
                
            </div>
        </div>
    )
}