import React, { Component } from "react";
// import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

// import logo from './logo.svg';
import { Router, Switch, Route } from "react-router-dom";
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
    return (
      <Template {...this.props}>
        <div>
          <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p></div>
      </Template>
    );
  }
}

class Apss extends Component {
  render() {
    return (
      <Template {...this.props}>
    <h2>Apss</h2>
    </Template>
    )
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
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
