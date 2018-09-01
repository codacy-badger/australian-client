import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import { translate } from "react-i18next";
import ProfileForm from "../common/form/ProfileForm";
import {NavLink, Route, Switch} from "react-router-dom";
import AddressForm from "../common/form/AddressForm";

class ProfilePage extends Component {

  render() {

    const { t } = this.props;

    return (
      <div>
        <Header />
        <Container className="mt-3 text-justify">
          <h1>{t("title.profile")}</h1>
          <Row>
            <Col sm={4} lg={3}>
              <ListGroup>
                <ListGroupItem tag={NavLink} to="/profile/general">{t("profile.general")}</ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/address">{t("profile.address")}</ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/mail">{t("profile.mail")}</ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/password">{t("profile.password")}</ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/account">{t("profile.account")}</ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/cookie">{t("profile.cookie")}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route exact path="/profile/general" component={ProfileForm}/>
                <Route exact path="/profile/address" component={AddressForm}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// The propTypes.
ProfilePage.propTypes = {
  user: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(ProfilePage);
