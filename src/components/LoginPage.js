import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePassword, updateUsername,login } from '../actions/loginAction';
import Navbar from './Navbar';



 
class LoginPage extends Component {
    render() {
      return (
            <div>
                <Navbar/>
                <h1 className="text-center">Connexion à la Cuma de St Laurent</h1>
                <form onSubmit={(e)=>this.props.login(e,e.currentTarget.username.value,e.currentTarget.password.value)}>
                    <fieldset className="col-md-6  w-50 mx-auto ">
                        
                        <div className="form-group" >
                        <label htmlFor="username" className="form-label mt-4">Mon adresse Email</label>
                        <input  onChange={(e)=>{this.props.updateUsername(e.target.value)}} value ={this.props.username} type="email" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Adresse Email"/>
                        </div>
                        <div className="form-group">
                        <label  htmlFor="password" className="form-label mt-4">Mot de passe </label>
                        <input  onChange={(e)=>{this.props.updatePassword(e.target.value)}} value={this.props.password} type="password" className="form-control" id="password" name="password" placeholder="Mot de passe"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-5" >Je me connecte</button>
                       
                    </fieldset>
                </form>
            </div>
      )
    };

}

const mapStateToProps = (state)=>{
   
    return{
        username:state.loginReducer.username,
        password:state.loginReducer.password
    }
   
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        updateUsername,
        updatePassword,
        login,
        },dispatch);
}
 
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);