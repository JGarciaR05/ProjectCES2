import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import "../node_modules/materialize-css/dist/js/materialize.js";
import "../node_modules/materialize-css/dist/css/materialize.css";
import LandingPage from './Components/LandingPage';
import "./styles/styles.css"
import Bovino from "./Components/Bovino";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";


const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/Bovino" component={Bovino} />
    </BrowserRouter>
  </ApolloProvider>
)

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
