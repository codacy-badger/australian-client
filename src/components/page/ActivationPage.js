import React, {Component} from "react";
import PropTypes from "prop-types"
import Submit from "../common/button/Submit";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Alert, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {translate, Trans} from "react-i18next";
import {activate} from "../../actions/activationActions";

class ActivationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activationCode: this.props.match.params.activationCode
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { activationCode } = this.state;

    if ("" !== activationCode) {
      this.props.activate(activationCode);
    }
    return false;
  }

  render() {
    const { error, isActivationPending, isActivationSuccess, isActivationError, nextStep, t } = this.props;
    const { activationCode } = this.state;

    return (
      <Container className="mt-3 text-justify">
        <Form onSubmit={this.onSubmit}>
          <Card>
            <CardHeader>{t("title.activation")}</CardHeader>
            <CardBody>
              {isActivationError && (
                <Alert color="danger" className="text-center">
                  <Trans i18nKey={"error.." + error.code}>{error.message}</Trans>
                </Alert>
              )}
              {isActivationSuccess && (
                <Alert color="success" className="text-center">
                  <Trans i18nKey={"message.activation-nextStep." + nextStep.code}>{nextStep.message}</Trans>
                </Alert>
              )}
              {!isActivationError &&
              !isActivationSuccess && (
                <Alert color="info" className="text-center">
                  {t("help.activation")}
                </Alert>
              )}
              <FormGroup row>
                <Label for="activationCode" sm={4}>
                  {t("form.activation.activationCode")}
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="activationCode"
                    id="activationCode"
                    placeholder={t("form.activation.activationCode-placeholder")}
                    value={activationCode}
                    required
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter className="text-right">
              <Submit
                isPending={isActivationPending}
                isSuccess={isActivationSuccess}
                name="activation"
                submitCallback={this.onSubmit}
              />
              <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
                {t("link.home-page")}
              </Link>
            </CardFooter>
          </Card>
        </Form>
      </Container>
    );
  }
}

ActivationPage.propTypes = {
  activate: PropTypes.func.isRequired,
  isActivationError: PropTypes.bool.isRequired,
  isActivationPending: PropTypes.bool.isRequired,
  isActivationSuccess: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    error: state.activationReducer.error,
    isActivationError: state.activationReducer.isActivationError,
    isActivationPending: state.activationReducer.isActivationPending,
    isActivationSuccess: state.activationReducer.isActivationSuccess,
    nextStep: state.activationReducer.nextStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    activate: (activationCode) => dispatch(activate(activationCode))
  };
}

export default translate("translations")(connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivationPage));
