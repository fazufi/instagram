import React, { Component } from "react";
import Template from "../components/Template";

import { Tab, Tabs, Row, Col, Container } from "react-bootstrap";


export default class Emails extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Email dari Instastren</h1>
                  <Tabs
                    defaultActiveKey="keamanan"
                    transition={false}
                    id="noanim-tab-example"
                  >
                    <Tab eventKey="keamanan" title="KEAMANAN">
                      <p>
                        Email keamanan dan login dari Instagram dalam 14 hari
                        terakhir akan muncul di sini. Anda bisa menggunakannya
                        untuk memverifikasi email mana yang asli dan yang palsu.
                        Pelajari selengkapnya.
                      </p>
                      <hr />
                      <p>
                        Upaya login baru ke Instagram dari Chrome di Linux
                        <br />
                        20 Februari 2021 15:01
                        <br />
                        Dikirim ke: abdullahfathurrahman96@gmail.com · Dikirim
                        dari: security@mail.instagram.com
                      </p>
                    </Tab>
                    <Tab eventKey="lainnya" title="LAINNYA">
                      <p>
                        Email lain dari Instagram dalam 14 hari terakhir yang
                        bukan tentang keamanan atau login akan muncul di sini.
                        Anda bisa menggunakannya untuk memverifikasi email yang
                        asli dan yang palsu. Pelajari selengkapnya.
                      </p>
                    </Tab>
                  </Tabs>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Template>
    );
  }
}
