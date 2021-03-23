import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";

class TopMenu extends Component {
  Toggle=(p)=>{
    this.props.gantiMode(p)
  }
  
  render() {
    console.log("top", this.props.mode);
    return (
      <Container fluid  >
        <Navbar className={this.props.mode}  expand="lg" >
        <button className="white" onClick={()=>this.Toggle("white")}>.</button>
        <button className="red" onClick={()=>this.Toggle("red")}>.</button>
        <button className="green" onClick={()=>this.Toggle("green")}>.</button>
        <button className="yellow" onClick={()=>this.Toggle("yellow")}>.</button>
          <Container >
          
            <Navbar.Brand>
              <img
                alt="Instagram"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                srcSet="/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
                cursor="pointer"
              ></img>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Navbar.Collapse>

            <Nav className="justify-content-end" activeKey="/">
              <Nav.Item className="mr-3">
                <Link to="/">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRep1JRLPVCb9ThRJu7vpN0EFLADFmpTz9hsA&usqp=CAU"
                    alt="HOme"
                    width="25"
                    height="25"
                  />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/direct/inbox">
                  <img
                    className="mr-3"
                    src="https://static.thenounproject.com/png/3084968-200.png"
                    alt="messages"
                    width="25"
                    height="25"
                  />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/explore">
                  <img
                    className="mr-3"
                    src="https://www.lamar.edu/career-and-testing-services/_files/images/icons/iconfinder_90_compass_183404.png"
                    alt="explore"
                    width="25"
                    height="25"
                  />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/accounts/edit">
                  <img
                    className="float-right"
                    src="https://instagram.fada2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fada2-1.fna.fbcdn.net&_nc_ohc=SkQvnEdYBN8AX-tYmCd&oh=c42861bdaa4bb6a18094f8bf99bb7f78&oe=6057FD8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    alt="pp akun"
                    width="25"
                    height="25"
                  />
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export const mapStateToProps = (STATE) => {
  return { mode: STATE.mode };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    gantiMode: (data) => dispatch({ type: "gantiMode", mode: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);