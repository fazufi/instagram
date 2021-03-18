import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";
import Edit from "./pages/Edit";
import Change from "./pages/Change";
import Apps from "./pages/Apps";
import Email from "./pages/Email";
import Push from "./pages/Push";
import Manage from "./pages/Manage";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Emails from "./pages/Emails";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/direct/inbox" exact component={Messages} />
          <Route path="/explore" component={Explore} />
          <Route path="/accounts/edit" component={Edit} />
          <Route path="/accounts/password/change" component={Change} />
          <Route path="/accounts/manage_access" component={Apps} />
          <Route path="/emails/settings" component={Email} />
          <Route path="/push/web/settings" component={Push} />
          <Route path="/accounts/contact_history" component={Manage} />
          <Route path="/accounts/privacy_and_security" component={Privacy} />
          <Route path="/session/login_activity" component={Login} />
          <Route path="/emails/emails_sent" component={Emails} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} peristor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
