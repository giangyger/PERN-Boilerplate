import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Logo from "../assets/images/react.png";

const HomeView: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <img src={Logo} width={256} height={256} />
        <h1>Welcome, this is the PERN Boilerplate</h1>
      </Wrapper>
    </Layout>
  );
};

export default HomeView;

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
