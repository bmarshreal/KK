import React from 'react';
import * as RBS from 'react-bootstrap';
import './Gallery.css';


const Gallery = () => {
    return (
      <div id = "Gallery">
        <RBS.Container>
          <RBS.Row>
            <div>
              <RBS.Card bg="primary" text="white" style={{ width: "18rem" }}>
                <RBS.Card.Img
                  variant="top"
                  src={require("../images/345222.jpg")}
                  style={{ height: "18rem" }}
                />
                <RBS.Card.Body>
                  <RBS.Card.Title>Sugar-Bear!</RBS.Card.Title>
                  <RBS.Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </RBS.Card.Text>
                  <RBS.Button variant="outline-light">Go somewhere</RBS.Button>
                </RBS.Card.Body>
              </RBS.Card>
            </div>

            <div>
              <RBS.Card bg="success" style={{ width: "18rem" }}>
                <RBS.Card.Img
                  variant="top"
                  src={require("../images/534.jpg")}
                  style={{ height: "18rem" }}
                />
                <RBS.Card.Body>
                  <RBS.Card.Title>Crayons!</RBS.Card.Title>
                  <RBS.Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </RBS.Card.Text>
                  <RBS.Button variant="outline-light">Go somewhere</RBS.Button>
                </RBS.Card.Body>
              </RBS.Card>
            </div>

            <div>
              <RBS.Card bg="warning" style={{ width: "18rem" }}>
                <RBS.Card.Img
                  variant="top"
                  src={require("../images/1.jpg")}
                  style={{ height: "18rem" }}
                />
                <RBS.Card.Body>
                  <RBS.Card.Title>Chalk!</RBS.Card.Title>
                  <RBS.Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </RBS.Card.Text>
                  <RBS.Button variant="outline-light">Go somewhere</RBS.Button>
                </RBS.Card.Body>
              </RBS.Card>
            </div>
          </RBS.Row>
        </RBS.Container>
      </div>
    );
}

export default Gallery;