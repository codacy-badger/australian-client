import React from "react";
import PropTypes from "prop-types";
import PasswordForm from "../../form/PasswordForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createForm, formShape } from "rc-form";
import { passwordUpdate } from "../../../actions/passwordActions";
import { translate } from "react-i18next";

class PasswordContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmation: ""
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

    this.props.form.validateFields((error) => {
      if (!error) {
        const{ oldPassword, newPassword } = this.state;
        this.props.actions.passwordUpdate({oldPassword, newPassword});
        this.setState({
          oldPassword: "",
          newPassword: "",
          confirmation: ""
        });
      }
    });
  }

  render() {
    const { error, isError, isSuccess, success, t, ...status } = this.props;

    return(
      <div>
        <h2>{t("title.password")}</h2>
        <StatusAlert code="password" error={error} isError={isError} isSuccess={isSuccess} success={success} />
        <PasswordForm {...this.state} {...status} onSubmit={this.onSubmit} onChange={this.onChange} />
      </div>
    );
  }
}

// The propTypes.
PasswordContainer.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.passwordReducer.error,
    isError: state.passwordReducer.isPasswordError,
    isPending: state.passwordReducer.isPasswordPending,
    isSuccess: state.passwordReducer.isPasswordSuccess,
    success: state.passwordReducer.success
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( {passwordUpdate}, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translate()(createForm()(PasswordContainer)));
