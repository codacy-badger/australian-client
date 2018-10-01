import React from "react";
import PropTypes from "prop-types";
import ConfirmationFormGroup from "../formgroup/ConfirmationFormGroup";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import Submit from "../common/button/Submit";
import { Form } from "reactstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { formShape } from "rc-form";

library.add(faTrashAlt);

const PasswordForm = (props) => {
  const { confirmation, form, isPending, onChange, onSubmit, oldPassword, newPassword} = props;

  return (
    <Form onSubmit={onSubmit}>
      <PasswordFormGroup onChange={onChange} form={form} value={oldPassword} oldPassword />
      <PasswordFormGroup onChange={onChange} form={form} value={newPassword} newPassword />
      <ConfirmationFormGroup onChange={onChange} form={form} value={confirmation} password={newPassword}/>
      <div className="text-right">
        <Submit name="password" icon="trash-alt" onClick={onSubmit} isPending={isPending} />
      </div>
    </Form>
  );
};


PasswordForm.propTypes = {
  confirmation: PropTypes.string.isRequired,
  form: formShape,
  isPending: PropTypes.bool.isRequired,
  newPassword: PropTypes.string.isRequired,
  oldPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PasswordForm;
