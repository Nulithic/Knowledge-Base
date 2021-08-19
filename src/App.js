import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Faqs from "./pages/Faqs";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tips" component={Tips} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/support" component={Support} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
