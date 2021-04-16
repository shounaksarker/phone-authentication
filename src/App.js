import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

// Font Awesome Icon //
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlay, faApple, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faSearch, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import Home from './Component/Home/Home';
import Login from "./Component/Authentication/Login";
library.add(faGooglePlay, faApple, faFacebook, faTwitter, faYoutube, faPlus, faSearch, faMapMarkerAlt, faStar);

  
export const MyContx = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  return (
    <MyContx.Provider value = { [isLoggedIn, setIsLoggedIn] }>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/auth">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </MyContx.Provider>
  );
}
export default App;