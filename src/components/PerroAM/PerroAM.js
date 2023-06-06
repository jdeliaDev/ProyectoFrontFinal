import{Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../Navegacion/Navegacion';
import './PerroAM.css';

export default function PerroAM({paso,sexo}) {

    let [ok,setOk]=useState(false);

    const [metodo,setMetodo]=useState('');
    const[form,setForm]=useState({
        nombre:'',
        padres:'',
        fechaNacimiento:'',
        imagen:'',
        sexo:''
    });

    const handleChange= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})   
    };

    const handleChangeInput= (e)=>{
            let fileInfo=e.target.files[0]
            console.log(fileInfo)
            setForm({...form,[e.target.name]: fileInfo})         
    };

    const perroAM=async (event)=>{
        event.preventDefault();
        let formData;
        let infoHeaders;
        let idPerro='';
        let endPoint='';
        if(metodo == 'POST'){
            event.target.elements.sexo.value = sexo
            formData= new FormData(event.target)
             infoHeaders={
                'Context-Type':'multipart/form-data'
            }
            idPerro='';
            endPoint='agregarPerro';
        }else{
            formData=JSON.stringify(form)
            infoHeaders={ 'Content-Type': 'application/json' }
            idPerro=form.id;
            endPoint='modificarPerro';
        }
        const response= await fetch(`http://localhost:4000/perros/${endPoint}/${idPerro}`,{
        method:metodo,
        headers:infoHeaders,
        body:formData
        })
        if(response.ok){
            localStorage.removeItem("infoPerro")
            setOk(true)
        }
    }

    useEffect(()=>{
        console.log('USEEFECT')
        if(paso !== ''){
            setForm(JSON.parse(localStorage.getItem('infoPerro')))
            setMetodo("PUT")

        }else{
            setForm({
                nombre:'',
                padres:'',
                fechaNacimiento:'',
                imagen:'',
                sexo:''
            })
            setMetodo("POST")       
        }
     },[paso])

    return(
        <Fragment>
            <Navegacion/>
            <main>
                <form className="container d-flex flex-column justify-content-center formulario" onSubmit={(event)=>{perroAM(event)}}>
                    <div className="row">
                        <label htmlFor="nombre" className="col-sm-2 col-form-label etiquetas">Nombre</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" value={form.nombre} onChange={(event)=>handleChange(event)} required/>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="padres" className="col-sm-2 col-form-label etiquetas">Padres</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" placeholder="Padres" id="padres" name="padres" value={form.padres} onChange={(event)=>handleChange(event)} required/>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="fechaNacimiento" className="col-sm-2 col-form-label etiquetas">Fecha Nacimiento</label>
                        <div className="col-sm-8">
                            <input type="date" className="form-control" placeholder="Fecha Nacimiento" id="fechaNacimiento" name="fechaNacimiento" value={form.fechaNacimiento} onChange={(event)=>handleChange(event)}  required/>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="imagen" className="col-sm-2 col-form-label etiquetas">Imágen</label>
                        <div className="col-sm-8">
                            <input type="file" className="form-control" id="imagen" name="imagen" accept="image/*" onChange={(event)=>handleChangeInput(event)} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 d-none">
                            <input type="text" className="form-control" id="sexo" name="sexo"/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Aceptar" className="btn botones col-sm-2"/>
                    </div>
                </form>
            </main>
            {ok === false? ""
            :
                <div className="alert alert-dismissible alert-success">
                     <strong> Perro agregado/actualizado exitosamente!</strong>
                     <Link to={sexo==="M"?"/SeccionTarjMachos":"/SeccionTarjHembras"} >Aceptar</Link>
                 </div>
             }
        </Fragment> 
        
    )
}