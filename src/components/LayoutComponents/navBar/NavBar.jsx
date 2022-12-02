import {useState} from 'react';
import { List, Cart3, Search, X } from 'react-bootstrap-icons'
import Logo from '../../../assets/logo.png'

export const NavBar = () => {
    const[isOpen, setIsOpen]= useState(false);

    function desplegable(){
        if(isOpen === false){
            setIsOpen(true)
        } else if(isOpen=== true){
            setIsOpen(false)
        }
    }
  return (
    <>
    <nav>
        <div className='nav-section1'>
        <img src={Logo} alt="" />
        <h1>NVIDIA</h1>
        </div>
        <div>
        <Cart3 size={30} className="cart" />
        <List size={30} className={isOpen === true ? 'd-none' : null } onClick={desplegable} />
        <X size={35} className={isOpen === false ? 'd-none': null} onClick={desplegable} />
        </div>
    </nav>
     <div className={isOpen === false ? 'd-none' :'menuDespegable'}>
        <input type="text" name="" id="" />
        <Search className='search-icon' size={20} />
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
            <li>Iniciar sesion</li>
        </ul>
     </div>
    </>
  )
}
