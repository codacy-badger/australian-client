import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { activate } from "../../actions/activationActions";
import { connect } from "react-redux";
import { translate } from "react-i18next";

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
      <div>
        <Helmet>
          <title>{t("meta.title.activation")}</title>
          <meta name="description" content={t("meta.description.activation")} />
          <meta name="keywords" content={t("meta.keywords.activation")} />
        </Helmet>
        <Header />
        <Container className="mt-3 text-justify">
          <Form onSubmit={this.onSubmit}>
            <Card>
              <CardHeader>{t("title.activation")}</CardHeader>
              <CardBody>
                <StatusAlert
                  code="activation"
                  error={error}
                  isError={isActivationError}
                  isSuccess={isActivationSuccess}
                  success={nextStep}
                />
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
                  onClick={this.onSubmit}
                />
                <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
                  {t("link.home-page")}
                </Link>
              </CardFooter>
            </Card>
          </Form>
        </Container>
      </div>
    );
  }
}

ActivationPage.propTypes = {
  activate: PropTypes.func.isRequired,
  isActivationError: PropTypes.bool.isRequired,
  isActivationPending: PropTypes.bool.isRequired,
  isActivationSuccess: PropTypes.bool.isRequired
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

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActivationPage)
);
