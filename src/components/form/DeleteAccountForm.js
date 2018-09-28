import React from "react";
import PropTypes from "prop-types";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import { Button, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { formShape } from "rc-form";
import { translate } from "react-i18next";

library.add(faTrashAlt);

const DeleteAccountForm = (props) => {
  const { children, form, onChange, onSubmit, password, t } = props;

  return (
    <Form onSubmit={onSubmit} className="text-danger">
      <h2>{t("title.account")}</h2>
      <p>{t("form.account.description")}</p>
      {children}
      <PasswordFormGroup onChange={onChange} form={form} value={password} />
      <div className="text-right">
        <Button color="danger" onClick={onSubmit}>
          <FontAwesomeIcon icon="trash-alt" className={"mr-1"} />
          {t("form.account.submit")}
        </Button>
      </div>
    </Form>
  );
};

DeleteAccountForm.propTypes = {
  children: PropTypes.element,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(DeleteAccountForm);
