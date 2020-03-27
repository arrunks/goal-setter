import React,{useState,useEffect} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import { getUserInfo } from './redux/actions';

import HeaderComponent from './components/HeaderComponent';
import { SignUpComponent } from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import { HomePageComponent } from './components/HomePageComponent';
import DashBoardComponent from './components/DashBoardComponent';
import PrivateRoute from './routes/PrivateRoute';

function App({user,getUserInfo}) {
  const [infoFetched, setInfoFetched ] = useState(user.loaded);
    useEffect(() => {
        if ( !infoFetched ) {
            getUserInfo()
            .then(() => setInfoFetched(true))
            .catch((error) => setInfoFetched(true));
        }
    },[getUserInfo, infoFetched]);

  return (
    <React.Fragment>
    {
      !infoFetched && <p>Loading...</p>
    }
    {
      infoFetched &&    <Router>
      <HeaderComponent/>
      <Switch>
        <Route path="/signin" component={SignInComponent}/>
        <Route path="/signup" component={SignUpComponent}/>
        <Route exact path="/" component={HomePageComponent}/>
        <PrivateRoute path="/dashboard">
          <DashBoardComponent/>
        </PrivateRoute>
      </Switch>
    </Router>
    }
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps,{getUserInfo})(App);
