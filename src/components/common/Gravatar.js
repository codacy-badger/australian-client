import React from "react";
import PropTypes from "prop-types";
import md5 from "blueimp-md5";

const Gravatar = (props) => {
  const { className, defaultImg, email, rating, size } = props;

  const params = [];
  params.push("r=" + rating);
  params.push("d=" + defaultImg);
  params.push("s=" + size);

  const url = "//www.gravatar.com/avatar/" + md5(email) + "?" + params.join("&");

  return <img src={url} alt="Gravatar" style={{ width: size, height: size, borderRadius: "50%" }} className={className}/>;
};

//PropTypes
Gravatar.defaultProps = {
  className: "",
  defaultImg: "identicon",
  rating: "g",
  size: 80
};

Gravatar.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
  size: PropTypes.number,
  rating: PropTypes.oneOf(["g", "pg", "r", "x"]),
  defaultImg: PropTypes.oneOf(["404", "mm", "identicon", "monsterid", "wavatar", "retro", "blank"])
};

export default Gravatar;
