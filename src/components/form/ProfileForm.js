import React from "react";
import PropTypes from "prop-types";
import isEmpty from "validator/lib/isEmpty";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import UserNameFormGroup from "../formgroup/UsernameFormGroup";
import FormAllGroup from "../formgroup/abstract/FormAllGroup";
import { Col, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Field, reduxForm } from "redux-form";
import { isUsernameUnique } from "../../actions/profileActions";
import { translate } from "react-i18next";
import InputGroupIcon from "../common/input/InputGroupIcon";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import HelpBlock from "../common/help/HelpBlock";

library.add(faUser, faUserMd);

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.name)) {
    errors.name = "name is required";
  }

  return errors;
};

// const renderField = (props) => {
//   const {
//     input,
//     icon,
//     type,
//     meta: { asyncValidating, error, form, submitting, touched, warning },
//     ...other
//   } = props;
//
//   const label = "form." + form + "." + input.name + ".label";
//   const help = "form." + form + "." + input.name + ".helpBlock" + "42";
//   const placeholder = "form." + form + "." + input.name + ".placeholder";
//
//   return (
//     <FormGroup row>
//       <Label for={input.name} sm={4}>
//         {label}
//       </Label>
//       <Col sm={8}>
//         <InputGroup>
//           <InputGroupIcon icon={icon} isLoading={other.isLoading || submitting || asyncValidating} />
//           <Input {...input} placeholder={placeholder} type={type} />
//         </InputGroup>
//         {touched && error && <HelpBlockErrors errors={[error]} />}
//         {help.length > 0 && (!!error || <HelpBlock>{help}</HelpBlock>)}
//       </Col>
//     </FormGroup>
//   );
// };

const ProfileForm = (props) => {
  const { status, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <StatusAlert code="profile" status={status} />
      <Field
        name="name"
        type="text"
        icon="user"
        component={FormAllGroup}
        isLoading={status.isPending || status.isLoading}
      />
      <Field
        name="givenName"
        type="text"
        icon="user"
        component={FormAllGroup}
        isLoading={status.isPending || status.isLoading}
        label="givenName"
      />

      <div className="text-right">
        <Submit isPending={status.isPending} name="profile" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile",
  validate,
  asyncValidate: isUsernameUnique,
  asyncBlurFields: ["name"]
})(translate("validators")(ProfileForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
