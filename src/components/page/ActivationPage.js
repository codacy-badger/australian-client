import React from "react";
import ActivationForm from "../form/ActivationForm";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";

const ActivationPage = (props) => {
  const values = {
    activation: props.match.params.activationCode
  };

  return (
    <div>
      <Meta code="activation" />
      <Header />
      <Container className="mt-3 text-justify">
        <ActivationForm initialValues={values} />
      </Container>
    </div>
  );
};

export default ActivationPage;
