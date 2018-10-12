import React from "react";
import EmailRestorationForm from "../form/EmailRestorationForm";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";

const EmailRestorationPage = (props) => {
  const values = {
    restoration: props.match.params.restorationCode
  };

  return (
    <div>
      <Meta code="email-restoration" />
      <Header />
      <Container className="mt-3 text-justify">
        <EmailRestorationForm initialValues={values} />
      </Container>
    </div>
  );
};

export default EmailRestorationPage;
