import React, { Component } from "react";
import PropTypes from "prop-types";
import AddressForm from "../../form/AddressForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAddress } from "../../../actions/addressActions";
import { translate } from "react-i18next";

class AddressContainer extends Component {
  constructor(props) {
    super(props);

    this.props.actions.getAddress();
  }

  render() {
    const { status, t } = this.props;

    return (
      <div>
        <h2>{t("title.profile-address")}</h2>
        <StatusAlert status={status} code="profile-address" />
        <AddressForm />
      </div>
    );
  }
}

AddressContainer.propTypes = {
  t: PropTypes.func.isRequired
};
// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.addressReducer.error,
      isError: state.addressReducer.isAddressError,
      isLoading: state.addressReducer.isAddressLoading,
      isSuccess: state.addressReducer.isAddressSuccess,
      success: state.addressReducer.success
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getAddress }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddressContainer)
);
