import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

const TosContent = ({ t }) => {
  return (
    <div>
      <h2 className="article mt-3">{t("tos.article1.title")}</h2>
      <p>{t("tos.article1.paragraph")}</p>
      <ul>
        <li>{t("tos.article1.usage1")}</li>
        <li>{t("tos.article1.usage2")}</li>
        <li>{t("tos.article1.usage3")}</li>
      </ul>
      <h2 className="article">{t("tos.article2.title")}</h2>
      <p>{t("tos.article2.paragraph1")}</p>
      <address>
        <strong>{t("tos.article2.address1")}</strong>
        <br />
        {t("tos.article2.address2")}
        <br />
        {t("tos.article2.address3")}
        <br />
      </address>
      <p>{t("tos.article2.paragraph2")}</p>
      <ul>
        <li>{t("tos.article2.contact1")}</li>
        <li>{t("tos.article2.contact2")}</li>
      </ul>
      <h2 className="article">{t("tos.article3.title")}</h2>
      <p>{t("tos.article3.paragraph")}</p>
      <ul>
        <li>{t("tos.article3.definition1")}</li>
        <li>{t("tos.article3.definition2")}</li>
        <li>{t("tos.article3.definition3")}</li>
        <li>{t("tos.article3.definition4")}</li>
      </ul>
      <h2 className="article">{t("tos.article4.title")}</h2>
      <p>{t("tos.article4.paragraph")}</p>
      <ul>
        <li>{t("tos.article4.object1")}</li>
        <li>{t("tos.article4.object2")}</li>
        <li>{t("tos.article4.object3")}</li>
        <li>{t("tos.article4.object4")}</li>
        <li>{t("tos.article4.object5")}</li>
        <li>{t("tos.article4.object6")}</li>
        <li>{t("tos.article4.object7")}</li>
        <li>{t("tos.article4.object8")}</li>
        <li>{t("tos.article4.object9")}</li>
        <li>{t("tos.article4.object10")}</li>
      </ul>
      <h2 className="article">{t("tos.article5.title")}</h2>
      <p>{t("tos.article5.paragraph")}</p>
      <ul>
        <li>{t("tos.article5.condition1")}</li>
        <li>{t("tos.article5.condition2")}</li>
        <li>{t("tos.article5.condition3")}</li>
      </ul>
      <h2 className="article">{t("tos.article6.title")}</h2>
      <p>{t("tos.article6.paragraph")}</p>
      <ul>
        <li>{t("tos.article6.condition1")}</li>
      </ul>
      <h2 className="article">{t("tos.article7.title")}</h2>
      <p>{t("tos.article7.paragraph")}</p>
      <h2 className="article">{t("tos.article8.title")}</h2>
      <p>{t("tos.article8.paragraph1")}</p>
      <ul>
        <li>{t("tos.article8.responsability1")}</li>
        <li>{t("tos.article8.responsability2")}</li>
      </ul>
      <p>{t("tos.article8.paragraph2")}</p>
      <p>{t("tos.article8.paragraph3")}</p>
      <p>{t("tos.article8.paragraph4")}</p>
      <h2 className="article">{t("tos.article9.title")}</h2>
      <p>{t("tos.article9.paragraph1")}</p>
      <ul>
        <li>{t("tos.article9.data1")}</li>
        <li>{t("tos.article9.data2")}</li>
      </ul>
      <p>{t("tos.article9.paragraph2")}</p>
      <p>{t("tos.article9.paragraph3")}</p>
      <p>{t("tos.article9.paragraph4")}</p>
      <p>{t("tos.article9.paragraph5")}</p>
      <p>{t("tos.article9.paragraph6")}</p>
      <p>{t("tos.article9.paragraph7")}</p>
      <h2 className="article">{t("tos.article10.title")}</h2>
      <p>{t("tos.article10.paragraph")}</p>
      <h2 className="article">{t("tos.article11.title")}</h2>
      <p>{t("tos.article11.paragraph")}</p>
      <h2 className="article">{t("tos.article12.title")}</h2>
      <p>{t("tos.article12.paragraph")}</p>
      <h2 className="article">{t("tos.article13.title")}</h2>
      <p>{t("tos.article13.paragraph1")}</p>
      <ul>
        <li>{t("tos.article13.motif.client1")}</li>
        <li>{t("tos.article13.motif.client2")}</li>
      </ul>
      <p>{t("tos.article13.paragraph2")}</p>
      <ul>
        <li>{t("tos.article13.motif.owner1")}</li>
        <li>{t("tos.article13.motif.owner2")}</li>
      </ul>
      <h2 className="article">{t("tos.article14.title")}</h2>
      <p>{t("tos.article14.paragraph")}</p>
    </div>
  );
};

// The propTypes.
TosContent.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("tos")(TosContent);
