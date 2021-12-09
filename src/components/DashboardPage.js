import React from 'react';
import { Link } from 'react-router-dom';
import agri from '../img/agri.jpg';
import tracteur from '../img/tracteur.jpg';
import resa from '../img/resa.jpg';


const DashboardPage = (props) => {
    return ( 
    <div>

            <h1> {props.firstName.firstName}  {props.lastName.lastName}, bienvenue sur votre espace administrateur</h1>
            <div className="container pt-5" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="card mb-3 "style={{maxWidth: "20rem",}}>
            <h3 className="card-header text-info " >ADHERENTS</h3>
                {/* <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                </div> */}
                <img src={agri} alt="" />
                <div className="card-body">
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link to="users/create" style={{textDecoration:"none"}} >
                    <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}} >Créer un adhérent
                    <span className="fa fa-plus-circle fa-2x text-info" aria-hidden="true" /></p>
                    </Link>
                    <Link to="/users/"  style={{textDecoration:"none"}}>
                    <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}}>Liste des adhérents
                    <span className="fa fa-th-list fa-2x text-info" aria-hidden="true"/>
                    </p>
                    </Link>
                </div>
                </div>
                <div className="card mb-3 "style={{maxWidth: "20rem",}}>
                    <h3 className="card-header text-info " >MATERIELS</h3>
                        {/* <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div> */}
                        <img src={tracteur} alt="" />
                        <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <Link to="equipment/create" style={{textDecoration:"none"}} >
                            <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}} >Ajouter un matériel
                            <span className="fa fa-plus-circle fa-2x text-info" aria-hidden="true" /></p>
                            </Link>
                            <Link to="/equipment/"  style={{textDecoration:"none"}}>
                            <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}}>Liste des matériels
                            <span className="fa fa-th-list fa-2x text-info" aria-hidden="true"/>
                            </p>
                            </Link>
                        </div>
                    
                    
                </div>
                <div className="card mb-3 "style={{maxWidth: "20rem",}}>
                    <h3 className="card-header text-info " >RESERVATIONS</h3>
                        {/* <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div> */}
                        <img src={resa} alt="" />
                        <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <Link to="reservations/create" style={{textDecoration:"none"}} >
                            <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}} >Ajouter une réservation
                            <span className="fa fa-plus-circle fa-2x text-info" aria-hidden="true" /></p>
                            </Link>
                            <Link to="/reservations/"  style={{textDecoration:"none"}}>
                            <p className="list-group-item text-info" style={{display:"flex",justifyContent:"space-around"}}>Liste des réservations
                            <span className="fa fa-th-list fa-2x text-info" aria-hidden="true"/>
                            </p>
                            </Link>
                        </div>
                    
                    
                </div>
            </div>

    </div>

 );
}
export default DashboardPage;