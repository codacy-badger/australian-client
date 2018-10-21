import React from "react";
import PropTypes from "prop-types";
import Submit from "../common/button/Submit";
import { reduxForm, propTypes, Field } from "redux-form";
import { Form } from "reactstrap";
import { translate } from "react-i18next";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchDog } from "../../actions/searchActions";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";

export const validate = (values) => {
  const errors = {};

  //TODO Complete

  return errors;
};

const SearchForm = (props) => {
  const { actions, handleSubmit, isPending, pristine, submitting } = props;

  const fieldProps = {
    disabled: submitting || isPending,
    isLoading: submitting || isPending
  };

  return (
    <Form onSubmit={handleSubmit(actions.searchDog)}>
      <div className="text-right">
        <Field icon="user" component={FormTextGroup} {...fieldProps} name="givenName" />
        <Submit
          disabled={pristine || submitting}
          isPending={submitting}
          name="dog-search"
          onClick={handleSubmit(actions.searchDog)}
        />
      </div>
    </Form>
  );
};

SearchForm.propTypes = {
  actions: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  ...propTypes
};

//Redux connect
function mapStateToProps(state) {
  return {
    isPending: state.searchReducer.isSearchPending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ searchDog }, dispatch)
  };
}

// Redux form begin here
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "dog-search",
    validate
  })(translate("validators")(SearchForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
