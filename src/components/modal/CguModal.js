import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faFileSignature, faTimes);

class CguModal extends Component {
  render() {
    const { accept, decline, isOpen, t, toggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
          <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
          {t("title.cgu")}
        </ModalHeader>
        <ModalBody>Bla bla</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={accept}>
            <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
            {t("button.accept")}
          </Button>
          <Button color="secondary" onClick={decline}>
            <FontAwesomeIcon icon={faTimes} className="mr-1" />
            {t("button.decline")}
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
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

export default translate(["cgu", "translations"])(CguModal);
