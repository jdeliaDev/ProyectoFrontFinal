import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from '../components/Inicio/Inicio';
import SeccionTarjetas from '../components/SeccionTarjetas/SeccionTarjetas';
import PerroAM from '../components/PerroAM/PerroAM';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/SeccionTarjMachos' element={<SeccionTarjetas sexo='M'/>}/>
                <Route path='/SeccionTarjHembras' element={<SeccionTarjetas sexo='H'/>}/>
                <Route path='/AgregarPerro' element={<PerroAM paso= {''}/>}/>
                <Route path='/ModificarPerro' element={<PerroAM paso= {localStorage.getItem('infoPerro')}/>}/>
            </Routes>
        </BrowserRouter>
    )
}