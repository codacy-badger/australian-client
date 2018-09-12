import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faInfoCircle, faSignInAlt);

class CguModal extends Component {
  render() {
    const { accept, decline, isOpen, toggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>CGU</ModalHeader>
        <ModalBody>Bla bla</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={accept}>
            Accept
          </Button>
          <Button color="secondary" onClick={decline}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

CguModal.propTypes = {
  accept: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default translate("translations")(CguModal);
