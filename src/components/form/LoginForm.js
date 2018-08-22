import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

class LoginForm extends Component {
  render() {
    const {t} = this.props;

    return (
      <Form {...this.props}>
        <FormGroup row>
          <Label for="loginEmail" sm={4}>{t('form.login.email')}</Label>
          <Col sm={8}>
            <Input type="email" name="email" id="loginEmail" placeholder="john.doe@example.org" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="loginPassword" sm={4}>{t('form.login.password')}</Label>
          <Col sm={8}>
            <Input type="password" name="password" id="loginPassword" placeholder={t('form.login.password-placeholder')} required/>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoginForm);
