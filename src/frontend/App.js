import React,{useState,useEffect,Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import { getUserInfo } from 'Actions';

import HeaderComponent from 'Components/HeaderComponent';
import { FooterComponent } from 'Components/FooterComponent';
import { HomePageComponent } from 'Components/home/HomePageComponent';

import PrivateRoute from './routes/PrivateRoute';

const SignInComponent = React.lazy(() => import('Components/signin/SignInComponent'));
const SignUpComponent = React.lazy(() => import('Components/signup/SignUpComponent'));
const DashBoardComponent = React.lazy(() => import('Components/dashboard/DashBoardComponent'));

function App({user,getUserInfo}) {
  const [infoFetched, setInfoFetched ] = useState(user.loaded);
    useEffect(() => {
        if ( !infoFetched && localStorage.getItem('user')) {
            (async () => {
              await getUserInfo();
              setInfoFetched(true);
            })();
            // getUserInfo()
            // .then(() => setInfoFetched(true))
            // .catch((error) => setInfoFetched(true));
        }else{
          setInfoFetched(true);
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
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/signin" component={SignInComponent}/>
        <Route path="/signup" component={SignUpComponent}/>
        <Route exact path="/" component={HomePageComponent}/>
        <PrivateRoute path="/dashboard">
          <DashBoardComponent/>
        </PrivateRoute>
      </Switch>
      </Suspense>
      <FooterComponent/>
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
