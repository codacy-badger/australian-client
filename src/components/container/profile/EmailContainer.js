import React from "react";
import PropTypes from "prop-types";
import EmailForm from "../../form/EmailForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createForm, formShape } from "rc-form";
import { emailUpdate } from "../../../actions/emailActions";
import { translate } from "react-i18next";

class EmailContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oldEmail: "",
      newEmail: ""
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
        const { oldEmail, newEmail } = this.state;
        this.props.actions.emailUpdate({ oldEmail, newEmail });
        this.setState({
          oldEmail: "",
          newEmail: ""
        });
      }
    });
  }

  render() {
    const { error, isError, isSuccess, success, t, ...status } = this.props;

    return (
      <div>
        <h2>{t("title.email")}</h2>
        <StatusAlert code="email" error={error} isError={isError} isSuccess={isSuccess} success={success} />
        <EmailForm {...this.state} {...status} onSubmit={this.onSubmit} onChange={this.onChange} />
      </div>
    );
  }
}

// The propTypes.
EmailContainer.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.emailReducer.error,
    isError: state.emailReducer.isEmailError,
    isPending: state.emailReducer.isEmailPending,
    isSuccess: state.emailReducer.isEmailSuccess,
    success: state.emailReducer.success
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ emailUpdate }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translate()(createForm()(EmailContainer)));
