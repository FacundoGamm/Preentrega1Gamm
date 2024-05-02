import './NavComponent.css';
import BotonComponente from "./BotonComponente";
import Nombre from "./Nombre";
import CartWidget from './CartWidget';
import skateLogo from '../assets/skateLogo.png';

export default function NavBar() {
    return <nav className='barra'>
        <Nombre />
        <img src={skateLogo} alt="logo skate" />
        <BotonComponente nombre='Nosotros'/>
        <BotonComponente nombre='Productos'/>
        <BotonComponente nombre='Contáctanos'/>
        <CartWidget/>
    </nav>
}