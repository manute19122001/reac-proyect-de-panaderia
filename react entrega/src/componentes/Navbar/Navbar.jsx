
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    
   <>
   <header>
         
       <Link to="/">
       <h1>panaderia</h1>
       
       </Link>

       
          <nav>
              <ul>

                 <li>
               <NavLink to="/categoria/almacen">almacen</NavLink>  
              </li>
                <li>
               <NavLink to="/categoria/tortas">tortas</NavLink>  
              </li>  
              <li>
               <NavLink to="/categoria/contacto">contacto</NavLink>  
              </li>
               
              
              </ul>
          </nav>
      </header>
       
       
      </>


  )
}

export default Navbar