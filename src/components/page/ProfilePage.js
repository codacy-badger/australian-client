import React, { Component } from "react";
import PropTypes from "prop-types";
import AddressForm from "../form/AddressForm";
import CookieContainer from "../container/profile/CookieContainer";
import Header from "../common/Header";
import Meta from "../common/Meta";
import NotFoundJumbotron from "../common/jumbotron/NotFoundJumbotron";
import ProfileContainer from "../container/profile/ProfileContainer";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { NavLink, Route, Switch } from "react-router-dom";
import { translate } from "react-i18next";

class ProfilePage extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <Meta code="profile" />
        <Header />
        <Container className="mt-3 text-justify">
          <h1>{t("title.profile")}</h1>
          <Row>
            <Col sm={4} lg={3}>
              <ListGroup>
                <ListGroupItem tag={NavLink} to="/profile/general">
                  {t("profile.tab.general")}
                </ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/address">
                  {t("profile.tab.address")}
                </ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/mail">
                  {t("profile.tab.mail")}
                </ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/password">
                  {t("profile.tab.password")}
                </ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/account">
                  {t("profile.tab.account")}
                </ListGroupItem>
                <ListGroupItem tag={NavLink} to="/profile/cookies">
                  {t("profile.tab.cookies")}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col>
              <Switch>
                <Route exact path="/profile/general" component={ProfileContainer} />
                <Route exact path="/profile/address" component={AddressForm} />
                <Route exact path="/profile/cookies" component={CookieContainer} />
                {/* TODO replace by a component non displaying header */}
                <Route path="/profile/*" component={NotFoundJumbotron} />
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
  t: PropTypes.func.isRequired
};

export default translate("translations")(ProfilePage);
