import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";
import InputGroupIcon from "../../common/input/InputGroupIcon";
import { Col, FormGroup as ReactFormGroup, Input, InputGroup, Label } from "reactstrap";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";
import { connect } from "react-redux";

library.add(faAlignJustify);

const FormAllGroup = (props) => {
  if (props.input.name === "name") {
    console.dir(props.meta);
    console.dir(
      props.input.validate,
      "-",
      props.input.value,
      "-",
      props.meta.touched,
      props.meta.error,
      props.meta.warning
    );
  } else {
    return <div>NOT THIS ONE</div>;
  }

  const {
    children,
    helpBlock,
    icon,
    isLoading,
    input: { name },
    meta: { submitting, error, touched, form },
    required,
    t
  } = props;
  const { input } = props;
  const label = t("form." + form + "." + name + ".label");
  const help = t("form." + form + "." + name + ".helpBlock") + "42";

  return (
    <ReactFormGroup row>
      <Label for={name} sm={4}>
        {label}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon={icon} isLoading={isLoading || submitting} />
          <Input {...input} disabled={isLoading || submitting} className={error ? "is-invalid" : ""} />
        </InputGroup>
        {touched && error && <HelpBlockErrors errors={[error]} />}
        {helpBlock && help.length > 0 && (!!error || <HelpBlock>{help}</HelpBlock>)}
        {children}
      </Col>
    </ReactFormGroup>
  );

  //const { children, disabled, fieldName, formName, helpBlock, icon, onChange, rules, t, type } = props;

  //const { getFieldProps, getFieldError } = form;

  // const errors = ["TODO"]; //getFieldError(fieldName);
  // const hasError = errors ? errors.length > 0 : false;
  // const help = t("form." + formName + "." + fieldName + ".helpBlock");
  //
  // const placeholder = t("form." + formName + "." + fieldName + ".placeholder");
  //
  // //TODO https://github.com/reactstrap/reactstrap/issues/707#issuecomment-351593584
  // //TODO test a local onChange to display errors.
  // return (
  //   <ReactFormGroup row>
  //     <Label for={fieldName} sm={4}>
  //       {label}
  //     </Label>
  //     <Col sm={8}>
  //       <InputGroup>
  //         <InputGroupIcon icon={icon} isLoading={disabled} />
  //         <Field
  //           className={errors ? "is-invalid form-control" : "form-control"}
  //           component="input"
  //           name={fieldName}
  //           disabled={disabled}
  //           placeholder={placeholder}
  //           type={type}
  //         />
  //       </InputGroup>
  //       {touched && error && <span>{error}</span>}
  //       {/*{touched && hasError && <HelpBlockErrors errors={errors} />}*/}
  //       {helpBlock && help.length > 0 && (hasError || <HelpBlock>{help}</HelpBlock>)}
  //       {children}
  //     </Col>
  //   </ReactFormGroup>
  // );
};

FormAllGroup.defaultProps = {
  disabled: false,
  formName: "general",
  helpBlock: false,
  icon: "align-justify",
  type: "text"
};

// The propTypes.
FormAllGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string,
  rules: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "confirmation"])
};

export default connect()(translate()(FormAllGroup));
