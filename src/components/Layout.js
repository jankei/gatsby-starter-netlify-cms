import React from "react";
import Helmet from "react-helmet";
import { createGenerateClassName, JssProvider } from "react-jss";

import "./all.sass";

const generateClassName = createGenerateClassName();

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Boxify" />
    <JssProvider generateClassName={generateClassName}>
      <div>{children}</div>
    </JssProvider>
  </div>
);

export default TemplateWrapper;
