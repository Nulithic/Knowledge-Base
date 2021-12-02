import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tips" component={Tips} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
