import React from 'react';
import agri from '../img/agri.jpg';
import admin from '../img/admin.jpg';
import { NavLink } from 'react-router-dom';



const HomePage = (props) => {
    return ( 
<div className="container pt-5" style={{display:"flex",justifyContent:"space-around"}}>
    <div className="card mb-3 "style={{maxWidth: "20rem",}}>
        <h4 className="card-header text-info">ADHERENTS</h4>
            <div className="card-body">
            <NavLink className="text-info" exact to="/login">
                <h5 className="card-title">Je suis adhérent</h5>
                </NavLink> 
                <h6 className="card-subtitle text-muted">Si vous n'êtes pas adhérent, veuillez nous contacter <i className="fa fa-envelope-o fa-fw text-info" aria-hidden="true"></i></h6>
            </div>
            <img src={agri} alt="" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        
    </div>
   
    <div className="card mb-3" style={{maxWidth: "20rem",}}>
        <h4 className="card-header text-info">ADMINISTRATEURS</h4>
            <div className="card-body">
                 <NavLink className="text-info" exact to="/login">
                <h5 className="card-title">Je suis administrateur</h5>
                </NavLink> 
                
                <h6 className="card-subtitle text-muted">En cas de problème, contactez la maintenance <i className="fa fa-envelope-o fa-fw text-info" aria-hidden="true"></i></h6>
            </div>
            <img src={admin} alt="" />
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
       
        </div>

</div>

 );
}
export default HomePage;