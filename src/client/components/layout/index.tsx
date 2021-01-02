import React from "react";
import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
