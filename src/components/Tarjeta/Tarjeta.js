import './Tarjeta.css'

export default function Tarjeta ({info}) {
    
    return(
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img className='imgTamaño' src={info.imagen}/>
                <p>{info.nombre}</p>
                <p>Padres: {info.padres}</p>
                <p>Fecha Nacimiento: {info.fechaNacimiento}</p>
                <button className="btn btn-active align-self-end">Eliminar</button>  
            </div>
        </div>
    )
}