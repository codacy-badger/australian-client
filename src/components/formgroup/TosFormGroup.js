import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAt);

const TosFormGroup = ({ disabled, isPending, form, onChange, onClickCgu, t, value }) => {
  const { getFieldProps, getFieldError, getFieldValue } = form;
  const tosErrors = getFieldError("read");

  return (
    <FormGroup check>
      <Col sm={{ size: 8, offset: 4 }}>
        <Label check>
          <Input
            type="checkbox"
            name="read"
            className={tosErrors ? "is-invalid" : ""}
            disabled={isPending}
            {...getFieldProps("read", {
              initialValue: value,
              rules: [
                {
                  type: "boolean",
                  required: true
                }
              ],
              onChange,
              valuePropName: "checked"
            })}
          />
          <Button onClick={onClickCgu} color={"link"} className="m-0 p-0" disabled={isPending}>
            {t("form.register.read.label")}
          </Button>
        </Label>
        {getFieldValue("read") || <HelpBlock color={"danger"}>{t("validators:accept cgu")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

TosFormGroup.defaultProps = {
  disabled: false,
  isPending: false
};

TosFormGroup.propTypes = {
  disabled: PropTypes.bool,
  isPending: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  onClickCgu: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default translate(["translations", "validators"])(TosFormGroup);
