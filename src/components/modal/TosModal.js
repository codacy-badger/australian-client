import React, { Component } from "react";
import PropTypes from "prop-types";
import CguContent from "../common/TosContent";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faFileSignature, faTimes);

class TosModal extends Component {
  render() {
    const { accept, decline, isOpen, t, toggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
          <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
          {t("title.tos")}
        </ModalHeader>
        <ModalBody>
          <CguContent />
        </ModalBody>
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

TosModal.propTypes = {
  accept: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

export default translate(["tos", "translations"])(TosModal);
