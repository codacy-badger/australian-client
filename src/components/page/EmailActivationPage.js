import React from "react";
import EmailActivationForm from "../form/EmailActivationForm";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";

const AccountActivationPage = (props) => {
  const values = {
    activation: props.match.params.activationCode
  };

  return (
    <div>
      <Meta code="email-activation" />
      <Header />
      <Container className="mt-3 text-justify">
        <EmailActivationForm initialValues={values} />
      </Container>
    </div>
  );
};

export default AccountActivationPage;
