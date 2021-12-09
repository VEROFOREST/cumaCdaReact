import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logout,isAuthenticated} from '../actions/loginAction';
import {Link, NavLink} from 'react-router-dom';


const Navbar = (props) => {
        const auth= props.auth.isAuthenticated;
       const test = props.firstName;
       console.log(auth);
        // console.log(firstName);

       return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-info" >
  <div className="container-fluid">
     
    <NavLink className="navbar-brand" to="/">Cuma de St Laurent</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" exact to="/DashboardPage"><i class="fa fa-home" aria-hidden="true"></i>
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Users/">Adhérents</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Equipment/">Matériels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Reservations/">Réservations</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/Shares/">Parts sociales</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/Rental_types/">Types de location</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
      
      {auth === true ?

            <>
            <NavLink exact to="/login" className="btn btn-secondary my-2 my-sm-0" ><i className="fa fa-user" aria-hidden="true"></i> {props.firstName.firstName}  {props.lastName.lastName}</NavLink>
          
            <button onClick={props.logout} className="btn btn-danger my-2 my-sm-0" type="submit"><i className="fa fa-sign-out" aria-hidden="true"></i></button></>
        :
        <NavLink exact to="/login" className="btn btn-secondary my-2 my-sm-0" ><i className="fa fa-sign-in" aria-hidden="true"></i> Connexion</NavLink>         
      }
      </ul>
     
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