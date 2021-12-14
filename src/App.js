import './App.css';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';
import DashboardPage from './components/DashboardPage.js';
import authApi from './services/authApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {isAuthenticated,logout,updateFirstName,updateLastName} from './actions/loginAction';
import {isLogin} from './services/authApi'
import userRoutes from './routes/user';
import reservationRoutes from './routes/reservation';
import equipmentRoutes from './routes/equipment';
import shareRoutes from './routes/share';
import rentaltypeRoutes from './routes/rentaltype';
import LoginPage from './components/LoginPage';
import { Route, Switch} from 'react-router-dom';


authApi.setup();
const status = isLogin()
const firstName = authApi.setFirstName();
const lastName = authApi.setLastName();


const App = (props) => {
    const test = props.isAuthenticated(status)
  
    // console.log(test);
    // const history = createBrowserHistory();
    return (
        <div className="App" >
        {/* <ConnectedRouter history={history}> */}
            <Navbar firstName = {props.updateFirstName(firstName)}   lastName = {props.updateLastName(lastName)} auth={props.isAuthenticated(status)} />
            <Switch>
            { rentaltypeRoutes }   
            { shareRoutes }
            { equipmentRoutes }   
            { reservationRoutes }
            { userRoutes }
            <Route path="/login" component={LoginPage}/>
            <Route exact path="/" component= {HomePage}/>
            <Route  path="/DashboardPage" render={() => <DashboardPage firstName = {props.updateFirstName(firstName)}   lastName = {props.updateLastName(lastName)} />}/>
            </Switch>
        {/* </ConnectedRouter> */}
    </div>
  );
}

const mapStateToProps =(state) => {
    // console.log(state.loginReducer.isAuthenticated)
    return {
        isAuthenticated:state.loginReducer.isAuthenticated,
        firstName: state.loginReducer.firstName,
        lastName : state.loginReducer.lastName
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        isAuthenticated,
        logout,
        updateFirstName,
        updateLastName,
        },dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps) (App);
