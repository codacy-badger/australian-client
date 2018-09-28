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

const GivenNameFormGroup = ({ form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const givenNameErrors = getFieldError("givenName");
  const hasError = givenNameErrors ? givenNameErrors.length > 0 : false;

  return (
    <FormGroup row>
      <Label for="givenName" sm={4}>
        {t("form.profile.givenName.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="user" />
          <Input
            type="text"
            name="givenName"
            id="GivenName"
            className={givenNameErrors ? "is-invalid" : ""}
            {...getFieldProps("givenName", {
              initialValue: value,
              onChange
            })}
            placeholder={t("form.profile.givenName.placeholder")}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={givenNameErrors} />}
        {hasError || <HelpBlock>{t("form.profile.givenName.helpBlock")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

GivenNameFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations", "validators")(GivenNameFormGroup);
