import React from "react";
import PropTypes from "prop-types";
import isEmpty from "validator/lib/isEmpty";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import { Form } from "reactstrap";
import { Field, reduxForm, propTypes } from "redux-form";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isUsernameUnique, updateProfile } from "../../actions/profileActions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faUser, faUserMd);

export const validate = (values) => {
  const errors = {};

  if (!values.name || isEmpty(values.name)) {
    errors.name = "name is required";
  }

  return errors;
};

//FIXME when I click two times on General tabs, I loose data in form. (reducer is OK)
//HAVE A LOOK ON : https://github.com/supasate/connected-react-router
//FIRST HAVE A LOOK ON : https://github.com/erikras/redux-form/issues/3435#issuecomment-357231919
class ProfileForm extends React.Component {
  render() {
    const { actions, asyncValidating, handleSubmit, isLoading, pristine, reset, submitting } = this.props;

    const asyncNameValidating = false !== asyncValidating;

    const fieldProps = {
      disabled: submitting || isLoading,
      isLoading: submitting || isLoading
    };

    return (
      <Form onSubmit={handleSubmit(actions.updateProfile)}>
        <Field
          icon="user"
          component={FormTextGroup}
          disabled={submitting || isLoading}
          isLoading={submitting || isLoading || asyncNameValidating}
          name="name"
          required
        />
        <Field icon="user" component={FormTextGroup} {...fieldProps} name="givenName" />
        <Field icon="user" component={FormTextGroup} {...fieldProps} name="familyName" />
        <Field icon="user-md" component={FormTextGroup} {...fieldProps} name="jobTitle" />

        <div className="text-right">
          <Reset disabled={pristine || submitting} onClick={reset} />
          <Submit
            disabled={pristine || asyncNameValidating}
            isPending={submitting}
            name="profile"
            onClick={handleSubmit(actions.updateProfile)}
          />
        </div>
      </Form>
    );
  }
}

// The propTypes.
ProfileForm.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  ...propTypes
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    initialValues: state.profileReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ updateProfile }, dispatch)
  };
}

// Redux form begin here
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    asyncChangeFields: ["name"],
    asyncValidate: isUsernameUnique,
    enableReinitialize: true,
    form: "profile",
    validate
  })(translate("validators")(ProfileForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
