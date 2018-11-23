import React from "react";
import Helmet from "react-helmet";

import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        rel="stylesheet"
      />
      <title>Boxify</title>
    </Helmet>
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
