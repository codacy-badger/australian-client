import React from "react";
import PropTypes from "prop-types";
import DeleteAccountForm from "../../form/DeleteAccountForm";
import ErrorAlert from "../../common/alert/ErrorAlert";
import { Trans, translate} from "react-i18next";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteAccount } from "../../../actions/deleteAccountActions";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashAlt);

const AccountContainer = (props) => {
  const {
    actions,
    error: { code, message },
    isError,
    t
  } = props;

  return (
    <div className="text-danger">
      <h2>{t("title.profile-account")}</h2>
      <p>{t("form.profile-account.description")}</p>
      {isError && <ErrorAlert><Trans i18nKey={"error."+code}>{message}</Trans></ErrorAlert>}
      <DeleteAccountForm onSubmit={actions.deleteAccount}/>
    </div>
  );
};

// The propTypes.
AccountContainer.propTypes = {
  error: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.deleteAccountReducer.error,
    isError: state.deleteAccountReducer.isDeleteAccountError,
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
)(translate()(AccountContainer));
