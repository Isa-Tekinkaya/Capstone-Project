import React from "react";
import "./styles.css";
import KaabaPic from "../../images/Kaaba.jpeg"
import { Row, Col, Container } from "react-bootstrap";
import EditInfoForm from "../EditInfoForm";

const EditProfile = () => {
  return (
    <Container
      fluid
      className="main pt-5 pb-5 fdb-block"
      style={{ minHeight: "85.3%" }}
    >
      <Row className="align-items-center">
        <Col className="panel text-center">
          <div className="social-prof">
            <div className="card-body">
              <div className="profilepic">
                <img
                  src={KaabaPic}
                  alt="avatar"
                  className="profilepic__image"
                />
                <div class="profilepic__content">
                  <span class="profilepic__icon">
                    <i class="fas fa-camera"></i>
                  </span>
                  <span class="profilepic__text">Edit Profile</span>
                </div>
              </div>
              <h3>Edit Your Profile</h3>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="col-sm-6 mx-auto">
          <EditInfoForm />
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
