import React from "react";
import AccountActivationForm from "../form/AccountActivationForm";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";

const AccountActivationPage = (props) => {
  const values = {
    activation: props.match.params.activationCode
  };

  return (
    <div>
      <Meta code="account-activation" />
      <Header />
      <Container className="mt-3 text-justify">
        <AccountActivationForm initialValues={values} />
      </Container>
    </div>
  );
};

export default AccountActivationPage;
