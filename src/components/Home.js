import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Content>
        <Section>
          <a>
            <h5>Hurry in hiring ? - </h5>
          </a>
          <p>
            &nbsp; Find talented pros in record time with Upwork and keep
            business moving.
          </p>
        </Section>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  a {
    font-weight: 700;

    h5 {
      color: #0a66c2;
      font-size: 14px;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  /* margin: 25px; */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 25px 0 80px;
  }
`;

const mapStateToProps = (state) => ({
  user: state.userState.user,
});
export default connect(mapStateToProps)(Home);
