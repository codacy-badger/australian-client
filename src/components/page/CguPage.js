import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { Container } from "reactstrap";
import Header from "../common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";

library.add(faFileSignature);

const CguPage = ({ t }) => {
  return (
    <div>
      <Header />
      <Container className="text-justify mt-2">
        <h1>
          <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
          {t("title.cgu")}
        </h1>
        <h2 className="article mt-3">{t("cgu.article1.title")}</h2>
        <p>{t("cgu.article1.paragraph")}</p>
        <ul>
          <li>{t("cgu.article1.usage1")}</li>
          <li>{t("cgu.article1.usage2")}</li>
          <li>{t("cgu.article1.usage3")}</li>
        </ul>
        <h2 className="article">{t("cgu.article2.title")}</h2>
        <p>{t("cgu.article2.paragraph1")}</p>
        <address>
          <strong>{t("cgu.article2.address1")}</strong>
          <br />
          {t("cgu.article2.address2")}
          <br />
          {t("cgu.article2.address3")}
          <br />
        </address>
        <p>{t("cgu.article2.paragraph2")}</p>
        <ul>
          <li>{t("cgu.article2.contact1")}</li>
          <li>{t("cgu.article2.contact2")}</li>
        </ul>
        <h2 className="article">{t("cgu.article3.title")}</h2>
        <p>{t("cgu.article3.paragraph")}</p>
        <ul>
          <li>{t("cgu.article3.definition1")}</li>
          <li>{t("cgu.article3.definition2")}</li>
          <li>{t("cgu.article3.definition3")}</li>
          <li>{t("cgu.article3.definition4")}</li>
        </ul>
        <h2 className="article">{t("cgu.article4.title")}</h2>
        <p>{t("cgu.article4.paragraph")}</p>
        <ul>
          <li>{t("cgu.article4.object1")}</li>
          <li>{t("cgu.article4.object2")}</li>
          <li>{t("cgu.article4.object3")}</li>
          <li>{t("cgu.article4.object4")}</li>
          <li>{t("cgu.article4.object5")}</li>
          <li>{t("cgu.article4.object6")}</li>
          <li>{t("cgu.article4.object7")}</li>
          <li>{t("cgu.article4.object8")}</li>
          <li>{t("cgu.article4.object9")}</li>
          <li>{t("cgu.article4.object10")}</li>
        </ul>
        <h2 className="article">{t("cgu.article5.title")}</h2>
        <p>{t("cgu.article5.paragraph")}</p>
        <ul>
          <li>{t("cgu.article5.condition1")}</li>
          <li>{t("cgu.article5.condition2")}</li>
          <li>{t("cgu.article5.condition3")}</li>
        </ul>
        <h2 className="article">{t("cgu.article6.title")}</h2>
        <p>{t("cgu.article6.paragraph")}</p>
        <ul>
          <li>{t("cgu.article6.condition1")}</li>
        </ul>
        <h2 className="article">{t("cgu.article7.title")}</h2>
        <p>{t("cgu.article7.paragraph")}</p>
        <h2 className="article">{t("cgu.article8.title")}</h2>
        <p>{t("cgu.article8.paragraph1")}</p>
        <ul>
          <li>{t("cgu.article8.responsability1")}</li>
          <li>{t("cgu.article8.responsability2")}</li>
        </ul>
        <p>{t("cgu.article8.paragraph2")}</p>
        <p>{t("cgu.article8.paragraph3")}</p>
        <p>{t("cgu.article8.paragraph4")}</p>
        <h2 className="article">{t("cgu.article9.title")}</h2>
        <p>{t("cgu.article9.paragraph1")}</p>
        <ul>
          <li>{t("cgu.article9.data1")}</li>
          <li>{t("cgu.article9.data2")}</li>
        </ul>
        <p>{t("cgu.article9.paragraph2")}</p>
        <p>{t("cgu.article9.paragraph3")}</p>
        <p>{t("cgu.article9.paragraph4")}</p>
        <p>{t("cgu.article9.paragraph5")}</p>
        <p>{t("cgu.article9.paragraph6")}</p>
        <p>{t("cgu.article9.paragraph7")}</p>
        <h2 className="article">{t("cgu.article10.title")}</h2>
        <p>{t("cgu.article10.paragraph")}</p>
        <h2 className="article">{t("cgu.article11.title")}</h2>
        <p>{t("cgu.article11.paragraph")}</p>
        <h2 className="article">{t("cgu.article12.title")}</h2>
        <p>{t("cgu.article12.paragraph")}</p>
        <h2 className="article">{t("cgu.article13.title")}</h2>
        <p>{t("cgu.article13.paragraph1")}</p>
        <ul>
          <li>{t("cgu.article13.motif.client1")}</li>
          <li>{t("cgu.article13.motif.client2")}</li>
        </ul>
        <p>{t("cgu.article13.paragraph2")}</p>
        <ul>
          <li>{t("cgu.article13.motif.owner1")}</li>
          <li>{t("cgu.article13.motif.owner2")}</li>
        </ul>
        <h2 className="article">{t("cgu.article14.title")}</h2>
        <p>{t("cgu.article14.paragraph")}</p>
      </Container>
    </div>
  );
};

CguPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(["cgu", "translations"])(CguPage);
