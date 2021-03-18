import React, { Component } from "react";
import TemplateHome from "../components/TemplateHome";
import {
  Card,
  Image, 
  Col,  
  FormControl,
} from "react-bootstrap";
import ReadMoreReact from "read-more-react";

import dbHome from "./dbHome.json";
import dbHome2 from "./dbHome2.json";
import dbHome3 from "./dbHome3.json";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    dbHome: JSON.parse(localStorage.getItem("dbHome")) || dbHome,
    dbHome2: JSON.parse(localStorage.getItem("dbHome2")) || dbHome2,
    dbHome3: JSON.parse(localStorage.getItem("dbHome3")) || dbHome3,
    postCount1: false,
    postCount2: false,
  }
  componentDidUpdate(){
    localStorage.setItem("dbHome2", JSON.stringify(this.state.dbHome2))
    localStorage.setItem("dbHome3", JSON.stringify(this.state.dbHome3))
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
    localStorage.setItem("dbHome", JSON.stringify(this.state.dbHome))
   
  }
  scroll = () => {
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
    console.log("", this.state.dbHome);
    return (
      <TemplateHome {...this.props} {...this.state}>
        <Posts json={this.state.dbHome} />
        {this.state.postCount1 === true ? (
          <Posts json={this.state.dbHome2} />
        ) : null}
        {this.state.postCount2 === true ? (
          <Posts json={this.state.dbHome3} />
        ) : null}
      </TemplateHome>
    );
  }
}

class Posts extends Component {
  render() {
    console.log("posts render");
    return (
      <Card >
        {this.props.json.data.user.edge_web_feed_timeline.edges.map(
          (item, b) => (
            <Col key={b}>
              <Card.Header>
                <Card.Title>
                 
                  <Image
                    variant="top"
                    src={item.node.owner.profile_pic_url}
                    roundedCircle
                    width="25"
                    height="25"
                  />
                  {item.node.owner.username}
                </Card.Title>
              </Card.Header>
              <Card.Body className="p-0">
               
                {item.node.is_video === true ? 
                  <video
                    src={item.node.video_url}
                    type="video/mp4"
                    controls
                    poster={item.node.display_url}
                    box-sizing="border-box"
                    width="612"
                  />
                 : 
                  <img src={item.node.display_url} alt="post img" width="612" />
                }
              </Card.Body>
              <Card.Body className="p-0">
                {/* <img alt="card-icons" src="card-love.png" />
                <img alt="card-icons" src="card-comment.png" />
                <img alt="card-icons" src="card-plane.png" />
                <img
                  alt="card-icons"
                  className="bookmark"
                  src="card-bookmark.png"
                /> */}
                <br />
                <Card.Title>
                  <strong>
                    {item.node.edge_media_preview_like.count} likes
                  </strong>
                </Card.Title>
                <Card.Text>
                  <strong>{item.node.owner.username} </strong>
                  <ReadMoreReact
                    text={item.node.edge_media_to_caption.edges[0].node.text}
                    min={80}
                    ideal={100}
                    max={120}
                    readMoreText={"readmore"}
                  />
                </Card.Text>
                <Card.Subtitle>
                  {item.node.taken_at_timestamp} hour ago
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <FormControl placeholder="😊  add comment" />
              </Card.Footer>
            </Col>
          )
        )}
      </Card>
    );
  }
}
export const mapStateToProps = (STATE) => {
  return { ...STATE };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiMode: (data) => dispatch({ type: "gantiMode", mode: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);