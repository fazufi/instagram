import React, { Component } from "react";
import TemplateExplore from "../components/TemplateExplore";
import dbExplore from "./dbExplore.json";
import dbExplore2 from "./dbExplore2.json";
import { Container, Row, Card } from "react-bootstrap";


export default class Explore extends Component {
  state = {
    dbExplore,
    dbExplore2,

    postCount1: false,
    postCount2: false,
  };

  async componentDidMount() {
    window.addEventListener("scroll", this.scroll);
    
    
  }

  scroll = (ev) => {
    var st = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    if (!st) {
      this.setState({ postCount1: false });
    } else if (
      st + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      if (this.state.postCount1 === false) {
        this.setState({ postCount1: true });
      } else if (this.state.postCount1 === true) {
        this.setState({ postCount2: true });
      }
    }
  };
  render() {
    return (
      <TemplateExplore {...this.props}>
        <Container className="template">
          <Row className="body">
            <Posts json={this.state.dbExplore} />

            {this.state.postCount1 === true ? (
              <Posts json={this.state.dbExplore2} />
            ) : null}
          </Row>
        </Container>
      </TemplateExplore>
    );
  }
}

class Posts extends Component {
  render() {
    console.log("posts render");
    return (
      <div>
        {this.props.json.data.user.edge_web_feed_timeline.edges.map(
          (item, i) => (
            <Card className="arround" key={i}>
              <Card.Img variant="top" src={item.node.display_url} />
            </Card>
          )
        )}
      </div>
    );
  }
}
