import React from "react";
import PropTypes from "prop-types";
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Submit from "../common/button/Submit";
import { translate } from "react-i18next";

const LoginForm = ({ email, isPending, isSuccess, onChange, onSubmit, password, rememberMe, t }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="loginEmail" sm={4}>
          {t("form.login.email")}
        </Label>
        <Col sm={8}>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            value={email}
            placeholder="john.doe@example.org"
            required
            onChange={onChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="loginPassword" sm={4}>
          {t("form.login.password")}
        </Label>
        <Col sm={8}>
          <Input
            type="password"
            name="password"
            id="loginPassword"
            value={password}
            placeholder={t("form.login.password-placeholder")}
            required
            onChange={onChange}
          />
          <FormText color="muted">
            <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
            <Link to="/forgot-your-password" title={t("link.forgot-your-password-title")}>
              {t("link.forgot-your-password")}
            </Link>
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup check>
        <Col sm={{ size: 8, offset: 4 }}>
          <Label check>
            <Input type="checkbox" name="rememberMe" id="rememberMe" checked={rememberMe} onChange={onChange} />
            {t("form.login.rememberMe")}
          </Label>
        </Col>
      </FormGroup>
      <Submit icon="sign-in-alt" name="login" isPending={isPending} isSuccess={isSuccess} onClick={onSubmit} />
    </Form>
  );
};

// The propTypes.
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoginForm);
