import React, { Component } from "react";
import PropTypes from "prop-types";
import DeleteAccountForm from "../../form/DeleteAccountForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createForm, formShape } from "rc-form";
import { deleteAccount } from "../../../actions/deleteAccountActions";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashAlt);

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        this.props.actions.deleteAccount(this.state.password);
      }
    });
  }

  render() {
    const { password } = this.state;

    return <DeleteAccountForm {...this.props} password={password} onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

// The propTypes.
AccountContainer.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.deleteAccountReducer.error,
    isError: state.deleteAccountReducer.isDeleteAccountError,
    isPending: state.deleteAccountReducer.isDeleteAccountPending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteAccount }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(AccountContainer));
