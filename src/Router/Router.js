import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from '../components/Inicio/Inicio';
import SeccionTarjMachos from '../components/SeccionTarjMachos/SeccionTarjMachos';
import SeccionTarjHembras from '../components/SeccionTarjHembras/SeccionTarjHembras';
import AgregarPerro from '../components/AgregarPerro/AgregarPerro';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/SeccionTarjMachos' element={<SeccionTarjMachos/>}/>
                <Route path='/SeccionTarjHembras' element={<SeccionTarjHembras/>}/>
                <Route path='/AgregarPerro' element={<AgregarPerro/>}/>
            </Routes>
        </BrowserRouter>
    )
}