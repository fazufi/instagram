
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import logo from './logo.svg';
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Template from "./components/Template";
import Edit from "./pages/Edit";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accounts/edit" component={Edit} />
          <Route path="/accounts/password/change" component={Change} />
          <Route path="/accounts/manage_access" component={Apss} />
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

class Home extends Component {
  render() {
    return (
      <div className="asd">
        Pertama
        <div className="asd">Kedua</div>
        <div className="asd">
          Ketiga
          <div className="asd">Keempat</div>
        </div>
      </div>
    );
  }
}

class Change extends Component {
  render() {
    return <Template {...this.props} tampil={<h2>Change</h2>} />;
  }
}

class Apss extends Component {
  render() {
    return <h2>Apss</h2>;
  }
}

class Email extends Component {
  render() {
    return <h2>Email</h2>;
  }
}

class Push extends Component {
  render() {
    return <h2>Push</h2>;
  }
}
class Manage extends Component {
  render() {
    return <h2>Manage</h2>;
  }
}
class Privacy extends Component {
  render() {
    return <h2>Privacy</h2>;
  }
}
class Login extends Component {
  render() {
    return <h2>Login</h2>;
  }
}
class Emails extends Component {
  render() {
    return <h2>Emails</h2>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();