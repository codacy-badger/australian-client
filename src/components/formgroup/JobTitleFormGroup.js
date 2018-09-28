import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import InputGroupIcon from "../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faUserMd);

const JobTitleFormGroup = ({ form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const jobTitleErrors = getFieldError("jobTitle");
  const hasError = jobTitleErrors ? jobTitleErrors.length > 0 : false;

  return (
    <FormGroup row>
      <Label for="jobTitle" sm={4}>
        {t("form.profile.jobTitle.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="user-md" />
          <Input
            type="text"
            name="jobTitle"
            id="JobTitle"
            className={jobTitleErrors ? "is-invalid" : ""}
            {...getFieldProps("jobTitle", {
              initialValue: value,
              onChange
            })}
            placeholder={t("form.profile.jobTitle.placeholder")}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={jobTitleErrors} />}
        {hasError || <HelpBlock>{t("form.profile.jobTitle.helpBlock")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

JobTitleFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations", "validators")(JobTitleFormGroup);
