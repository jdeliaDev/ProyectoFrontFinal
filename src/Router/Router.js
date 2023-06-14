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
                <Route path='/AgregarPerroMacho' element={<PerroAM paso= {''} sexo='M'/>}/>
                <Route path='/AgregarPerroHembra' element={<PerroAM paso= {''} sexo='H'/>}/>
                <Route path='/ModificarPerroMacho' element={<PerroAM paso= {'U'}sexo='M'/>}/>
                <Route path='/ModificarPerroHembra' element={<PerroAM paso= {'U'} sexo='H'/>}/>
            </Routes>
        </BrowserRouter>
    )
}