import React, { Component } from "react";
import PropTypes from "prop-types";
import ActivationCodeFormGroup from "../formgroup/ActivationCodeFormGroup";
import Header from "../common/Header";
import Meta from "../common/Meta";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import { Card, CardBody, CardFooter, CardHeader, Container, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { activate } from "../../actions/activationActions";
import { connect } from "react-redux";
import { createForm, formShape } from "rc-form";
import { translate } from "react-i18next";

//TODO create a container
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
      activationCode: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        const { activationCode } = this.state;

        this.props.activate(activationCode);
      }
    });
  }

  render() {
    const { error, form, isPending, isSuccess, isError, nextStep, t } = this.props;
    const { activationCode } = this.state;

    return (
      <div>
        <Meta code="activation" />
        <Header />
        <Container className="mt-3 text-justify">
          <Form onSubmit={this.onSubmit}>
            <Card>
              <CardHeader>{t("title.activation")}</CardHeader>
              <CardBody>
                <StatusAlert
                  code="activation"
                  error={error}
                  isError={isError}
                  isSuccess={isSuccess}
                  success={nextStep}
                />
                <ActivationCodeFormGroup
                  disabled={isPending}
                  form={form}
                  onChange={this.onChange}
                  value={activationCode}
                />
              </CardBody>
              <CardFooter className="text-right">
                <Submit isPending={isPending} name="activation" onClick={this.onSubmit} />
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
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  nextStep: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    error: state.activationReducer.error,
    isError: state.activationReducer.isActivationError,
    isPending: state.activationReducer.isActivationPending,
    isSuccess: state.activationReducer.isActivationSuccess,
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
  )(createForm()(ActivationPage))
);
