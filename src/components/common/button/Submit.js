import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

library.add(faUpload);

const Submit = (props) => {
  return <Button type="submit" {...props} />;
};

Submit.defaultProps = {
  icon: "upload",
  rotation: 0
};

// The propTypes.
Submit.propTypes = {
  icon: PropTypes.string,
  isPending: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  rotation: PropTypes.oneOf([0, 90, 180, 270])
};

export default Submit;
