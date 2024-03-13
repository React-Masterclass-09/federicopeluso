import routes from '../../routes/routes';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar(){
    
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <Link className={"navbar-brand" + classes.brand} to={routes.home}><span className='text-accentC'>R</span>eactor</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <input type='text' className={'d-block-mx-auto ' + classes.search_input}  placeholder='Ricerca ... '/>
      <ul className="navbar-nav  ms-auto ms-auto <!-- lo definisce a dx --> me-auto mb-2 mb-lg-0">   
        <li className="nav-item">
          <Link className={'h2 me-3 ' + classes.nav_link_custom} >Registrati</Link> 
        </li>
        <li className="nav-item">
        <Link className={'h2 ' + classes.nav_link_custom} >Login</Link>
        </li>
      
      </ul>
 
    </div>
  </div>
</nav>
    )
}