import React from "react";
import PropTypes from "prop-types";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import Submit from "../common/button/Submit";
import { Form } from "reactstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashAlt);

const EmailForm = (props) => {
  const { form, isPending, onChange, onSubmit, oldEmail, newEmail } = props;

  return (
    <Form onSubmit={onSubmit}>
      <EmailFormGroup onChange={onChange} form={form} value={oldEmail} oldEmail />
      <EmailFormGroup onChange={onChange} form={form} value={newEmail} newEmail />
      <div className="text-right">
        <Submit name="email" onClick={onSubmit} isPending={isPending} />
      </div>
    </Form>
  );
};

EmailForm.propTypes = {
  form: formShape,
  isPending: PropTypes.bool.isRequired,
  newEmail: PropTypes.string.isRequired,
  oldEmail: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EmailForm;
