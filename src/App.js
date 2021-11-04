import './App.css';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';
import "bootswatch/dist/litera/bootstrap.min.css";
import authApi from './services/authApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {isAuthenticated,logout} from './actions/loginAction';


authApi.setup();
function App(props) {
  return (
    <div className="App" >
      <Navbar isAuthenticated = {props.isAuthenticated}/>
      <HomePage/>
     
    </div>
  );
}

const mapStateToProps =(state) => {
    return {
        isAuthenticated:state.isAuthenticated
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        isAuthenticated,
        logout
        },dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps) (App);
