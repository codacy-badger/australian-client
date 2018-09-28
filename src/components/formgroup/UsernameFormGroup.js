import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import InputGroupIcon from "../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faUser);

const UsernameFormGroup = ({ form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const nameErrors = getFieldError("name");
  const hasError = nameErrors ? nameErrors.length > 0 : false;

  return (
    <FormGroup row>
      <Label for="name" sm={4}>
        {t("form.profile.name.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="user" />
          <Input
            type="text"
            name="name"
            id="Name"
            className={nameErrors ? "is-invalid" : ""}
            {...getFieldProps("name", {
              initialValue: value,
              onChange,
              rules: [{ required: true }]
            })}
            placeholder={t("form.profile.name.placeholder")}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={nameErrors} />}
        {hasError || <HelpBlock>{t("form.profile.name.helpBlock")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

UsernameFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations", "validators")(UsernameFormGroup);
