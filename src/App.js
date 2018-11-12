import React from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
<<<<<<< HEAD
=======
import { connect } from "react-redux";
>>>>>>> fetch current user
import 'semantic-ui-css/semantic.min.css';
import "./index.css"
import HomePage from './components/pages/HomePage';
import TopNavigation from "./components/navigation/TopNavigation";
import SignupPage from './components/pages/SignupPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import TopNavigation from './components/navigation/TopNavigation';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
<<<<<<< HEAD
import { fetchCurrentUser } from "./actions/users";


=======
import { fetchCurrentUser } from './actions/users';

>>>>>>> fetch current user
class App extends React.Component {
    componentDidMount() {
      if (this.props.isAuthenticated) this.props.fetchCurrentUser();
    }
  
    render() {
      const { location, isAuthenticated, loaded } = this.props;
      return (
<<<<<<< HEAD
            <div className="ui container">
            <Loader loaded={loaded}>
            { isAuthenticated && <TopNavigation/> }
                <Route location={location} path="/" exact component={HomePage}/>
                <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage}/>
                <GuestRoute location={location} path="/login" exact component={LoginPage}/>
                <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
                <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage}/> 
                <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage}/> 
                <UserRoute location={location} path="/dashboard" exact component={DashboardPage}/>
                <UserRoute location={location} path="/games" exact component={GamesPage}/>
                </Loader>
            </div>
            );
    
    }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded
  };
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
=======
          <div>
            <Loader loaded={loaded}>
              {isAuthenticated && <TopNavigation />}
              <Route location={location} path="/" exact component={HomePage} />
              <Route
                location={location}
                path="/confirmation/:token"
                exact
                component={ConfirmationPage}
              />
              <GuestRoute
                location={location}
                path="/login"
                exact
                component={LoginPage}
              />
              <GuestRoute
                location={location}
                path="/signup"
                exact
                component={SignupPage}
              />
              <GuestRoute
                location={location}
                path="/forgot_password"
                exact
                component={ForgotPasswordPage}
              />
              <GuestRoute
                location={location}
                path="/reset_password/:token"
                exact
                component={ResetPasswordPage}
              />
              <UserRoute
                location={location}
                path="/dashboard"
                exact
                component={DashboardPage}
              />
            </Loader>
          </div>
      );
    }
  }
  
  App.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    fetchCurrentUser: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.email,
      loaded: state.user.loaded
    };
  }
  
  export default connect(mapStateToProps, { fetchCurrentUser })(App);
>>>>>>> fetch current user
