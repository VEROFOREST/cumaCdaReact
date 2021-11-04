import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {logout,isAuthenticated} from '../actions/loginAction';


const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="HomePage">Cuma de St Laurent</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Accueil
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Users/">Adhérents</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Equipments/">Matériels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Reservations/">Réservations</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        
            <NavLink to="/login" className="btn btn-secondary my-2 my-sm-0" >connexion</NavLink>
        
        
        <button onClick={()=>props.logout()}className="btn btn-danger my-2 my-sm-0" type="submit">deconnexion</button>
        

      </form>
    </div>
  </div>
</nav>

     );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        logout,
        isAuthenticated,
        },dispatch);
}

export default connect (mapDispatchToProps)(Navbar);