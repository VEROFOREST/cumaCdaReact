import React,{Component} from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { updatePassword, updateUsername,login,isAuthenticated } from '../actions/loginAction';
import Navbar from './Navbar';



 
class LoginPage extends Component {
    render() {
      return (
            <div className="d-flex-column align-content-around">
            
                <h1 className="text-center ">Connexion à la Cuma de St Laurent</h1>
                <form className="container ml-5 mr-10" onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.login(e.currentTarget.username.value,e.currentTarget.password.value)}}>
                    <fieldset className="col-md-6  w-50 mx-auto ">
                        <div className="input-group margin-bottom-sm" >
                        <span className="input-group-addon"><i className="fa fa-envelope-o fa-fw text-info" aria-hidden="true"></i></span>
                        <input onChange={(e)=>{this.props.updateUsername(e.target.value)}} value ={this.props.username} type="email" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Adresse Email" />
                        </div>
                        <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-key fa-fw text-info" aria-hidden="true"></i></span>
                        <input onChange={(e)=>{this.props.updatePassword(e.target.value)}} value={this.props.password} type="password" className="form-control" id="password" name="password" placeholder="Mot de passe"/>
                        </div>
                        <NavLink className="text-info" exact to="/">Mot de passe oublié ?</NavLink>
                        <div>
                        <button onClick={(auth)=>this.props.isAuthenticated(auth)}type="submit" className="btn btn-outline-info mt-5" >Se connecter</button>
                        </div>
                       
                    </fieldset>
                </form>
            </div>
      )
    };

}

const mapStateToProps = (state)=>{
   
    return{
        username:state.loginReducer.username,
        password:state.loginReducer.password,
        isAuthenticated:state.loginReducer.isAuthenticated
    }
   
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        updateUsername,
        updatePassword,
        login,
        isAuthenticated,
        },dispatch);
}
 
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);